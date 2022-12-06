<?php
//quick and simple way to redirect those who already have a login cookie
if(isset($_COOKIE["login"])) {
    header("Location: index.php");
    exit();
}
?>