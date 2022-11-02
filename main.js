const form = document.getElementById("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const valorA = document.getElementById("campoA");
  const valorB = document.getElementById("campoB");

  function validaForm() {
    if (valorA.value < valorB.value) {
      const msgDeSucesso = document.querySelector(".mensagem");
      msgDeSucesso.style.display = "flex";
      msgDeSucesso.innerHTML = "Válido B é maior que A ";
    } else {
      const msgDeFalha = document.querySelector(".mensagem");
      msgDeFalha.style.display = "flex";
      msgDeFalha.innerHTML = "Inválido B é menor que A ";
    }
  }

  validaForm();
});
