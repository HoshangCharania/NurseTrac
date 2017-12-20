<?php
ob_start();
session_start();
//print_r($_SESSION['email']);
//print_r($_SESSION['account']);
$a=$_SESSION['email'];
//echo $a;
$servername ="localhost";
$username = "root";
$password ="root";
$dbname ="pitt_store";
$pid=$_GET["pid"];
$conn = new mysqli($servername, $username, $password,$dbname);
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 
//echo "connection successful";
 $sqlcc="SELECT quantity FROM Cart WHERE email='$a'";
$resultcc = $conn->query($sqlcc);
    
 $numbercc= mysqli_num_rows($resultcc);
   // echo "The number is $number $a";
           if ($numbercc > 0) {
              while ( $rows = $resultcc->fetch_assoc() ) 
    {
    $value1=$rows['quantity'];
        echo "$value1";
    }
           }
            else
            {
                
            }

   
               
?>
