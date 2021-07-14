function dizerOi(nome) {
	console.log(this);  // retorna o scopo global
	console.log("Oi, " + nome);
}



//1tipo ***tradicional***
// dizerOi("Arya");    


//2tipo *** neste caso, o colchete é só pra teste, pq eu poderia usar mais de um objeto no function

// dizerOi.call({}, "Arya");   


//3tipo **
//dizerOi.apply({}, ["Arya"]);  