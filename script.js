// ============= TEMA LIGHT/DARK =============
const themeToggle = document.getElementById("themeToggle");
const htmlElement = document.documentElement;
const body = document.body;

const initTheme = () => {
  const savedTheme = localStorage.getItem("theme") || "dark";
  
  if (savedTheme === "light") {
    body.classList.add("light-mode");
    themeToggle.textContent = "☀️";
  } else {
    body.classList.remove("light-mode");
    themeToggle.textContent = "🌙";
  }
};

themeToggle.addEventListener("click", () => {
  const isLightMode = body.classList.contains("light-mode");
  
  if (isLightMode) {
    body.classList.remove("light-mode");
    themeToggle.textContent = "🌙";
    localStorage.setItem("theme", "dark");
  } else {
    body.classList.add("light-mode");
    themeToggle.textContent = "☀️";
    localStorage.setItem("theme", "light");
  }
});

initTheme();

// ============= FORMULÁRIO =============
const apikeyinput = document.getElementById("apikey");
const gameselect = document.getElementById("gameSelect");
const questionInput = document.getElementById("questionnput");
const askbutton = document.getElementById("askButton");
const aiResponse = document.getElementById("aiResponse");
const form = document.getElementById("form");

const markdownToHTML = (Text) => {
  const converter = new showdown.Converter();
  return converter.makeHtml(Text);
}

const perguntarAI = async(question, game, apikey) => {
  const model = "gemini-2.0-flash";
  const GeminiURL = `https://generativelanguage.googleapis.com/v1beta2/models/${model}:generateContent?key=${apikey}`;
  
  const pergunta = `;
}

# Especialidade 
Você é uma especialista assistente de jogos ${game}

## Instruções 
- Se você não souber a resposta, diga " Não sei " e  não sei e não tente inventar uam resposta."
- Se a pergunta não for relacionada ao jogo , responda com "Essa pergunta não está relacionada com o jogo ${game}."
- Considere a data atual ${new Date().toLocaleDateString()}
- Faça pesquisas atualizadas sobre patch atual , para dar uma resposta coerente. 
- Nunca responda itens que voê não tem certeza  de que existem no patch atual. 

## Resposta##