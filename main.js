const form = document.getElementById('form-contato');
const nomes = [];
const numeros = [];

let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    adicionaLinha();
    atualizaTabela();
})

function adicionaLinha() {
    const inputNomeContato = document.getElementById('nome-contato');
    const inputNumeroContato = document.getElementById('numero-telefone');
    
    if (numeros.includes(inputNumeroContato.value)) {
        alert(`Contato já inserido com o numero ${inputNumeroContato.value}`);
    } else {
        nomes.push(inputNomeContato.value);
        numeros.push(inputNumeroContato.value);
    
        let linha = '<tr>';
        linha += `<td>${inputNomeContato.value}</td>`
        linha += `<td>${inputNumeroContato.value}</td>`
        linha += '</tr>'
    
        linhas += linha;
    }


    inputNomeContato.value = '';
    inputNumeroContato.value = '';
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}
