function getFromStorage() {
  var contagem = localStorage.getItem("@shield/contador-v1");
  if (!contagem) return 0;
  return Number(contagem);
}

var contador = document.getElementById("counter");
var valorAtual = getFromStorage();

contador.innerText = valorAtual;
var proximoValor = valorAtual + 1;

localStorage.setItem("@shield/contador-v1", proximoValor);
