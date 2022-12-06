<?php
//this is required for DB operation
require "../config/config.php";

$options = [ 
    PDO::ATTR_ERRMODE  => PDO::ERRMODE_EXCEPTION,
    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC, 
    PDO::ATTR_EMULATE_PREPARES => false, 
];

//PDO is the basis for our DB SQL operations
$pdo;
$dsn = db_type.":host=".db_server.";dbname=".db_database.";port=".db_port.";charset=".db_charset; 
try {
    $pdo = new PDO($dsn, db_user, db_pass, $options);
    
} catch (PDOException $e) {
    throw new PDOException($e->getMessage(), $e->getCode()); 
    $pdo = null;   
} 

?>
