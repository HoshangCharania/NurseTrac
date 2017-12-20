<?php
include_once "connection.php";
$sqlcc1="SELECT p.name AS temp1, SUM(i.Quantity) AS temp2

FROM Order_Items i, Sells s, Products p WHERE p.Product_ID=i.PID AND i.PID=s.pid AND s.email='$a'

GROUP BY p.name";
                $resultcc1 = $conn->query($sqlcc1);
 while ( $rows = $resultcc1->fetch_assoc() ) 
    {
    $value1=$rows['temp1'];
     $value2=$rows['temp2'];
       echo "Name of Product: $value1 Sum: $value2 </br>";
    }
?>