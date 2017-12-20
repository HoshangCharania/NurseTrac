<?php
include_once "connection.php";
$sqlcc1="SELECT Contact_Number FROM login WHERE email='$a'";
                $resultcc1 = $conn->query($sqlcc1);
$i=1;
 while ( $rows = $resultcc1->fetch_assoc() ) 
    {
       $value1=$rows['Contact_Number'];
       echo "$value1";
    }
?>