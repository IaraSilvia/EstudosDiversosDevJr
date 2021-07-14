// Funções >> Declaração

// o que são funções: são blocos de códigos que podem ser exectuados mais de uma vez. 

// Declarando função no javascript:


function dizerOi(nome) {
	console.log("Olá " + nome);
}


var dizerOla = function (nome) {

	console.log("Olá " + nome);
};

 
var dizerTchau = new Function("nome", "console.log('Tchau ' + nome);");

dizerTchau("Rickon"); 