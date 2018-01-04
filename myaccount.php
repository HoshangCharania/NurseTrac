<?php
ob_start();
echo "Check";
$servername ="localhost";
$username = "root";
$password ="root";
$dbname ="nursetrac";
$conn = new mysqli($servername, $username, $password,$dbname);
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 

   // echo "Connected so successfully";

 
    $email=$_POST["Email"];
    $password=$_POST["Pass"];
$sql="SELECT email,password FROM login WHERE email='$email' AND password='$password'";
$result=mysqli_query($conn,$sql);

// Mysql_num_row is counting table row
$count=mysqli_num_rows($result);

// echo "count is $count";


// If result matched $username and $password, table row must be 1 row
if($count==1)

   {
      //  echo "yes";

        session_start();
        $_SESSION['email'] = $email;
        print_r($_SESSION['email']);
        $_SESSION['password'] = $password;
        echo "Login Successful";
        return true;
    }
    else 
    {
        echo "Wrong Username or Password";
        return false;
    }
  
?>