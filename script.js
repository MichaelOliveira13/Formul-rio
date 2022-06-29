let form = document.getElementById('formulario');
let nome = document.getElementById('nome');
let nascimento = document.getElementById('inputnascimento');
let email = document.getElementById('emailinput');
let senha = document.getElementById('inputsenha');
let telefone = document.getElementById('inputtelefone');


form.addEventListener('submit', function() {
    // alerta o valor do campo
    alert("Nome:" + nome.value + "\nData de nascimento:" + nascimento.value + "\nEmail:" + email.value + "\nSenha:"+ senha.value + "\nTelefone:" + telefone.value);
    
});

