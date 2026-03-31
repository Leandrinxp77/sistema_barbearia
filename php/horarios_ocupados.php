<?php
include 'conexao.php';
$data = $_GET['data'];
$profissional = $_GET['profissional'];

$sql = "SELECT horario FROM agendamentos WHERE data = ? AND profissional = ?";
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
