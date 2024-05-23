function cadastrarCliente(nome, email, idade) {
    return {
        nome: nome,
        email: email,
        idade: idade
    };
}

function atualizarCliente(cliente, novosDados) {
    if (novosDados.nome !== undefined) cliente.nome = novosDados.nome;
    if (novosDados.email !== undefined) cliente.email = novosDados.email;
    if (novosDados.idade !== undefined) cliente.idade = novosDados.idade;
    return cliente;
}

function deletarCliente(cliente, propriedades) {
    propriedades.forEach(prop => {
        if (cliente.hasOwnProperty(prop)) {
            delete cliente[prop];
        }
    });
    return cliente;
}

// CREATE
const clienteum = cadastrarCliente('Caio Rocha', 'caiorf2005@gmail.com', 19);
console.log(clienteum);

// UPDATE
const novosDados = { nome: 'Aroldo Junior', email: 'aroldojr@gmail.com', idade: 20 };  
const clienteAtualizado = atualizarCliente(clienteum, novosDados);
console.log(clienteAtualizado);

// DELETE
const propriedadedelete = ['email', 'idade'];
const clienteFinal = deletarCliente(clienteAtualizado, propriedadedelete); 
console.log(clienteFinal);
