<?php
//counts cookies to see if they're enabled
if(count($_COOKIE) <= 0) {
    header("Location: index.php");
    exit();
}
require "cookieredir.php";
session_start();

//Parses the login infomration and prepares it to be entered
if(!empty($_POST["login"])) {
    if(preg_match("/[A-Za-z0-9]+@radford.edu\$/",strtolower(trim($_POST["username"])))) {
        $hashUser = sha1(strtolower(trim($_POST["username"])));
        $_SESSION["username"] = $hashUser;
    } else {
        header("Location: index.php");
        exit();
    }
} elseif(!empty($_POST["guest"])) {
    $hashUser = sha1(uniqid("",true));
    $_SESSION["username"] = $hashUser;
} else {
    header("Location: index.php");
    exit();
}

header("Location: who.php");
exit();
?>