<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT, DELETE');
header('Access-Control-Allow-Headers: Origin, Content-Type, Accept, Authorization, X-Request-With');
include("connection.php");

$query = $mysqli->prepare("SELECT id, title, contents, time from news,type where
news.type_id_type= type.id_type and type.type='Others'");
$query->execute();
$array = $query->get_result();

$response = [];

while($a = $array->fetch_assoc()){  
    $response[] = $a;
}

echo json_encode($response);

?>