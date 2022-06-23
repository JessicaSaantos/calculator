let resultado = document.getElementById('resultado')

function insert(num){ 
 resultado.value = resultado.value + num
}

function clean (){
    resultado.value = ''
}

function deleteLast() {
    let res = resultado.value
    resultado.value = res.substring(0, res.length -1)
}

function calcular(){
   let resul = resultado.value
   if(resul) {
    resultado.value = eval(resul)
   } else {
    resultado.value = 'ERRO'
   }
}