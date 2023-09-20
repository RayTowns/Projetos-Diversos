let nome = document.getElementById('name');
let email = document.getElementById('email');
let CPF = document.getElementById('CPF');
let CEP = document.getElementById('CEP');
let Rua = document.getElementById('Rua');
let Bairro = document.getElementById('Bairro');
let Cidade = document.getElementById('Cidade')
let UF = document.getElementById('UF');
let mensagem = document.querySelector('#mensagem')
const notNull = document.querySelectorAll('.not-null')

function isEmpty(elem){
    return elem.value.length < 1 ? `o campo <strong>${elem.name}</strong> não pode ser vazio.` : '';
}

function validaEmail(elem){
    return elem.value.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/) ? '' : 'Digite um <strong>email</strong> válido';
}

function validaCEP(elem){
    if (!elem.value.match(/^[0-9]{8}/))
    return 'Digite um <strong>CEP</strong> válido';
    else return '';
}

function updateAdress(data){
    if(!('erro' in data)){
        Rua.value=(data.logradouro);
        Bairro.value=(data.bairro);
        Cidade.value=(data.localidade);
        UF.value=(data.uf);
        mensagem.innerHTML = '';
    } else {
        mensagem.innerHTML = `CEP não encontrado`;
    }
}

CEP.addEventListener('focusout', function(e){
    const CEPvalido = validaCEP(CEP)
    if(CEPvalido.length > 0) {
        msg.push(CEPvalido)
     } else {
        const script = document.createElement('script');
        script.src ='https://viacep.com.br/ws/'+ CEP.value + '/json?callback=updateAdress';
        document.body.appendChild(script);
     }
})

form.addEventListener('submit', function(e){
    e.preventDefault();

    let msg = [];
    let markup = '';

    const emailValido = validaEmail(email)
    if(emailValido) msg.push(emailValido)

    Array.from(notNull).forEach (field => {
        let fieldState = isEmpty(field);
        if(fieldState) 
            msg.push(fieldState);
    });

    msg.forEach(item => {
        markup += `<p>${item}</p>`
    })
    mensagem.innerHTML = markup;

    if(msg.length == 0) form.submit();
});


