async function apiDados() {
  const arrayHits = [];
  const dadosMaisAcessados = document.querySelector("[data-mais-acessados]");
  try {
    const response = await fetch("ApiLinks.json");
    const dados = await response.json();
    const dadosOrdenados = dados.sort((a, b) => b.hits - a.hits);
    for (let i = 0; i < 5; i++) {
      const div = document.createElement("div");
      div.innerHTML = `
      <div class="dados-hits">
        <h3>
        ${dadosOrdenados[i].shortUrl}
        </h3>
        <p>${dadosOrdenados[i].hits}</p>
      </div>
      `;
      dadosMaisAcessados.appendChild(div);
    }
  } catch (e) {
  } finally {
  }
}

apiDados();
