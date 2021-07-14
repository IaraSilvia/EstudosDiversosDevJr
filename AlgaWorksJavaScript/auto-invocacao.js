(function(){
	var a = 1;
	consolo.log(a);
})();

//quando se quer ISOLAR um scopo no JS na função, fazemos essa função auto invocada.
// observar que a função está entre parênteses ().
// Muito utiizada no angular.js, ou queremos isolar um modo que foi criado, no Jquery faz para só enxergar oque foi público ($)
// é possível reaproveitar a variavel (a) no mesmo código, pois ela está isolada.
