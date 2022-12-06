<?php
require "connection.php";
require "transaction.php";
session_start();

//Parking POST Procedure
if(isset($_POST["spotsubmission"])) {
    $spot = explode(",",$_POST["spotsubmission"]);
    $tcquery = "SELECT * FROM Spots WHERE LotLetter = '".$spot[0]."' AND SpID = '".$spot[1]."';";
    $tcfetch = qry($pdo,$tcquery);

    try {
        $update = "UPDATE Spots SET isOpen = false WHERE LotLetter = :LotLetter AND SpID = :SpID;";
        $updateLotCapacity = "UPDATE Lots SET CurrentCapacity = CurrentCapacity - 1 WHERE LotLetter = :LotLetter;";
        $parkhist = "INSERT INTO ParkHistory(LotLetter,SpID,username,isParked)
                VALUES(:LotLetter, :SpID, :username, :isParked);";

        $cat = array("LotLetter" => $spot[0], "SpID" => $spot[1]);
        $lccat = array("LotLetter" => $spot[0]);
        $phcat = array("LotLetter" => $spot[0], "SpID" => $spot[1], "username" => $_COOKIE["login"],"isParked" => "1");
        if($tcfetch["isOpen"] == 0) {
            $_SESSION["message"] = "That spot is already taken. Please select another spot.";
        } else {
            qry($pdo,$update,$cat);
            qry($pdo,$updateLotCapacity,$lccat);
            qry($pdo,$parkhist,$phcat);
            $_SESSION["message"] = "Successfully parked at " . $spot[0] . ": " . $spot[1] . "!";
        }
    } catch (PDOException $e) {
        $_SESSION["message"] = "Something went wrong. Please try again.";
    }

    header("Location: map.php");
    exit();
}

