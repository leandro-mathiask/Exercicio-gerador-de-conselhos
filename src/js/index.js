document.getElementById('btn-avancar').addEventListener('click', () => {
    mostrarFraseAleatorias()
})

async function mostrarFraseAleatorias() {
    try {
        const url = await fetch("https://api.adviceslip.com/advice")
        if (!url.ok) {
            throw new Error("Ocorreu um erro ao tentar buscar as informações da API");
        }
        const adviceContent = await url.json()
        const adviceId = `Advice #${adviceContent.slip.id}`
        const adviceText = `"${adviceContent.slip.advice}"`
        document.getElementById('advice').innerHTML = adviceId
        document.getElementById('frase-ativa').innerHTML = adviceText
    } catch (error) {
        // console.error("Erro ao tentar buscar as informações da API", error)
    }

}
mostrarFraseAleatorias()