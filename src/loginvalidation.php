<?php
if(count($_COOKIE) <= 0) {
    header("Location: index.php");
    exit();
}
require "cookieredir.php";
session_start();

if(!empty($_POST["login"])) {
    if(preg_match("/@radford.edu\$/",$_POST["username"])) {
        $hashUser = sha1($_POST["username"]);
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