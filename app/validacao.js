function verificaSeOChutePossuiUmValorValido(chute) {
    const numero = +chute

    if (chuteForIvalido(numero)) {
        elementoChute.innerHTML += '<div>Valor inválido</div>'
        return
    }

    if (numeroForMaiorOuMenorQueOValorPermitido(numero)) {
        elementoChute.innerHTML += `<div>Valor inválido: fale um número entre ${menorValor} e ${maiorValor}</div>` 
        return
    }

    if (numero === numeroSecreto) {
        document.body.innerHTML = `
        <h2>Você acertou!</h2>
        <h3>O número secreto era ${numeroSecreto}</h3>
        
        <button id="jogar-novamente" class="btn-jogar">Jogar novamente</button>
        `

    } else if (numero > numeroSecreto) {
        elementoChute.innerHTML += `<div>o número screto é menor <i class="fa-solid fa-down-long"></i></div>`

    } else {
        elementoChute.innerHTML += `<div>o número screto é maior <i class="fa-solid fa-up-long"></i></div>`
    }
}

function chuteForIvalido(numero) {
    return Number.isNaN(numero)
}

function numeroForMaiorOuMenorQueOValorPermitido(numero) {
return numero > maiorValor || numero < menorValor
}

document.body.addEventListener('click', e => {
    if (e.target.id == 'jogar-novamente') {
        window.location.reload()
    }
})