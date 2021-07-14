// Objetos são variáveis que contém variáveis dentro delas, hahahaha.

// tudo dentro de JavaScript é tratado como objeto.

// como declarar um objeto

//var obj = {}; // dentro dessa variável (objeto) podemos criar várias variáveis (propriedade) que guardam valores (strings, boleanos etc)
// quando utilizamos uma função como valor de propriedade chamamos de método, ver últimos exemplos.

var obj = { 
	nome: "Jon",  
	sobrenome: "Snow",  // as variáveis que ficam dentro do objeto chamamos de propriedade.
	idade: 16			// podemos declarar as propriedades separando por vírgula.
};

console.log(obj);

// para acessar os valores que estão dentro das propriedades, pois no exemplo acima, quando fazemos o teste, ele aparace assim:
// { nome: 'Jon', sobrenome: 'Snow', idade: 16 }

// segue:

var obj = { 
	nome: "Jon",  
	sobrenome: "Snow",
	idade: 16
};

console.log(obj.sobrenome);


// dentro de uma propriedade tb podemos colocar uma função:

var obj = { 
	nome: "Jon",  
	sobrenome: "Snow",
	idade: 16,
	apresentar: function(){
		console.log("Olá, eu sou " + this.nome + ' ' + this.sobrenome + '.');
	}  // quando uma função está dentro de um objeto, o this é considerado o próprio objeto.
};

obj.apresentar();



// Mas também podemos colocar uma função nomeada.

var obj = { 
	nome: "Jon",  
	sobrenome: "Snow",
	idade: 16,
	apresentar: apresentar // o nome do valor da propriedade pode ser diferente.
};

// neste caso, ele atrela a funçao ao método/propriedade apresentar (o 1º)

// quando utilizamos uma função como valor de propriedade chamamos de método, ver últimos exemplos.

function apresentar() {
	console.log("Olá, eu sou " + this.nome + ' ' + this.sobrenome + '.');
}

obj.apresentar();