let cabecalho = document.getElementById("cabecalho") 
// variavel=um objeto capaz de reter e representar um valor ou expressão. a variavel é cabecalho//
// getelementbyid=Sua função simplesmente retorna o elemento cujo atributo ID foi especificado.//
console.log(cabecalho)

function pegarDadosDoAluno(){ //função é para fazer uma ação no caso ela chama o onclick com o nome pegardados//
const nome = document.getElementById("nome")
const nota1 = document.getElementById ("nota1")
const nota2 = document.getElementById("nota2")
const nota3 = document.getElementById("nota3")
const nota4 = document.getElementById("nota4")	
return nome.value
}
let pegarDado = pegarDadosDoAluno()
console.log("nome",pegarDado)