<?php
include_once "connection.php";
$sqlcc1="SELECT FName,LName FROM login WHERE email='$a'";
                $resultcc1 = $conn->query($sqlcc1);
$i=1;
 while ( $rows = $resultcc1->fetch_assoc() ) 
    {
       $value1=$rows['FName'];
       $value2=$rows['LName'];
       echo "$value1 $value2";
    }
?>