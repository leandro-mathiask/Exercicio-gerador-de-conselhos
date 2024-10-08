const botao = document.getElementById('btn-avancar')
const conselhos = document.querySelectorAll('.conselhos')
let currentIndex = 0;
let advice = document.getElementById('advice')

function proximaFrase() {
    const primeiraFrase = currentIndex === conselhos.length - 1
    if (primeiraFrase) {
        currentIndex = -1
    }
    const fraseSelecionada = document.querySelector('.ativo')
    fraseSelecionada.classList.remove('ativo')
    currentIndex++
    conselhos[currentIndex].classList.add('ativo')
    advice.innerText = `#${117 + currentIndex}`;
    
}
