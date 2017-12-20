<?php
ob_start();
session_start();
print_r($_SESSION['email']);
print_r($_SESSION['account']);
$a=$_SESSION['email'];
echo $a;
$servername ="localhost";
$username = "root";
$password ="root";
$dbname ="pitt_store";
$conn = new mysqli($servername, $username, $password,$dbname);
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 
   echo "Connected so successfully";

$sqlc3="SELECT SUM(total_amount_product) AS temp FROM Cart_Items WHERE email='$a'";
$resourcec1 = $conn->query($sqlc3);
    while ( $rows = $resourcec1->fetch_assoc() ) 
    {
        $value1=$rows[temp];
        echo "Total amount: $value1 ";
    }

$sqlc4="SELECT SUM(quant_prod) AS temp FROM Cart_Items WHERE email='$a'";
$resourcec2 = $conn->query($sqlc4);
    while ( $rows = $resourcec2->fetch_assoc() ) 
    {
        $value2=$rows[temp];
        echo "Total amount: $value2 ";
    }
$den="SELECT email FROM Cart WHERE email='$a'"; 
    
 $result = $conn->query($den);
    
 $number= mysqli_num_rows($result);
    echo "The number is $number";
           if ($number > 0) {
               
              $sql3="UPDATE Cart SET total_amount='$value1', quantity='$value2' WHERE email='$a'";
   
   if ($conn->query($sql3) == TRUE)
{
  echo "Record added successfully22";
 
} 
else 
{
  echo "Error adding record: " . $conn->error;
}
           }
else
{
$sqlc5="INSERT INTO `Cart`(`email`, `total_amount`, `quantity`) VALUES ('$a','$value1','$value2')";
$resourcec3 = $conn->query($sqlc5);
}
?>