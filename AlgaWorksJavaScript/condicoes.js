// if em inglês significa SE, é uma condição. 

// if (booleano) { executa a instrução ou statement}

// o sinal == é o sinal de igual


// Caso 1: neste caso se o x for IGUAL a 18 ele dirá que é 'maior'. SE não for ele será apenas undefined

var x = 17;
var y; 

if (x == 18) {
	y = "maior";
}

//console.log(y);  ***tirar o comentário para testar o código***

// Caso 2: Neste caso segue o primeiro if do case 1, se x for igual a 18 escreva 'maior', senão ele vai escrever menor --mesmo que eu coloque um número maior que 18--

// else em inglês significa SENÃO

var x = 19;
var y; 

if (x == 18) {
	y = "maior";
}
else {
	y = "menor";
}

//console.log(y); ***tirar o comentário para testar o código*** 


// else if
// Caso 3: usamos um operador --maior -- > que indica que qualquer número acima de 18 será considerado 'maior'; else if se for igual a 18 'igual'; senão ele será 'menor'

var x = 20;
var y; 

if (x > 18) {
	y = "maior";
}
else if (x == 18) {
	y = "igual";
}
else {
	y = "menor";
}


switch(x) {     //neste caso se o valor de X for 18, ele executará o que vier depois dos dois pontos (:) seguidos do 18.
	case 18:
		y = 'dezoito';
		break;   // break do inglês "quebrar", aqui ele serve pra uma pausa, primeiro faça isso, pausa, agora isso, sem ele o programa iria testando sem parar até encontrr a } e não executaria o programa.
	case 19:
		y = 'dezenove';
		break;
	default:   // default é no caso de não ser valor nem 18 nem 19.
	y = "sei lá";
}

//console.log(y);    ***tirar o comentário para testar o código*** 

// SWITCH e IF / ELSE são duas formas de usar condicinais no JavaScript