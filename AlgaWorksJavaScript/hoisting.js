Hoisting significa que o JavaScript sempre passa todas as declarações de variáveis para o topo do script.


exemplo: 

x = 5;

var x;

o Hoisnting entenderá que não há erro, pois ele entende assim:

var x;

x = 5;


Porém, se atribuir valor a variável, ele não considera o valor. Por exemplo:

console.log(x);

var x = 5;

se executado, ele mostrará Undefined, ou seja, a variável ainda não foi definida.
