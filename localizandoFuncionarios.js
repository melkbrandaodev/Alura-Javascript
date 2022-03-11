

const nome = ['Ze do bar','Ze do Leite']
const idade = [29,40]
const cidade = ['Santo Andre','Sao Paulo']

const dados = [nome,idade,cidade]

const cadastro = (nomeAssociado) =>{
    if (dados[0].includes(nomeAssociado)){
        let indice = dados[0].indexOf(nomeAssociado)
        return dados[0][indice]+ ' tem '+dados[1][indice]+' anos e mora em '+dados[2][indice]
    }
}
console.log(cadastro('Ze do bar'))