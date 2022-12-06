<?php
require "cookieredir.php";
?>
<!DOCTYPE html>
<html lang="en">
        <head>
            <title>RUPA</title>
            <link rel="stylesheet" href="main.css">
            <link rel="preconnect" href="https://fonts.googleapis.com">
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
            <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@100&display=swap" rel="stylesheet">
        </head>
	<body>
        <div class="container">
            <header><h1>RADFORD UNIVERSITY PARKING APP<hr>Who are you?<h1></header>
            <form method="post" action="whovalidation.php">
                <button type="submit" class="button" name="student" value="student"><b>STUDENT</b></button><br>
                <button type="submit" class="button" name="faculty" value="faculty"><b>FACULTY</b></button><br>
                <button type="submit" class="button" name="visitor" value="visitor"><b>VISITOR</b></button>
            </form>
        </div>
	</body>
	<footer class="foot">
        Radford University <br>
        ITEC:370 <br>
        Team 03<br>
    </footer>
</html>
