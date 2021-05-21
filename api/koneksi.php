<?php
function getconnection() {
    $conn=new mysqli ("localhost", "root", "", "itera_esport");
    if($conn->connect_error) {
        $conn=null;
    }
    return $conn;
}
?>