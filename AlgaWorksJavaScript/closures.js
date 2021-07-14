var tick = (function(){
	var contador = 0;

	return function() {
		contador = contador + 1;
		console.log(contador);
	}
})();

tick();
tick();
tick();
tick();


// Quando o tick foi definido, dizemos que o tick é o resultado de uma função, logo, não é possível alterar o contador.
