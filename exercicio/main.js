const formulario = document.getElementById('formulario');
const campoA = document.getElementById('campo-a');
const campoB = document.getElementById('campo-b');

const messageSuccess = document.querySelector('.message-success');
const messageError = document.querySelector('.message-error');

const buttonSubmit = document.getElementById('button-submit');

let isFormValid = false;

function resetForm() {
    campoA.value = '';
    campoB.value = '';
}

function resetInputCSS() {
    campoB.classList.remove('input-error')
    campoB.classList.remove('input-success')
}

function validaFormulario(a, b) {
    return b > a;
}

function applyErrorStatus() {
    messageError.style.display = 'block';
    campoB.classList.add('input-error')
}

function applySuccessStatus() {
    // messageSuccess.style.display = 'block';
    resetButtonSubmit();
    campoB.classList.add('input-success');
}

function applyDisabledToSubmitButton() {
    buttonSubmit.disabled = true;
    buttonSubmit.classList.add('button-disabled');
}

function resetButtonSubmit() {
    buttonSubmit.disabled = false;
    buttonSubmit.classList.remove('button-disabled');

}

formulario.addEventListener('keyup', function(e) {
    let isFormValid = validaFormulario(campoA.value, campoB.value);
    resetInputCSS();
    messageSuccess.style.display = 'none';

    if (!isFormValid) {
        applyErrorStatus();
        applyDisabledToSubmitButton();
        return;
    }
    
    applySuccessStatus();
    messageError.style.display = 'none'
});

formulario.addEventListener('submit', function(e) {
    let isFormValid = validaFormulario(campoA.value, campoB.value);
    e.preventDefault();

    if (!isFormValid) {
        return;
    }

    resetForm();
    resetInputCSS();
    messageSuccess.style.display = 'block';
});
