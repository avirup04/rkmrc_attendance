<?php
include_once 'config.php'; // Inject database and headers

$json_data = file_get_contents("php://input");
$data = json_decode($json_data);

if($data) {
    // base64_decode turns the safe string back into LSUG/124/25
    $roll = $conn->real_escape_string(base64_decode($data->roll_no));
    $dept = $conn->real_escape_string($data->department);
    $sem = $conn->real_escape_string($data->semester);
    $email = $conn->real_escape_string($data->email);
    $mobile = $conn->real_escape_string($data->mobile); // Fix for the NULL issue
    $pass = password_hash($data->password, PASSWORD_DEFAULT);

    // 2. Ensure your column names (roll_no, dept, etc.) match phpMyAdmin EXACTLY
    $sql = "INSERT INTO users (roll_no, dept, semester, email, mobile, password) 
            VALUES ('$roll', '$dept', '$sem', '$email', '$mobile', '$pass')";
    
    if($conn->query($sql)) {
        echo json_encode(["message" => "Success"]);
    } else {
        // 3. Send the SQL error as JSON so React can alert() it
        echo json_encode(["message" => "SQL Error: " . $conn->error]);
    }
} else {
    echo json_encode(["message" => "No data sent from React"]);
}
$conn->close();
?>