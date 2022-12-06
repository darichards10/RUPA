<?php
require "connection.php";
require "transaction.php";
session_start();

//check if user has cookies to enable DB operations
if(count($_COOKIE) > 0) {
	$_SESSION["cookiesEnabled"] = true;
	
	if(isset($_COOKIE["login"])) {
		$userinfo = $_COOKIE["login"];
		$query = "SELECT * FROM Users WHERE username LIKE :username;";
		$cat = array("username"=>$userinfo);

		$dbUserinfo = qry($pdo,$query,$cat,"fetch");

		$_SESSION["parkpass"] = $dbUserinfo[0]["parkpass"];
		
		header("Refresh:1; url=map.php");
		exit();

	} else {
		header("Refresh:1; url=login.php");
		exit();
	}
} else {
	echo html_entity_decode("<p class='error'>Cookies are not enabled. Please enable cookies to save preferences.</p>");
	header("Refresh:2; url=who.php");
	exit();
}


?>
