<?php
include_once('include.php');
$conn=getconnection();
if($conn==null){
    sendResponse(404, $conn, 'Server off');
} else {
    $sql="SELECT * FROM user";
    $result=$conn->query($sql);
    if ($result->num_rows>0) {
        $users=array();
        while($row=$result->fetch_assoc()) {
            $user=array (
                "id"=>$row['id'],
                "nama"=>$row['nama'],
                "email"=>$row['email'],
                "password"=>$row['password'],
                "gambar"=>$row['gambar'],
        );
        array_push($users, $user);
        }
        sendResponse(300, $users, 'Data user');
    } else {
        sendResponse(500, [], 'No data');
    }
    $conn->close();
}
?>