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
   //echo "Connected so successfully";
$sql="SELECT `pid` FROM `Cart_Items` WHERE email='$a'";
//echo "The value is $pid";
if ($conn->query($sql) == TRUE)
{
  //echo "query success";
} 
        else{
            //echo "Error matching address with email " . $conn->error;
        }

    

    
 $result = $conn->query($sql);
    
 $number= mysqli_num_rows($result);
   // echo "The number is $number $a";
           if ($number > 0) {
               
              $sql3="SELECT SUM(total_amount_product) AS temp FROM `Cart_Items` WHERE email='$a'";
   
   if ($conn->query($sql3) == TRUE)
{
  //echo "Record added successfully22";
       $resource = $conn->query($sql3);
    while ( $rows = $resource->fetch_assoc() ) 
    {
    $value1=$rows['temp'];
        echo "$$value1";
    }
      $sql4="SELECT SUM(quant_prod) AS temp2 FROM `Cart_Items` WHERE email='$a'";
       $resource2 = $conn->query($sql4);
    while ( $rows2 = $resource2->fetch_assoc() ) 
    {
    $value2=$rows2['temp2'];
        
    }
       

       
   
       
} 
else 
{
  echo "Error adding record: " . $conn->error;
}
              
       
           }
            else{
                
            }
 $sqlcc="SELECT email FROM Cart WHERE email='$a'";
$resultcc = $conn->query($sqlcc);
    
 $numbercc= mysqli_num_rows($resultcc);
   // echo "The number is $number $a";
           if ($numbercc > 0) {
               $sqlcc2="UPDATE `Cart` SET `total_amount`='$value1',`quantity`='$value2' WHERE email='$a'";
               $resultcc2 = $conn->query($sqlcc2);
           }
            else
            {
                $sqlcc1="INSERT INTO `Cart`(`email`, `total_amount`, `quantity`) VALUES ('$a','$value1','$value2')";
                $resultcc1 = $conn->query($sqlcc1);
            }
   
   
               
?>
