<?php
ob_start();
session_start();
print_r($_SESSION['email']);
print_r($_SESSION['account']);
if($_SESSION['account']=="Customer")
{
$a=$_SESSION['email'];
include_once "connection.php";
  $pid = $_POST["pid"];
echo "The product number is $pid";
$sql="SELECT selling_price FROM Products WHERE Product_ID='$pid'";
    $resource = $conn->query($sql);
    while ( $rows = $resource->fetch_assoc() ) 
    {
    $value=$rows['selling_price'];
        echo "$value";
    }
    
$den="SELECT pid FROM Cart_Items WHERE email='$a' AND pid='$pid'"; 
    
 $result = $conn->query($den);
    
 $number= mysqli_num_rows($result);
    echo "The number is $number";
           if ($number > 0) {
               
              $sql3="UPDATE Cart_Items SET total_amount_product =total_amount_product+$value WHERE pid = '$pid' AND email ='$a'";
   $sql4=" UPDATE Cart_Items SET quant_prod= quant_prod +1  WHERE pid = '$pid' AND email ='$a'";
   if ($conn->query($sql3) == TRUE && $conn->query($sql4) == TRUE )
{
  echo "Record added successfully22";
 
} 
else 
{
  echo "Error adding record: " . $conn->error;
}
   
           }
            else{
                $sql2="INSERT INTO `Cart_Items`(`email`, `pid`, `quant_prod`, `total_amount_product`) VALUES ('$a','$pid','1','$value')";
                
                

    if ($conn->query($sql2) == TRUE)
{
  echo "Record added successfully";
 
} 
else 
{
  echo "Error adding record: " . $conn->error;
}
            }
   
               
               
    
}
else
{
    echo "Be a customer to add a product";
}
?>