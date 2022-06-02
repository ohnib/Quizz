const scoreLista = document.querySelector('#scoreLista');
const scoreAlto = JSON.parse(localStorage.getItem('scoreLista')) || []

scoreLista.innerHTML = 
scoreAlto.map(score => {
    return `<li class="score-alto">${score.name} - ${score.score}</li>`
}).join('')