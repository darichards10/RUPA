<?php
require "connection.php";
require "transaction.php";
session_start();

if(isset($_POST["spotsubmission"])) {
    $spot = explode(",",$_POST["spotsubmission"]);
    $tcquery = "SELECT * FROM Spots WHERE LotLetter = '".$spot[0]."' AND SpID = '".$spot[1]."';";
    $tcfetch = qry($pdo,$tcquery);

    try {
        $update = "UPDATE Spots SET isOpen = false WHERE LotLetter = :LotLetter AND SpID = :SpID;";
        $parkhist = "INSERT INTO ParkHistory(LotLetter,SpID,username,isParked)
                VALUES(:LotLetter, :SpID, :username, :isParked);";

        $cat = array("LotLetter" => $spot[0], "SpID" => $spot[1]);
        $phcat = array("LotLetter" => $spot[0], "SpID" => $spot[1], "username" => $_COOKIE["login"],"isParked" => "1");
        if($tcfetch["isOpen"] == 0) {
            $_SESSION["message"] = "That spot is already taken. Please select another spot.";
        } else {
            qry($pdo,$update,$cat);
            qry($pdo,$parkhist,$phcat);
            $_SESSION["message"] = "Successfully parked at " . $spot[0] . ": " . $spot[1] . "!";
        }
    } catch (PDOException $e) {
        $_SESSION["message"] = "Something went wrong. Please try again.";
    }
}

if(isset($_POST["unparksubmission"])) {
    $spot = explode(",", $_POST["unparksubmission"]);
    $tcquery = "SELECT * FROM Spots WHERE LotLetter = '".$spot[0]."' AND SpID = '".$spot[1]."';";
    $tcfetch = qry($pdo,$tcquery);

    try {
        $update = "UPDATE Spots SET isOpen = true WHERE LotLetter = :LotLetter AND SpID = :SpID;";
        $parkhist = "INSERT INTO ParkHistory(LotLetter,SpID,username,isParked)
                VALUES(:LotLetter, :SpID, :username, :isParked);";

        $cat = array("LotLetter" => $spot[0], "SpID" => $spot[1]);
        $phcat = array("LotLetter" => $spot[0], "SpID" => $spot[1], "username" => $_COOKIE["login"],"isParked" => "0");

        if($tcfetch["isOpen"] == 1) {
            $_SESSION["message"] = "You have already unparked here.";
        } else {
            qry($pdo,$update,$cat);
            qry($pdo,$parkhist,$phcat);
            $_SESSION["message"] = "Successfully unparked at " . $spot[0] . ": " . $spot[1] . "!";
        }
    } catch (PDOException $e) {
        $_SESSION["message"] = "Something went wrong. Please try again.";
    }
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
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
            var pass = <?=isset($_SESSION["parkpass"]) ? "'" . $_SESSION["parkpass"] . "'" : "null";?>;
            var cookiesEnabled = <?=isset($_SESSION["cookiesEnabled"]) ? "true" : "false";?>;
            var loginExists = <?=isset($_COOKIE["login"]) ? "true" : "false";?>;
            <?php
            if(isset($_COOKIE["login"])) {
                $parkhist = "SELECT * FROM ParkHistory WHERE username = :username ORDER BY hID DESC;";
                $cat = array("username" => $_COOKIE["login"]);
                $fetch = qry($pdo,$parkhist,$cat,"fetch");
                $insert = count($fetch) > 0 ? json_encode($fetch) : "null";
                echo "var userpark = ". $insert .";\n";
            }
            if(isset($_SESSION["message"])) {
                echo "alert('".$_SESSION["message"]."');";
            }
            $query = "SELECT * FROM Spots;";
            $fetch = qry($pdo,$query,null,"fetchAll");
            echo "var dbinfo = " . json_encode($fetch).";";
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