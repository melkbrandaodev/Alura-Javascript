let nota1 = 10;
let nota2 = 6.5
let nota3 = 8;
let nota4  = 7.5;


const notas = [10,6.5,8,7.5]
function mediaDaSala(notas){
const soma = notas.reduce((acumulador,atual) =>acumulador+atual,0)
return soma/notas.length
}
console.log(mediaDaSala(notas))