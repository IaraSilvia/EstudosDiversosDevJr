// loops códigos executados repetidamente a partir de uma condição dada. temos 4 tipos no JavaScript

// for, for in, while, do while  

// while do inglês signifca 'enquanto'  
 
var x = 0;

while(x <= 10) {
	console.log("x é igual a " + x);
	x = x + 1;
}


// só fazemos o Do While quando queremos executar no mínimo UMA vez uma expressão, e só fazemos a repetição caso a expressão seja verdadeira
do {
	console.log("x é igual a " + x);
	x = x + 1;
}
while(x <= 10)



// FOR

for(var y = 0; y < 10; y = y + 1) {
	console.log(y);
}