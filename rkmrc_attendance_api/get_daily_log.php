<?php
// 1. HEADERS
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

// 2. CONNECT
include 'config.php';

// 3. INPUT
$data = json_decode(file_get_contents("php://input"));

if ($data) {
    // 4. CLEAN VARIABLES
    $roll = $conn->real_escape_string($data->roll_no);
    $dept = $conn->real_escape_string($data->dept);
    $sem = $conn->real_escape_string($data->sem);
    $date = $conn->real_escape_string($data->date); 
    $dayName = $conn->real_escape_string($data->day); 

    // 5. LEFT JOIN QUERY
    $sql = "SELECT 
                m.id as routine_id,
                m.subject,
                m.time,
                m.session,
                a.status as current_status 
            FROM master_schedule m
            LEFT JOIN attendance_log a 
                ON m.dept = a.dept 
                AND m.sem = a.sem 
                AND m.subject = a.subject 
                AND m.time = a.time_slot 
                AND a.date = '$date'        
                AND a.roll_no = '$roll'     
            WHERE m.dept = '$dept' 
              AND m.sem = '$sem' 
              AND m.day = '$dayName'      
            ORDER BY m.id ASC";

    $result = $conn->query($sql);

    // 6. OUTPUT
    $daily_classes = [];
    if ($result) {
        while($row = $result->fetch_assoc()) {
            $daily_classes[] = $row;
        }
        echo json_encode(["status" => "success", "data" => $daily_classes]);
    } else {
        echo json_encode(["status" => "error", "message" => $conn->error]);
    }
} else {
    echo json_encode(["status" => "error", "message" => "No data received"]);
}

$conn->close();
?>