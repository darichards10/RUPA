<?php
require "cookieredir.php";
session_start();

//Sends user to next page(s) based on who they are
if(!empty($_POST["student"])) {
    header("Location: pass.php");
    exit();
} elseif(!empty($_POST["faculty"])) {
    $_SESSION["parkpass"] = "red";
    header("Location: passvalidation.php");
    exit();
} elseif(!empty($_POST["visitor"])) {
    $_SESSION["parkpass"] = "black";
    header("Location: passvalidation.php");
    exit();
} else {
    header("Location: index.php");
    exit();
}


?>