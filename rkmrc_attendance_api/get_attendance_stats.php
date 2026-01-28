<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");
include 'config.php';

$data = json_decode(file_get_contents("php://input"));
$roll = $conn->real_escape_string($data->roll_no);

$sql = "SELECT DISTINCT subject FROM master_schedule
        WHERE dept = (SELECT dept FROM users where roll_no = '$roll')
        AND sem = (SELECT sem FROM users where roll_no = '$roll')";
$subject_res = $conn->query($sql);

$stats = [];

while($sub_row = $subject_res->fetch_assoc()) {
    $subject = $sub_row['subject'];

    $count_sql = "SELECT
        SUM(CASE WHEN status = 'Present' THEN 1 ELSE 0 END) as present,
        SUM(CASE WHEN status = 'Absent' THEN 1 ELSE 0 END) as absent
        FROM attendance_log
        WHERE roll_no = '$roll' AND subject = '$subject'";

    $res = $conn->query($count_sql)->fetch_assoc();
    $present = (int)$res['present'];
    $absent = (int)$res['absent'];
    $total_happened = $present + $absent;

    // Logic: Avoid division by zero
    // Percentage Calculation
    $percentage = ($total_happened > 0) ? ($present / $total_happened) * 100 : 0;

    $marks = 0;
    if ($percentage >= 95) $marks = 5;
    else if ($percentage >= 90) $marks = 4;
    else if ($percentage >= 85) $marks = 3;
    else if ($percentage >= 80) $marks = 2;
    else if ($percentage >= 75) $marks = 1;

    //afford to miss logic
    // Formula: (Present / (Total + X)) >= 0.75  => X = (Present / 0.75) - Total
    $can_miss = ($percentage >= 75) ? floor(($present / 0.75) - $total_happened) : 0;

    $stats[] = [
        "subject" => $subject,
        "percentage" => round($percentage, 1),
        "total_happened" => $total_happened,
        "present" => $present,
        "marks" => $marks,
        "can_miss" => max(0, $can_miss)
    ];
}
echo json_encode(["status" => "success", "data" => $stats]);
?>