CREATE DATABASE IF NOT EXISTS barbearia;
USE barbearia;

CREATE TABLE IF NOT EXISTS agendamentos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    telefone VARCHAR(20) NOT NULL,
    servico VARCHAR(100) NOT NULL,
    data DATE NOT NULL,
    horario TIME NOT NULL,
    profissional VARCHAR(100) NOT NULL,
    criado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    -- impede dois agendamentos no mesmo horário para o mesmo profissional
    UNIQUE KEY uniq_slot (data, horario, profissional)
);

-- índice auxiliar para consulta de horários ocupados
CREATE INDEX idx_data_prof ON agendamentos (data, profissional);
