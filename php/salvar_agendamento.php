<?php
include 'conexao.php';
$nome = $_POST['nome'];
$telefone = $_POST['telefone'];
$servico = $_POST['servico'];
$data = $_POST['data'];
$horario = $_POST['horario'];
$profissional = $_POST['profissional'];

$verifica = $conn->prepare("SELECT * FROM agendamentos WHERE data = ? AND horario = ? AND profissional = ?");
$verifica->bind_param("sss", $data, $horario, $profissional);
$verifica->execute();
$resultado = $verifica->get_result();

if ($resultado->num_rows > 0) {
    echo json_encode(["status" => "erro", "mensagem" => "Horário indisponível"]);
    exit;
}

$stmt = $conn->prepare("INSERT INTO agendamentos (nome, telefone, servico, data, horario, profissional) VALUES (?, ?, ?, ?, ?, ?)");
$stmt->bind_param("ssssss", $nome, $telefone, $servico, $data, $horario, $profissional);
$stmt->execute();

echo json_encode(["status" => "ok"]);
?>
