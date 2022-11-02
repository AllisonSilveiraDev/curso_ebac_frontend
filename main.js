const form = document.getElementById("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const valorA = document.getElementById("campoA");
  const valorB = document.getElementById("campoB");

  function validaForm() {
    if (valorA.value < valorB.value) {
      const msgDeSucesso = document.querySelector(".mensagem");
      msgDeSucesso.classList.remove("error");
      msgDeSucesso.classList.add("sucess");
      msgDeSucesso.style.display = "flex";
      msgDeSucesso.innerHTML = "Válido B é maior que A ";
    } else {
      const msgDeFalha = document.querySelector(".mensagem");
      msgDeFalha.classList.remove("sucess");
      msgDeFalha.classList.add("error");
      msgDeFalha.style.display = "flex";
      msgDeFalha.innerHTML = "Inválido B é menor que A ";
    }
  }

  validaForm();
});
