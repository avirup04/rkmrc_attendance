<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

// CHECK THIS PATH: Make sure it points to your actual config file!
// If your config.php is in the same folder, use: include 'config.php';
include 'config.php'; 

$data = json_decode(file_get_contents("php://input"));

$dept = $conn->real_escape_string($data->dept);
$sem = $conn->real_escape_string($data->sem);

// The Query
$sql = "SELECT * FROM master_schedule 
        WHERE dept = '$dept' AND sem = '$sem' 
        ORDER BY FIELD(day, 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'), time";

$result = $conn->query($sql);
$routine = [];

if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        $routine[] = $row;
    }
    echo json_encode(["status" => "success", "data" => $routine]);
} else {
    // DEBUGGING: This will tell us what went wrong in the Console
    echo json_encode([
        "status" => "empty", 
        "message" => "No classes found.",
        "debug_info" => "I searched for Dept: [$dept] and Sem: [$sem] but found 0 rows."
    ]);
}
$conn->close();
?>