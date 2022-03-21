const nome = ['Melk','Ro','Andre','Arthur']
const idade = [44,49,15,11]
if(maior = nome.filter((pessoa,indice) =>idade[indice]>18)){
    console.log(`${maior} é maior de idade`)
}if(menor = nome.filter((_,indice) =>idade[indice]<18)){
    console.log(`${menor} é menor de idade`)
}

