<!DOCTYPE html>
<html lang="en">
	<head>
		<title>RUPA</title>
		<h1>Radford University Parking App</h1>
	</head>
	<body> <hr>
		<form method="post">
		<fieldset>
			<legend>Log in</legend>
			<label>Username:</label>
			<input type="text" name="username"><br>
			<button type="submit" name="newuser" value="user">User Log In</button>
		</fieldset>
		<fieldset>
			<legend>Guest Log In</legend>
			<button type="submit" name="guest" value="guest">Guest Log in</button> 
		</fieldset>
		</form>
	</body>

	<style>
		h1 {
			text-align: center;
			font-family:'Times New Roman', Times, serif;
			color: red;
		}
	</style>
</html>



<?php
echo "<br>";
require "connection.php";

/* $query = "SELECT * FROM Users WHERE username LIKE 'johndoe@radford.edu';";
$statement = $pdo->query($query);
$row = $statement->fetch(PDO::FETCH_ASSOC);
 */
if (isset($_SESSION["username"])) {
	echo $_SESSION["username"];
} else {
	echo " no username detected";
}

echo $row['username'];



?>