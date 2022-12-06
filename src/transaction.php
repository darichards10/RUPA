<?php

/**
 * A query function that provides functionalities with transactions and prepared statements
 */
function qry(PDO $pdo, string $qry, array $args = null, string $mode = null) {
    if ($args != null && $mode == null) {
        try { 
            //complex query with arguments
            //prepared statements
            $pdo->beginTransaction(); 
            $query = $pdo->prepare($qry); 
            $query->execute($args);
            $pdo->commit();
        } catch (PDOException $e) {
            $pdo->rollBack(); 
            throw $e; 
        }
    } elseif($args != null && $mode != null){
        //select query with prepared statements
        try {
            $query = $pdo->prepare($qry);
            $query->execute($args);
            
            if(strcmp($mode,"fetch")) {
                return $query->fetch();
            }
            if(strcmp($mode,"fetchAll")) {
                return $query->fetchAll();
            }
        } catch (PDOException $e) {
            throw $e;
        }
    } else { 
        //regular query without prepared statements
        //should only be used when WHERE clauses are not needed
        $query = $pdo->query($qry); 
        if(strcmp($mode,"fetch") == 0 || $mode == null) {
            return $query->fetch();
        }
        if(strcmp($mode,"fetchAll") == 0) {
            return $query->fetchAll();
        }
    }

    return null;
}
?>