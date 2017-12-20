<?php
include_once "connection.php";
$sqlcc1="SELECT `Id`, `date`, `total_amount`, `customer_email` FROM `Orders` WHERE customer_email='$a'";
                $resultcc1 = $conn->query($sqlcc1);
$i=1;
 while ( $rows = $resultcc1->fetch_assoc() ) 
    {
    $value1=$rows['Id'];
     $value2=$rows['total_amount'];
     $value3=$rows['date'];
     $value4=$rows['customer_email'];
       echo "$i) Order ID: $value1 Total Amount: $$value2 Date: $value3 <br><br>";
     $i++;
    }
?>