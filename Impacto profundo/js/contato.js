// exibir dados na 3 etapa antes do enviao 
function exibirDados() {
    var nome = document.getElementById('nome').value;
    var email = document.getElementById('email').value;
    var data = document.getElementById('data').value;
    var hora = document.getElementById('hora').value;
    var localizacao = document.getElementById('map').innerText; // Alterado para pegar o texto do elemento div
    var risco = document.getElementById('risco').value;
    var qtdPessoas = document.getElementById('qtdPessoas').value;
    var causas = document.getElementById('causas').value;
    var outrasCausas = document.getElementById('outrasCausas').value;
    var sugestao = document.getElementById('sugestao').value;


    var dadoscadastrado = document.getElementById('dados-cadastrado');
    dadoscadastrado.innerHTML = `
    <h2>Informações de Risco Ambiental:</h2>
    <p><strong>Nome:</strong> ${nome}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Data:</strong> ${data}</p>
    <p><strong>Hora:</strong> ${hora}</p>
    <p><strong>Localização:</strong> ${localizacao}</p>
    <p><strong>Nível de Risco:</strong> ${risco}</p>
    <p><strong>Quantidade de Pessoas Afetadas:</strong> ${qtdPessoas}</p>
    <p><strong>Causa:</strong> ${causas}</p>
    <p><strong>Outras Causas e Sugestão de melhorias:</strong> ${outrasCausas}</p>
    <p><strong>Elogios e Sugestão de melhorias:</strong> ${sugestao}</p>

`;
}

// alert temporario 
function enviarFormulario(){
    alert('Formulario enviado com Sucesso!');
}