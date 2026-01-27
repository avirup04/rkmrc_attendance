<?php
// 1. Let React talk to this file
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

// 2. Database Connection
include 'config.php';

// 3. Receive the click data from React
$data = json_decode(file_get_contents("php://input"));

if ($data) {
    // Clean data for safety
    $roll     = $conn->real_escape_string($data->roll_no);
    $dept     = $conn->real_escape_string($data->dept);
    $sem      = $conn->real_escape_string($data->sem);
    $subject  = $conn->real_escape_string($data->subject);
    $date     = $conn->real_escape_string($data->date);
    $day      = $conn->real_escape_string($data->day);
    $time     = $conn->real_escape_string($data->time_slot);
    $status   = $conn->real_escape_string($data->status); // 'Present', 'Absent', or 'Dismissed'

$sql = "INSERT INTO attendance_log
(roll_no, dept, sem, subject, date, day, time_slot, status)
VALUES
('$roll', '$dept', '$sem', '$subject', '$date', '$day', '$time', '$status')
ON DUPLICATE KEY UPDATE 
status = '$status', 
timestamp = NOW()";

if ($conn->query($sql) === TRUE) {
        echo json_encode(["status" => "success", "message" => "Marked as $status"]);
    } else {
        echo json_encode(["status" => "error", "message" => "Database Error: " . $conn->error]);
    }
} else {
    echo json_encode(["status" => "error", "message" => "No data received"]);
}

$conn->close();
?>