const username = document.querySelector('#username')
const salvarScoreBtn = document.querySelector('#salvarScoreBtn')
const scoreFinal = document.querySelector('#scoreFinal')
const scoreRecente = localStorage.getItem('scoreRecente')

const scoreLista = JSON.parse(localStorage.getItem('scoreLista')) || []

const scoreMax = 5

scoreFinal.innerText = scoreRecente

username.addEventListener('keyup', () => {
    salvarScoreBtn.disabled = !username.value
})

salvarScore = e => {
    e.preventDefault()

    const score = {
        score: scoreRecente,
        name: username.value,
    }

    scoreLista.push(score)

    scoreLista.sort((a,b) => {
        return b.score - a.score
    })

    scoreLista.splice(5)

    localStorage.setItem('scoreLista', JSON.stringify(scoreLista))
    window.location.assign('/')
}

