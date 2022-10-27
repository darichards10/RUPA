<?php

function qry(PDO $pdo, string $qry, array $args = null) {
    if ($args != null) {
        try { 
            //complex query with arguments
            $pdo->beginTransaction(); 
            $query = $pdo->prepare($qry); 
            $query->execute($args);
            $pdo->commit();
        } catch (Exception $e) {
            $pdo->rollback(); 
            throw $e; 
        }
    }  else { 
        //regular query
        $query = $pdo->query($qry); 
        return $query->fetch();
    }
}
function transactionControl (PDO $pdo, string $updateDML, array $args) {
    //Will do later. 
    
    return null; 
}
              
?>