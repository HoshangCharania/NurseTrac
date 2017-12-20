<?php
ob_start();

$servername ="localhost";
$username = "root";
$password ="root";
$dbname ="pitt_store";
$conn = new mysqli($servername, $username, $password,$dbname);
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 
   //echo "Connected so successfully";
    $email=$_GET["Email"];
//echo $email;
    $password=$_GET["Pass"];
//echo $password;
    $account=$_GET["account"];
//echo $account;
$sql3="SELECT email FROM $account WHERE email='$email' AND password='$password'";
    //$sql="SELECT email FROM Customer WHERE email="$email" AND password="$password"";
    
    $result = $conn->query($sql3);
 
           if (mysqli_num_rows($result) > 0) {
               //echo "Login successful";
               session_start();
        $_SESSION['email'] = $email;
       // print_r($_SESSION['email']);
        $_SESSION['password'] = $password;
        $_SESSION['account'] = $account;
        echo "Login Successful";
        return true;
           }
            else{
                echo"incorrect email or/and password";
            }



// Mysql_num_row is counting table row
/*$count=mysqli_num_rows($result);
echo "count is $count";
// If result matched $username and $password, table row must be 1 row
if($count==1)

   {
        echo "yes";
        session_start();
        $_SESSION['email'] = $email;
        print_r($_SESSION['email']);
        $_SESSION['password'] = $password;
        $_SESSION['account'] = $account;
        echo "Login Successful";
        return true;
    }
    else 
    {
        echo "Wrong Username or Password";
        return false;
    }*/
  
?>