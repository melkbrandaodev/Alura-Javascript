const nomes = [ 'Joao','Juliana','Ana','Caio','Lara','Marjorie','Guilherme','Aline','Fabiana','Andre','Carlos','Paulo','Bia','Vivian','Isabela','Vinicius','renan','Renata','Daisy','Camilo']

const sala1 = nomes.slice(0,nomes.length/2);
const sala2 = nomes.slice(nomes.length/2);
console.log("Tamanho da Array:",nomes.length)

console.log(`Alunos da sala 01:${sala1}`);
console.log(`Alunos da sala 02:${sala2}`);