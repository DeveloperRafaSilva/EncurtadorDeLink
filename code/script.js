const btnEnviarLink = document.querySelector("[data-btn-enviar-link]");
const mensagemDeErro = document.querySelector("[data-mensagem-de-erro]");
let linkEncurtado = "";
async function urlApi() {
  let valorInputLink = document.getElementById("url");
  let longUrl = valorInputLink.value;
  try {
    const response = await fetch("https://api-ssl.bitly.com/v4/shorten", {
      method: "POST",
      headers: {
        Authorization: "Bearer f691e78e352c17b46f9ef3d1a12792a7d6e9a094",
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        long_url: longUrl,
        domain: "bit.ly",
      }),
    });
    const dados = await response.json();
    linkEncurtado = dados.link;
    valorInputLink.value = "";
    valorInputLink.value = linkEncurtado;
    if (linkEncurtado === undefined) {
      mensagemDeErro.innerHTML = dados.description;
      mensagemDeErro.style.color = "orange";
      mensagemDeErro.style.margin = "1rem 0";
      valorInputLink.value = "";
      throw new Error("eRROR", dados.description);
    } else {
      mensagemDeErro.innerHTML = "";
      valorInputLink.classList.add("ok");
    }
  } catch (e) {
    throw e;
  } finally {
  }
}

btnEnviarLink.addEventListener("click", () => {
  urlApi();
});
