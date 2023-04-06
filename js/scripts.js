// Funcionalidade do menu mobile!
function showMenu(){
    let menuMobile = document.querySelector('.mobile-menu')
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open')
        document.querySelector('.icon').src = 'img/menu_white_36dp.svg'
    } else {
        menuMobile.classList.add('open')
        document.querySelector('.icon').src = 'img/close_white_36dp.svg'
    }
}

// CARROSSEL

let slides = document.querySelectorAll('.slider')
let indice = 0

function avancar(){
    slides[indice].classList.remove('ativo')
    indice = (indice + 1) % slides.length
    slides[indice].classList.add('ativo')
    console.log('teste')
}

function voltar(){
    slides[indice].classList.remove('ativo')
    indice = (indice - 1 + slides.length) % slides.length
    slides[indice].classList.add('ativo')
}

// VALIDAÇÃO DE FORMULÁRIO

function acao(){
    let campoEmail = document.querySelector("#campoEmail").value
    let campoSenha = document.querySelector("#campoSenha").value

    if (campoEmail == '' && campoSenha == '') {
        alert('Erro! Preencha todo o formulário!')
    } else {
        alert('Registrado com sucesso')
        campoEmail = ''
        campoSenha = ''
    }
}