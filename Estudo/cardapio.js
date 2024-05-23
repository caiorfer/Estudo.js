//Create
function criarPrato(nome, preco){
    return {
        nome: nome,
        preco: preco
    };
}

const pratoUm = criarPrato('Gazpacho', '40,00R$');
console.log(pratoUm);

//UPDATE
function atualizarPrato(novosDados, prato){
    if(novosDados.nome !== undefined) prato.nome = novosDados.nome;
    if(novosDados.preco !== undefined) prato.preco = novosDados.preco;
    return prato;
}

const novosDados = {nome: 'Ratatouille', preco: '30,00R$'};
const attPrato = atualizarPrato(novosDados, pratoUm);
console.log(attPrato);

//DELETE
function deletarPrato(propriedades, prato){
    propriedades.forEach(prop =>{
        if(prato.hasOwnProperty(prop)){
            delete prato[prop];
        }
    });
    return prato;
}

const propriedadesDelete = ['nome'];
const pratoFinal = deletarPrato(propriedadesDelete, attPrato);
console.log(pratoFinal);

//ADD
function adicionarPrato(cardapio, nome, preco){
    cardapio.push(criarPrato(nome, preco));
}

const cardapio = [];

adicionarPrato(cardapio, 'Ratatouille', '44,00 RS');
adicionarPrato(cardapio, 'Gazpacho', '40,00 RS');
adicionarPrato(cardapio, 'Escargo', '24,00 RS');

console.log("Cardápio após adição de pratos:", cardapio);