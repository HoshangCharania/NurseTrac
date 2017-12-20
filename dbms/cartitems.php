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
$conn = new mysqli($servername, $username, $password,$dbname);
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 
   //echo "Connected so successfully";
if ($conn->query($sql) == TRUE)
{
  //echo "query success";
} 
        else{
            //echo "Error matching address with email " . $conn->error;
        }

    $sql="SELECT `pid` FROM `Cart_Items` WHERE email='$a'";

    
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
       // echo "$$value1";
    }
      $sql4="SELECT SUM(total_amount_product) AS temp2 FROM `Cart_Items` WHERE email='$a'";
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
 $sqlcc="SELECT email FROM Cart_items WHERE email='$a'";
$resultcc = $conn->query($sqlcc);
    
 $numbercc= mysqli_num_rows($resultcc);
   // echo "The number is $number $a";
           if ($numbercc > 0) {
               $sql33="SELECT `address_id` FROM `Customer_address` WHERE email='$a'";
               $resource3 = $conn->query($sql33);
    while ( $rows3 = $resource3->fetch_assoc() ) 
    {
    $value3=$rows3['address_id'];
        echo "$value3 + $value2 + $a";
        $sqlcc1="INSERT INTO `Orders`(`total_amount`, `customer_email`, address_id) VALUES ('$value2','$a','$value3')";
                $resultcc1 = $conn->query($sqlcc1);
                $last_id = $conn->insert_id;
             echo "Order ID: $last_id";
        
    }
                
               
            }else
{
    echo "You need to add products to place an order.";
}


   
$pid=1;
while($pid<50)
{
$sql="SELECT `pid` FROM `Cart_Items` WHERE pid='$pid' AND email='$a'";
//echo "The value is $pid";
if ($conn->query($sql) == TRUE)
{
 // echo "query success";
} 
        else{
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
    $value3=$rows['quant_prod'];
    //    echo "$value3";
        $sql10="INSERT INTO `Order_Items`(`Order_Id`, `PID`, `Quantity`) VALUES ('$last_id','$pid','$value3')";
        
            if ($conn->query($sql10) == TRUE)
{
  //echo "query success";
} 
    }
 
} 
else 
{
  echo "Error adding record: " . $conn->error;
}
   
           }
            else{
                
            }
   $pid++;

}
$sql11="DELETE FROM Cart_Items WHERE email = '$a'";
        
            if ($conn->query($sql11) == TRUE)
{
  //echo "query success";
} 
$sql22="DELETE FROM Cart WHERE email = '$a'";
        
            if ($conn->query($sql22) == TRUE)
{
  //echo "query success";
} 
   
   
               
?>