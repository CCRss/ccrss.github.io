<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');

$data = json_decode(file_get_contents('php://input'), true);

if ($data) {
    $fileName = "chatHistory.json";
    $chatData = [];

    if (file_exists($fileName)) {
        $chatData = json_decode(file_get_contents($fileName), true);
    }

    array_push($chatData, $data);

    file_put_contents($fileName, json_encode($chatData));
    echo json_encode(['status' => 'success']);
} else {
    echo json_encode(['status' => 'error']);
}
?>
