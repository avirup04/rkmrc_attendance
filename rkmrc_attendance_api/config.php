<?php
// Centralized headers for React communication
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
header("Content-Type: application/json; charset=UTF-8");

// Silent error reporting to prevent HTML leaks into JSON
error_reporting(0);

// Database configuration
$host = "localhost";
$user = "root";
$pass = "";
$dbname = "rkmrc_attendance";

$conn = new mysqli($host, $user, $pass, $dbname);

// Check connection
if ($conn->connect_error) {
    die(json_encode(["message" => "Connection failed: " . $conn->connect_error]));
}
?>