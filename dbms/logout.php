<?php
ob_start();
session_start();
unset($_SESSION);
session_destroy();
session_write_close();

echo "<script>window.alert('Logged out.'); window.location.assign('index.html');</script>";
exit;
?>