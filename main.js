const form = document.getElementById('form-contato');
const imgSalvo = '<img src="./image/aprovado.png" alt="Ícone salvar" />';
const nome = [];
const numero = [];
const DDD = [];
const inputNomeContato = document.getElementById('nome-contato');
const inputDDDContato = document.getElementById('tell-ddd');
const inputNumeroContato = document.getElementById('numero-contato');

let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
});

function adicionaLinha() {

    if (nome.includes(inputNomeContato.value)) {
        alert(`O contato "${inputNomeContato.value}" já foi salvo!`);
    } else {
        nome.push(inputNomeContato.value);
        numero.push(inputNumeroContato.value);
    
        let linha = '<tr>';
        linha += `<td>${inputNomeContato.value}</td>`;
        linha += `<td>(${inputDDDContato.value})</td>`;
        linha += `<td>${inputNumeroContato.value}</td>`;
        linha += `<td>${imgSalvo}</td>`;
        linha += '</tr>';
    
        linhas += linha;
    }

    inputNomeContato.value = '';
    inputDDDContato.value = '';
    inputNumeroContato.value = '';
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}