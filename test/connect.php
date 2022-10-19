<?php
$host="php2.radford.edu";
$port=3306;
$socket=null;
$user="team03";
$password="Team_Account03!";
$dbname="team03";

$con = new mysqli($host, $user, $password, $dbname, $port, $socket)
	or die ('Could not connect to the database server' . mysqli_connect_error());


	echo "Connection established";
	
$con->close();


?>

<html>
	<head>
		<title>Connection Test PHP File</title>
	</head>
	<body>
		<hr>
		<p>Hello Database</p>
	</body>
</html>