//Unparking POST Procedure
if(isset($_POST["unparksubmission"])) {
    $spot = explode(",", $_POST["unparksubmission"]);
    $tcquery = "SELECT * FROM Spots WHERE LotLetter = '".$spot[0]."' AND SpID = '".$spot[1]."';";
    $tcfetch = qry($pdo,$tcquery);

    try {
        $update = "UPDATE Spots SET isOpen = true WHERE LotLetter = :LotLetter AND SpID = :SpID;";
        $updateLotCapacity = "UPDATE Lots SET CurrentCapacity = CurrentCapacity + 1 WHERE LotLetter = :LotLetter;";
        $parkhist = "INSERT INTO ParkHistory(LotLetter,SpID,username,isParked)
                VALUES(:LotLetter, :SpID, :username, :isParked);";

        $cat = array("LotLetter" => $spot[0], "SpID" => $spot[1]);
        $lccat = array("LotLetter" => $spot[0]);
        $phcat = array("LotLetter" => $spot[0], "SpID" => $spot[1], "username" => $_COOKIE["login"],"isParked" => "0");

        if($tcfetch["isOpen"] == 1) {
            $_SESSION["message"] = "You have already unparked here.";
        } else {
            qry($pdo,$update,$cat);
            qry($pdo,$updateLotCapacity,$lccat);
            qry($pdo,$parkhist,$phcat);
            $_SESSION["message"] = "Successfully unparked at " . $spot[0] . ": " . $spot[1] . "!";
        }
    } catch (PDOException $e) {
        $_SESSION["message"] = "Something went wrong. Please try again.";
    }

    header("Location: map.php");
    exit();
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <title>RUPA</title>
    <link rel="stylesheet" href="main.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@100&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.2/dist/leaflet.css"
        integrity="sha256-sA+zWATbFveLLNqWO2gtiw3HL/lh1giY/Inf1BJ0z14="
        crossorigin=""/>
        <script src="https://unpkg.com/leaflet@1.9.2/dist/leaflet.js"
        integrity="sha256-o9N1jGDZrf5tS+Ft4gbIK7mYMipq9lqpVJ91xHSyKhg="
        crossorigin=""></script>
        <script>
            //User preference information
            var pass = <?=isset($_SESSION["parkpass"]) ? "'" . $_SESSION["parkpass"] . "'" : "null";?>;
            var cookiesEnabled = <?=isset($_SESSION["cookiesEnabled"]) ? "true" : "false";?>;
            var loginExists = <?=isset($_COOKIE["login"]) ? "true" : "false";?>;

            <?php
            //SESSION & COOKIE procedures
            if(isset($_COOKIE["login"])) {
                $parkhist = "SELECT LotLetter,SpID,isParked FROM ParkHistory WHERE username = :username ORDER BY hID DESC;";
                $cat = array("username" => $_COOKIE["login"]);
                $fetch = qry($pdo,$parkhist,$cat,"fetch");
                $insert = count($fetch) > 0 ? json_encode($fetch) : "null;";
                echo "var userpark = ". $insert .";\n";
            }
            if(isset($_SESSION["message"])) {
                echo "alert('".$_SESSION["message"]."');";
            }

            //init procedures
            $lots = "SELECT * FROM Lots;";
            $spots = "SELECT * FROM Spots;";
            $spothist = "SELECT LotLetter,SpID,isParked FROM ParkHistory WHERE UNIX_TIMESTAMP(Date) > UNIX_TIMESTAMP() - 604800 AND isParked = 1;";

            $lotresult = qry($pdo,$lots,null,"fetchAll");
            $spotresult = qry($pdo,$spots,null,"fetchAll");
            $spothistresult = qry($pdo, $spothist, null, "fetchAll");
            echo "var dbinfo = " . json_encode($spotresult) . ";\n\t\t\t";

            // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
            // processing spot parking history into colors
            // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
            $spothistarr = array();
            foreach($spothistresult as $element) {
                if(!array_key_exists($element["LotLetter"],$spothistarr)) {
                    $spothistarr[$element["LotLetter"]] = array();
                } 

                if(!array_key_exists($element["SpID"], $spothistarr[$element["LotLetter"]])) {
                    $spothistarr[$element["LotLetter"]][$element["SpID"]] = 1;
                } else {
                    $spothistarr[$element["LotLetter"]][$element["SpID"]]++;
                }
            }

            foreach($spothistarr as $key => $element) {
                $arr = $element;
                arsort($arr,SORT_NUMERIC);
                $spothistarr[$key] = $arr;
            }

            $spothistcolors = array();
            $ind = 0;
            foreach($spothistarr as $lotletter => $spots) {
                $spotcount = count($spots);
                $highergroup = intval(floor($spotcount / 2));
                $highergroupinterval = $spotcount > 1 ? intval(floor(255 / $highergroup)) : 0;
                $lowergroup = intval(ceil($spotcount / 2));
                $lowergroupinterval = $spotcount > 1 && $lowergroup > 1 ? intval(floor(255 / ($lowergroup-1))) : 0;

                $red = 255;
                $green = 0;
                foreach($spots as $spid => $parkcount) {
                    $spothistcolors[$ind] = array("LotLetter" => $lotletter, "SpID" => $spid, "Color" => "#" . ($red > 15 ? "":"0") . dechex($red) . ($green > 15 ? "":"0") . dechex($green) . "00");
                    if($highergroup > 0) {
                        $highergroup--;
                        $green += $highergroupinterval;
                    } elseif($lowergroup > 0) {
                        $lowergroup--;
                        $red -= $lowergroupinterval;
                    }
                    $ind++;
                }
            }
            echo "var spotcolors = " . (count($spothistresult) > 0 ? json_encode($spothistcolors) . ";\n" : "null;\n");

            // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
            // processing lot capacity into colors
            // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
            $lotcolors = array();
            foreach($lotresult as $value) {
                $lotpercentage = intval(($value["CurrentCapacity"] / $value["MaxCapacity"]) * 100);

                $red = 0;
                $green = 0;
                if($lotpercentage > 50) {
                    $red = intval(floatval((100-$lotpercentage) / 49) * 255);
                    $green = 255;
                } else {
                    $red = 255;
                    $green = intval(floatval($lotpercentage / 51) * 255);
                }
                $lotcolors[$value["LotLetter"]] = "#" . ($red > 15 ? "" : "0") . dechex($red) . ($green > 15 ? "" : "0") . dechex($green) . "00";
            }
            echo "var lotcolors = " . json_encode($lotcolors) . ";";


            unset($_SESSION["message"]);
            ?>
        </script>
        <script src="spots.js"></script>
        <script src="lots.js"></script>
        <script src="map.js"></script>
</head>
<body onload="startMap()">
    <div id="main" class="container">
    <header><h1>RADFORD UNIVERSITY PARKING APP<hr><h1></header> 
        <div id="map"></div>
    </div>
</body>
<footer class="foot">
    Radford University <br>
    ITEC:370 <br>
    Team 03<br>
</footer>
</html>