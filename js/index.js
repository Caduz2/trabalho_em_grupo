var contador = 1 //variável pública criada fora da function
var img1 = '/imagens/artes/2.png'
var img2 = '/imagens/artes/3.png'
var img3 = '/imagens/artes/4.png'
var img4 = '/imagens/artes/5.png'
var tempo = 2500 //2500(milessegundos) : 1000 (milessegundo) = 2,0s
var exibir = setInterval('Exibindo()', tempo)

function Exibindo() {
  document.images['slide'].src = eval('img' + contador)
  document.getElementById('v' + contador).checked = true

  if (contador < 4) {
    contador++
  } else {
    contador = 1
  }
}

function Muda(x) {
  clearInterval(exibir) //interrompe o que está rodando no setInterval
  contador = x
  exibir = setInterval('Exibindo()', tempo) //recomeçar o looping
}