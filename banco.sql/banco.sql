CREATE DATABASE IF NOT EXISTS barbearia;
USE barbearia;

CREATE TABLE agendamentos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100),
    telefone VARCHAR(20),
    servico VARCHAR(100),
    data DATE,
    horario TIME,
    profissional VARCHAR(100)
);
