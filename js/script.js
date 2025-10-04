function gerarNumero() {
  if (
    localStorage.getItem("numeroSecreto") &&
    localStorage.getItem("tentativas")
  ) {
    return;
  }

  const numero = Math.floor(Math.random() * 100) + 1;
  localStorage.setItem("numeroSecreto", numero);

  localStorage.setItem("tentativas", 0);
}

function chutar() {
  const indice = document.querySelector("#indice");
  const chute = parseInt(document.querySelector("#guess_input").value);
  const numero = localStorage.getItem("numeroSecreto");

  let tentativas = parseInt(localStorage.getItem("tentativas"));
  localStorage.setItem("tentativas", tentativas + 1);

  if (chute == numero) {
    const btnChutar = document.querySelector("#chutar_btn");
    const btnReiniciar = document.querySelector("#restart");

    indice.innerHTML = `Certíssimo!<br>Total: ${tentativas} tentativas<br>Aperte o botão abaixo para reiniciar o jogo.`;
    indice.style.color = "green";
    btnReiniciar.style.display = "block";
    btnChutar.onclick = null;
  } else if (chute < numero) {
    indice.innerHTML = "Errado!<br>Está mais para cima.";
    indice.style.color = "red";
  } else if (chute > numero) {
    indice.innerHTML = "Errado!<br>Tente diminuir o chute.";
    indice.style.color = "red";
  }
}

function reiniciar() {
  localStorage.removeItem("numeroSecreto");
  localStorage.removeItem("tentativas");

  location.reload();
}
