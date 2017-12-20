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
$sql="SELECT `pid` FROM `Cart_Items` WHERE pid='$pid' AND email='$a'";
//echo "The value is $pid";
if ($conn->query($sql) == TRUE)
{
  //echo "query success";
} 
        else
        {
            //echo "Error matching address with email " . $conn->error;
        }

    

    
 $result = $conn->query($sql);
    
 $number= mysqli_num_rows($result);
    //echo "The number is $number";
           if ($number > 0) {
               
              $sql3="SELECT `quant_prod` FROM `Cart_Items` WHERE pid='$pid' AND email='$a'";
   
   if ($conn->query($sql3) == TRUE)
{
  //echo "Record added successfully22";
       $resource = $conn->query($sql3);
    while ( $rows = $resource->fetch_assoc() ) 
    {
    $value=$rows['quant_prod'];
        echo "$pid";
    }
 
} 
else 
{
  echo "Error adding record: " . $conn->error;
}
   
           }
            else{
                
            }
   
               
?>