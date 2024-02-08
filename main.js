const form = document.getElementById('form-deposito');

function validaNomeCompleto(nomeCompleto) {
    return nomeCompleto.split(' ').length >= 2;
}

const nomeBeneficiario = document.getElementById('nome');
const numeroConta = document.getElementById('conta');
const valorDeposito = document.getElementById('valor');
const descricaoDeposito = document.getElementById('descricao');
let isFormValid = false;

function resetFormulario() {
    nomeBeneficiario.value = '';
    numeroConta.value = '';
    valorDeposito.value = '';
    descricaoDeposito.value = '';
    resetInputCSS(nomeBeneficiario);
}

function resetInputCSS(input) {
    input.classList.remove('input-error');
    input.classList.remove('input-success');
}

form.addEventListener('submit', function(e) {
    e.preventDefault();

    if (!isFormValid) {
        return;
    }

    const mensagemSucesso = `Montante de: R$ <b>${valorDeposito.value}</b> foi depositado para o cliente: <b>${nomeBeneficiario.value}</b> - conta: </b>${numeroConta.value}</b>.`;
    const containerMensagemSucesso = document.querySelector('.mensagem-sucesso');  
    containerMensagemSucesso.innerHTML = mensagemSucesso;
    containerMensagemSucesso.style.display = 'block';

    resetFormulario();
    
});

nomeBeneficiario.addEventListener('keyup', function(e) {
    resetInputCSS(nomeBeneficiario);
    

    isFormValid = validaNomeCompleto(e.target.value); 
    const containerMensagemErroCampo = document.querySelector('.mensagem-erro');
    
    if (!isFormValid) {
        containerMensagemErroCampo.style.display = 'block';
        nomeBeneficiario.classList.add('input-error');
        return;
    }


    containerMensagemErroCampo.style.display = 'none';
    nomeBeneficiario.classList.remove('input-error');
    nomeBeneficiario.classList.add('input-success');
});





