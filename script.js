// Frases acolhedoras específicas sobre cyberbullying e apoio
const frasesAcolhedoras = [
  "O que você passa online não define quem você é. Lembre-se de fazer prints das conversas e contar para um adulto de confiança na escola!",
  "A culpa nunca é da vítima. Não guarde esse peso sozinho, converse com um professor, pedagogo ou seus pais.",
  "Você é corajoso(a) por desabafar. Bloqueie os agressores e procure a orientação da equipe escolar para resolver a situação.",
  "Sua segurança e bem-estar vêm em primeiro lugar. Existem canais gratuitos como o CVV (188) e a SaferNet prontos para apoiar você."
];

// Função do Portal de Escuta (Simulado)
function enviarDesabafo(event) {
  event.preventDefault();
  
  const campoTexto = document.getElementById("desabafo");
  const cardMensagem = document.getElementById("mensagem-acolhimento");
  const textoResposta = document.getElementById("texto-resposta");

  if (campoTexto.value.trim() === "") return;

  // Seleciona uma mensagem motivacional aleatória
  const fraseSorteada = frasesAcolhedoras[Math.floor(Math.random() * frasesAcolhedoras.length)];
  
  textoResposta.innerText = fraseSorteada;
  cardMensagem.classList.remove("hidden");

  // Limpa o campo sem armazenar nenhum dado
  campoTexto.value = "";
}

// Avaliação das 5 Perguntas do Quiz
function calcularQuiz() {
  const respostasCorretas = {
    q1: "1",
    q2: "1",
    q3: "1",
    q4: "1",
    q5: "1"
  };

  let pontuacao = 0;
  const totalPerguntas = 5;

  for (let i = 1; i <= totalPerguntas; i++) {
    const opcaoSelecionada = document.querySelector(`input[name="q${i}"]:checked`);
    if (opcaoSelecionada && opcaoSelecionada.value === respostasCorretas[`q${i}`]) {
      pontuacao++;
    }
  }

  const resultadoElemento = document.getElementById("quiz-resultado");
  resultadoElemento.classList.remove("hidden");
  resultadoElemento.innerText = `Você acertou ${pontuacao} de ${totalPerguntas} perguntas!`;
}

// Acessibilidade: Ajuste de Tamanho de Fonte
let fontFactor = 100;

document.getElementById("increase-font").addEventListener("click", () => {
  if (fontFactor < 130) {
    fontFactor += 10;
    document.body.style.fontSize = `${fontFactor}%`;
  }
});

document.getElementById("decrease-font").addEventListener("click", () => {
  if (fontFactor > 80) {
    fontFactor -= 10;
    document.body.style.fontSize = `${fontFactor}%`;
  }
});

// Acessibilidade: Modo Escuro
const btnDark = document.getElementById("toggle-dark");
btnDark.addEventListener("click", () => {
  const currentTheme = document.body.getAttribute("data-theme");
  if (currentTheme === "dark") {
    document.body.removeAttribute("data-theme");
  } else {
    document.body.setAttribute("data-theme", "dark");
  }
});

// Botão de voltar ao topo suavemente
function voltarAoTopo() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}