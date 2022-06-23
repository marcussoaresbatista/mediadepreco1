
const meuArray=[] 
console.log(meuArray)

const button= document.getElementById('botao')
//mapeei o botao pra clicar
// criei funcao para o input
const converterValor= ()=>{
    //peguei o input e chamo o input no button.addEvent(com click e a funcao)
    //crio a const para armazenar o valor do input
    const valorDoInput=  document.getElementById('calculo').value
    const valorDaCompra = document.getElementById('compras').value
    

    const valorFinal= valorDoInput/valorDaCompra

    console.log(meuArray)
//crio a variavel abaixo para converter o texto
//armazeno a informacao do html,pego o id la no html
//e converto para o inner

    const resultado=  document.getElementById('resultado')

    resultado.innerHTML=  valorFinal

}



button.addEventListener("click" ,converterValor)