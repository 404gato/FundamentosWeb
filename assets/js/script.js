/* Case Sensitive
por tag: getElementByTagName()
por id: getElementById()
por nome: getElementsByName()
por classe: getElementsByClassName()
por seletor: querySelector()
*/ 

let nome = window.document.getElementById('nome')
let email = document.querySelector('#email')
let mensagem = document.querySelector('#mensagem')
let nomeOk = false
let emailOk = false
let assuntoOk = false
let mapa = document.querySelector('#mapa')

nome.style.width = '97%'
email.style.width = "97%"

function validaNome() {
    let txtNome = document.querySelector('#txtNome')
    if(nome.value.length < 2){
        txtNome.innerHTML = 'Nome inválido'
        txtNome.style.color = 'red'
    }else{
        txtNome.innerHTML = 'Nome Válido'
        txtNome.style.color = 'green'
        nomeOk = true
    }
}

function validaEmail() {
    let txtEmail = document.querySelector('#txtEmail')
    if(email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1){
        txtEmail.innerHTML = 'Email Inválido'
        txtEmail.style.color = 'red'
    } else {
        txtEmail.innerHTML = 'Email Válido'
        txtEmail.style.color = 'green'
        emailOk = true
    }
}

function validaAssunto() {
    let txtAssunto = document.querySelector('#txtAssunto')
 
    if (assunto.value.length > 140) {
       txtAssunto.innerHTML = 'Limite de 140 caracteres'
       txtAssunto.style.color = 'red'
       txtAssunto.style.display = 'block'
    } else {
       txtAssunto.style.display = 'none'
       assuntoOk = true
    }
 }

 function enviar(){
     if(nomeOk == true && emailOk == true && assuntoOk == true){
     alert ('Formulário enviado')
     } else {
         alert('Preencha os campos corretamente!')
     }
 }

 function mapaZoom(){
    mapa.style.width = '400px'
    mapa.style.height = '300px'
 }

 function mapaNormal(){
    mapa.style.width = '200px'
    mapa.style.height = '100px'
 }