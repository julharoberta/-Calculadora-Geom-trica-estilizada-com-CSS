const forma = document.getElementById("forma");
const inputsDiv = document.getElementById("inputs");
const resultado = document.getElementById("resultado");

function atualizarInputs() {
  const formaSelecionada = forma.value;
  inputsDiv.innerHTML = "";

  if (formaSelecionada === "triangulo") {
    inputsDiv.innerHTML = `
      <label for="base"><i class="fa-solid fa-ruler-horizontal"></i> Base:</label>
      <input type="number" id="base" placeholder="Digite a base">
      <label for="altura"><i class="fa-solid fa-ruler-vertical"></i> Altura:</label>
      <input type="number" id="altura" placeholder="Digite a altura">
    `;
  } else if (formaSelecionada === "retangulo") {
    inputsDiv.innerHTML = `
      <label for="base"><i class="fa-solid fa-ruler-horizontal"></i> Base:</label>
      <input type="number" id="base" placeholder="Digite a base">
      <label for="altura"><i class="fa-solid fa-ruler-vertical"></i> Altura:</label>
      <input type="number" id="altura" placeholder="Digite a altura">
    `;
  } else if (formaSelecionada === "quadrado") {
    inputsDiv.innerHTML = `
      <label for="lado"><i class="fa-solid fa-square-full"></i> Lado:</label>
      <input type="number" id="lado" placeholder="Digite o lado">
    `;
  }
}

function calcularArea() {
  const formaSelecionada = forma.value;
  let area = 0;

  if (formaSelecionada === "triangulo") {
    const base = parseFloat(document.getElementById("base").value);
    const altura = parseFloat(document.getElementById("altura").value);
    if (isNaN(base) || isNaN(altura)) return mostrarResultado("⚠️ Preencha todos os campos!");
    area = (base * altura) / 2;
  } else if (formaSelecionada === "retangulo") {
    const base = parseFloat(document.getElementById("base").value);
    const altura = parseFloat(document.getElementById("altura").value);
    if (isNaN(base) || isNaN(altura)) return mostrarResultado("⚠️ Preencha todos os campos!");
    area = base * altura;
  } else if (formaSelecionada === "quadrado") {
    const lado = parseFloat(document.getElementById("lado").value);
    if (isNaN(lado)) return mostrarResultado("⚠️ Preencha todos os campos!");
    area = lado * lado;
  }

  mostrarResultado(`✅ Área calculada: ${area}`);
}

function mostrarResultado(msg) {
  resultado.style.display = "block";
  resultado.textContent = msg;
}

forma.addEventListener("change", atualizarInputs);
window.onload = atualizarInputs;
