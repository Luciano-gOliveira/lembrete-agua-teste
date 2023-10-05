function calcularAgua() {
  var peso = document.getElementById("peso").value;
  var idade = document.getElementById("idade").value;

  // Cálculo da quantidade de água (exemplo simples)
  var quantidadeAgua = (peso * 0.03).toFixed(1);

  document.getElementById("resultado").innerHTML = "Você deve beber " + quantidadeAgua + " litros de água por dia.";
}
