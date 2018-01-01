<?php
ob_start();
echo "Check";
<<<<<<< HEAD
$servername ="sql308.byethost17.com";
$username = "b17_21058317";
$password ="truegunner";
$dbname ="b17_21058317_nursetrac";
=======
$servername ="localhost";
$username = "root";
$password ="root";
$dbname ="nursetrac";
>>>>>>> 7577f4590c353b2cf3a378917d008020065e1823
$conn = new mysqli($servername, $username, $password,$dbname);
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 
<<<<<<< HEAD
   // echo "Connected so successfully";
=======
   echo "Connected so successfully";
>>>>>>> 7577f4590c353b2cf3a378917d008020065e1823
 
    $email=$_POST["Email"];
    $password=$_POST["Pass"];
$sql="SELECT email,password FROM login WHERE email='$email' AND password='$password'";
$result=mysqli_query($conn,$sql);

// Mysql_num_row is counting table row
$count=mysqli_num_rows($result);
<<<<<<< HEAD
// echo "count is $count";
=======
echo "count is $count";
>>>>>>> 7577f4590c353b2cf3a378917d008020065e1823
// If result matched $username and $password, table row must be 1 row
if($count==1)

   {
<<<<<<< HEAD
      //  echo "yes";
=======
        echo "yes";
>>>>>>> 7577f4590c353b2cf3a378917d008020065e1823
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