const pergunta = document.querySelector('#pergunta');
const escolhas = Array.from(document.querySelectorAll('.escolha-texto'));
const progressoTexto = document.querySelector('#progresso-texto');
const scoreTexto = document.querySelector('#score');
const barraFull = document.querySelector('#barra-full');

let perguntaAtual = {}
let aceitarResposta = true;
let score = 0;
let perguntaCounter = 0;
let perguntasArray = []

let perguntas = [
    {
        pergunta: 'Quanto é 2+2?',
        escolha1: '2',
        escolha2: '4',
        escolha3: '10',
        escolha4: '22',
        resposta: '4',
    },
    {
        pergunta: 'Quanto é 2+2?',
        escolha1: '2',
        escolha2: '4',
        escolha3: '10',
        escolha4: '22',
        resposta: '4',
    },
    {
        pergunta: 'Quanto é 2+2?',
        escolha1: '2',
        escolha2: '4',
        escolha3: '10',
        escolha4: '22',
        resposta: '4',
    },
    {
        pergunta: 'Quanto é 2+2?',
        escolha1: '2',
        escolha2: '4',
        escolha3: '10',
        escolha4: '22',
        resposta: '4',
    },
]

const scorePontos = 100

const perguntaMax = 4

startGame = () =>{
    contadorPerguntas = 0
    score = 0
    perguntasArray = [...perguntas]
    getNewPergunta()
}

getNewPergunta = () =>{
    if (perguntasArray.length === 0 || contadorPerguntas > perguntaMax){
        localStorage.setItem('scoreRecente', score)

        return window.location.assign('/end.html')
    }

    contadorPerguntas++
    progressoTexto.innerText = `pergunta ${contadorPerguntas} de ${perguntaMax}`
    barraFull.style.width = `${(contadorPerguntas/perguntaMax) * 100}%`

    const perguntasIndex = Math.floor(Math.random() * perguntasArray.length)
    perguntaAtual = perguntasArray[perguntasIndex]
    pergunta.innerText = perguntaAtual.pergunta

    escolhas.forEach(escolha =>{
        const number = escolha.dataset['number']
        escolha.innerText = perguntaAtual['escolha' + number]
    })

    perguntasArray.splice(perguntasIndex, 1)

    aceitarResposta = true
}

    escolhas.forEach(escolha => {
        escolha.addEventListener('click', e => {
            if(!aceitarResposta) return

            aceitarResposta = false
            const escolhaSelecionada = e.target;
            const escolhaResposta = escolhaSelecionada.dataset['number']

            let aplicarClasse = escolhaResposta == perguntaAtual.resposta ? 'correto' : 'incorreto'

            if (aplicarClasse === 'correto'){
                incrementScore(scorePontos)
            }

            escolhaSelecionada.parentElement.classList.add(aplicarClasse)

            setTimeout(() => {
                escolhaSelecionada.parentElement.classList.remove(aplicarClasse)
                getNewPergunta()

            }, 1000)
        })
    })

    incrementScore = num => {
        score +=num
        scoreTexto.innerText = score
    }

    startGame()