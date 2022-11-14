$(document).ready(function () {
  $("#telefone").mask("(00) 0 0000-0000", {
    placeholder: "(__) _ ____-____",
  });

  $("#cep").mask("00000-000", {
    placeholder: "00000-000",
  });

  $("#cpf").mask("000.000.000-00", {
    placeholder: "000.000.000-00",
  });
});
