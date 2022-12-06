<?php
//counts cookies to see if they're enabled
if(count($_COOKIE) <= 0) {
    header("Location: index.php");
    exit();
}
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
		<script>
			/**
			 * Validates the login in the front end, to ensure that user types in the correct email domain
			 */
			function validate() {
				var x = document.getElementById("username").value;
				var button = document.getElementById("login");
				var tooltip = document.getElementById("tooltip");
				x = x.toLowerCase();
				
				if(/@radford.edu$/.test(x)) {
					if(button.classList.contains("invisible")) {
						button.classList.remove("invisible");
					}
				} else {
					if(!button.classList.contains("invisible")) {
						button.classList.add("invisible");
					}
				}
			}
		</script>
	</head>
	<body>
		<div class="container">
			<header><h1>RADFORD UNIVERSITY PARKING APP<hr>Log-In Page<h1></header>
			<form method="post" action="loginvalidation.php">
				<input class="inp" type="email" name="username" id="username" name="username" placeholder="user@radford.edu" oninput="validate()">
				<button type="submit" class="button invisible"  value="login" name="login" id="login"><b>Log-In</b></button><hr>
				<button type="submit" class="button" value="guest" name="guest"><b> Enter as Guest</b></button>
			</form>
        </div>
    </body>
        <footer class="foot">
            Radford University <br>
            ITEC:370 <br>
            Team 03<br>
            </footer>
</html>