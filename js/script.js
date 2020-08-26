function changeColor(color) {
  document.body.style.backgroundColor = color;
}

function exibirCreditos() {
  alert(
    "Disciplina: Desenvolvimento de Software para Web\nEvandro Rodrigues\nJordão Rodrigues\nLeonardo David"
  );
}

function printParams() {
  var li = document.createElement("li");
  var nome = document.getElementById("nome").value;
  var mensagem = document.getElementById("mensagem").value;
  var boardmsg = document.createTextNode(`${nome}: ${mensagem}`);
  var close = document.getElementsByClassName("close");
  li.appendChild(boardmsg);

  if (nome === "" || mensagem === "") {
    alert("Escreva alguma coisa!");
  } else {
    document.getElementById("board").appendChild(li);
  }
  document.getElementById("nome").value = "";
  document.getElementById("mensagem").value = "";

  var button = document.createElement("BUTTON");
  var txt = document.createTextNode("\u00D7");
  button.className = "close";
  button.appendChild(txt);
  li.appendChild(button);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
      var div = this.parentElement;
      div.style.display = "none";
    };
  }
}
