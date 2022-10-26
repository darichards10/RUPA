<?php
require "connection.php";
?>

<!DOCTYPE html>
<html lang="en">
    <head>
        <link rel="stylesheet" href="main.css">
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@100&display=swap" rel="stylesheet">
    </head>
    <body>
        <form method="post" action="passvalidation.php">
            <div class="container">
                <header><h1>RADFORD UNIVERSITY PARKING APP<h1></header>
                <button type="submit" class="button" name="met" value="metered" style="background-color: black; color: white;">Disabled/Metered</button><br>
                <button type="submit" class="button" name="com" value="commuter" style="background-color: rgb(255, 204, 102);">Commuter</button><br>
                <button type="submit" class="button" name="uap" value="apartment" style="background-color: #EF70EF;">University Apartment</button><br>
                <button type="submit" class="button" name="res" value="resident" style="background-color: #ADD8E6;">Resident</button>
            </div>
        </form>
    </body>
	<footer class="foot">
        Radford University <br>
        ITEC:370 <br>
        Team 03<br>
    </footer>
</html>
