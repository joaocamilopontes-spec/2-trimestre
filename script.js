// Controle de Fonte e Temas de Acessibilidade
document.addEventListener("DOMContentLoaded", () => {
  const root = document.documentElement;
  const toggleContrastBtn = document.getElementById("toggle-contrast");
  const toggleDarkBtn = document.getElementById("toggle-dark");
  const increaseFontBtn = document.getElementById("increase-font");
  const decreaseFontBtn = document.getElementById("decrease-font");

  let currentScale = 1.0;
  const maxScale = 1.4;
  const minScale = 0.85;

  // Alternar Alto Contraste
  toggleContrastBtn.addEventListener("click", () => {
    if (root.getAttribute("data-theme") === "high-contrast") {
      root.removeAttribute("data-theme");
    } else {
      root.setAttribute("data-theme", "high-contrast");
    }
  });

  // Alternar Modo Escuro
  toggleDarkBtn.addEventListener("click", () => {
    if (root.getAttribute("data-theme") === "dark") {
      root.removeAttribute("data-theme");
    } else {
      root.setAttribute("data-theme", "dark");
    }
  });

  // Aumentar Tamanho do Texto
  increaseFontBtn.addEventListener("click", () => {
    if (currentScale < maxScale) {
      currentScale += 0.1;
      root.style.setProperty("--font-scale", `${currentScale}rem`);
    }
  });

  // Diminuir Tamanho do Texto
  decreaseFontBtn.addEventListener("click", () => {
    if (currentScale > minScale) {
      currentScale -= 0.1;
      root.style.setProperty("--font-scale", `${currentScale}rem`);
    }
  });
});

// Simulação do Formulário de Escuta
function enviarDesabafo(event) {
  event.preventDefault();
  const inputDesabafo = document.getElementById("desabafo");
  const mensagemCard = document.getElementById("mensagem-acolhimento");
  const textoResposta = document.getElementById("texto-resposta");

  if (inputDesabafo.value.trim() !== "") {
    textoResposta.textContent = "Obrigado por compartilhar seu momento conosco. Lembre-se: você é uma pessoa valiosa e não precisa passar por desafios sozinho. Se precisar de ajuda imediata, ligue 188 (CVV).";
    mensagemCard.classList.remove("hidden");
    inputDesabafo.value = "";
    mensagemCard.focus();
  }
}

// Cálculo e Validação do Quiz
function calcularQuiz() {
  const totalQuestoes = 5;
  let pontos = 0;
  let respondidas = 0;

  for (let i = 1; i <= totalQuestoes; i++) {
    const radios = document.getElementsByName(`q${i}`);
    for (const radio of radios) {
      if (radio.checked) {
        respondidas++;
        pontos += parseInt(radio.value, 10);
      }
    }
  }

  const resultadoDiv = document.getElementById("quiz-resultado");
  resultadoDiv.classList.remove("hidden");

  if (respondidas < totalQuestoes) {
    resultadoDiv.style.backgroundColor = "var(--focus-ring)";
    resultadoDiv.style.color = "#000000";
    resultadoDiv.textContent = `Por favor, responda a todas as ${totalQuestoes} questões para ver seu resultado. (${respondidas}/${totalQuestoes} respondidas)`;
  } else {
    resultadoDiv.style.backgroundColor = "var(--accent-color)";
    resultadoDiv.style.color = "#ffffff";
    
    if (pontos === totalQuestoes) {
      resultadoDiv.textContent = `Parabéns! Você acertou todas as ${pontos} de ${totalQuestoes} questões. Você é um guardião da segurança digital!`;
    } else {
      resultadoDiv.textContent = `Você acertou ${pontos} de ${totalQuestoes} questões. Continue estudando as dicas para se proteger cada vez melhor!`;
    }
  }

  resultadoDiv.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

// Voltar ao topo da página
function voltarAoTopo() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}