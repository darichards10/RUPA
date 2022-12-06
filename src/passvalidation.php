<?php
require "connection.php";
require "transaction.php";
require "cookieredir.php";
session_start();

//pass selection through post request
if(!empty($_POST["met"])) {
    $_SESSION["parkpass"] = "black";
} elseif(!empty($_POST["com"])) {
    $_SESSION["parkpass"] = "yellow";
} elseif(!empty($_POST["uap"])) {
    $_SESSION["parkpass"] = "purple";
} elseif(!empty($_POST["res"])) {
    $_SESSION["parkpass"] = "blue";
} 

//parkpass POST procedure
if(isset($_SESSION["parkpass"])) {
    $query = "INSERT INTO Users (username, parkpass)
            VALUES (:username, :parkpass)";
    $category = array();

    if(isset($_SESSION["username"]) && $_SESSION["cookiesEnabled"] == true) {
        $category["username"] = $_SESSION["username"];
        $category["parkpass"] = $_SESSION["parkpass"];

        try {
            qry($pdo,$query,$category);
        } catch(Exception $e) {
            header("Location: login.php");
            exit();
        }
        
        setcookie("login",$_SESSION["username"],time() + (86400 * 30), "/");
        unset($_SESSION["username"]);

        header("Location: map.php");
        exit();

    } else {
        header("Location: map.php");
        exit();
    }

} else {
    header("Location: index.php");
    exit();
}

?>
