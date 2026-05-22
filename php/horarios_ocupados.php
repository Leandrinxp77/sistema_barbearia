<?php
header('Content-Type: application/json');
include 'conexao.php';

$data = $_GET['data'] ?? '';
$profissional = $_GET['profissional'] ?? '';

if ($data === '' || $profissional === '') {
    echo json_encode([]);
    exit;
}

$sql = "SELECT TIME_FORMAT(horario, '%H:%i') AS horario
        FROM agendamentos
        WHERE data = ? AND profissional = ?";
$stmt = $conn->prepare($sql);
$stmt->bind_param("ss", $data, $profissional);
$stmt->execute();
$result = $stmt->get_result();

$horarios = [];
while ($row = $result->fetch_assoc()) {
    $horarios[] = $row['horario'];
}

echo json_encode($horarios);
?>
