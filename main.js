$("form").on("submit", function (e) {
  e.preventDefault();
  console.log("submit");
  adicionaTarefa();
  adicionaEstilo();
});

function adicionaTarefa() {
  const novaTarefa = $("input").val();
  $(`<li >${novaTarefa}</li>`).appendTo("ul");
  $("input").val("");
}

function adicionaEstilo() {
  $("ul").on("click", "li", function () {
    $(this).toggleClass("style");
  });
}
