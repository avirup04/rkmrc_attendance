<?php
include 'config.php';

$json_data = file_get_contents("php://input");
$data = json_decode($json_data);

if ($data) {
    $roll = $conn->real_escape_string(base64_decode($data->roll_no));
    $pass = $data->password;

    $sql = "SELECT * FROM users WHERE roll_no = '$roll'";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        $row = $result->fetch_assoc();
        if (password_verify($pass, $row['password'])) {
            echo json_encode(["message" => "success", "user_name" => $row['name'], "user" => $row['roll_no']]);
        } else {
            echo json_encode(["message" => "Invalid Password"]);
        }
    } else {
        echo json_encode(["message" => "User not found"]);
    }
}
?>