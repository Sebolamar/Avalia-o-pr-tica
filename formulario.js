function pegarform() {
  var x = document.getElementById("nome");
  var text = "";
  var i;
  for (i = 0; i < x.length ;i++) {
    text += x.elements[i].value + "<br>";
  }
  document.getElementById("nome").innerHTML = text;
}