const alunos  =['Joao','Juliana','Caio','Ana'];
const mediaDosAlunos = [10,7,9,6];
//includes -> um booleano
//indexOf -> número

let listaDeNotaseAlunos = [alunos,mediaDosAlunos];

const exibeNomeNota = (nomeDoAluno) =>{
    if(listaDeNotaseAlunos[0].includes(nomeDoAluno)){
         let indice = listaDeNotaseAlunos[0].indexOf(nomeDoAluno)
        return listaDeNotaseAlunos[0][indice]+',sua media é '+listaDeNotaseAlunos[1][indice]
    }else{
        return 'Aluno não está cadastrado'
    }
}
console.log(exibeNomeNota("Juliana"))