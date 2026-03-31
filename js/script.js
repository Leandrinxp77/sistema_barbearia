
    // Bloquear datas passadas
    window.onload = function () {
      const today = new Date().toISOString().split("T")[0];
      document.getElementById("data").setAttribute("min", today);
    };

    // Horários disponíveis simulados
    const horariosDisponiveis = {
      "Jhow": {
        "2025-07-07": ["09:00", "10:00", "13:00"],
        "2025-07-08": ["10:00", "15:00", "16:00"]
      },
      "Israel (Bil)": {
        "2025-07-07": ["09:00", "10:00", "13:00"],
        "2025-07-08": ["10:00", "15:00", "16:00"]
      },
      "Gabriel": {
        "2025-07-07": ["11:00", "14:00", "16:00"],
        "2025-07-08": ["09:00", "13:00", "17:00"]
      },
      "Leandro Miguel": {
        "2025-07-07": ["09:00", "12:00", "15:00"],
        "2025-07-08": ["10:00", "11:00", "14:00"]
      }
    };
    
    // att horários disponíveis ao selecionar data ou profissional
    function atualizarHorarios() {
      const data = document.getElementById("data").value;
      const profissional = document.getElementById("profissional").value;
      const horarioSelect = document.getElementById("horario");

      horarioSelect.innerHTML = `<option disabled selected>Selecione o Horário</option>`;

      if (data && profissional && horariosDisponiveis[profissional] && horariosDisponiveis[profissional][data]) {
        const horarios = horariosDisponiveis[profissional][data];
        horarios.forEach(horario => {
          const option = document.createElement("option");
          option.value = horario;
          option.textContent = horario;
          horarioSelect.appendChild(option);
        });
      } else if (data && profissional) {
        const option = document.createElement("option");
        option.disabled = true;
        option.textContent = "Nenhum horário disponível";
        horarioSelect.appendChild(option);
      }
    }
    
    // mostra campos de contato após selecionar serviço
    function mostrarCamposContato() {
      const servico = document.getElementById('servico').value;
      if (servico === "Selecione o Serviço") {
        alert("Por favor, selecione um serviço antes de avançar.");
        return;
      }

      document.getElementById('camposContato').style.display = 'flex';
      document.getElementById('btnAvancar').style.display = 'none';
    }
    
    // enviar msg para whatsapp com detalhes do agendamento
    function enviarParaWhatsApp() {
      const servico = document.getElementById('servico').value;
      const data = document.getElementById('data').value;
      const profissional = document.getElementById('profissional').value;
      const horario = document.getElementById('horario').value;
      const nome = document.getElementById('nome').value;
      const telefoneCliente = document.getElementById('telefone').value;

      if (!nome || !telefoneCliente) {
        alert('Por favor, preencha seu nome e número.');
        return;
      }

      const mensagem = `Olá, gostaria de confirmar meu agendamento na Barbearia Souto:%0A- Nome: ${nome}%0A- Número: ${telefoneCliente}%0A- Serviço: ${servico}%0A- Data: ${data}%0A- Horário: ${horario}%0A- Profissional: ${profissional}`;
      const telefone = '5514997372384';
      window.location.href = `https://wa.me/${telefone}?text=${mensagem}`;
    }
