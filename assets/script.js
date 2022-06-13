const FRONT = 'card_front' // aqui é card_front
const BACK = 'card_back'
const CARD = 'card'
const ICON = 'icon'

// array que guarda os elementos/parametros
let techs = ['bootstrap',
    'css',
    'html',
    'javascript',
    'electron',
    'jquery',
    'node', // tira o espaço no node
    'firebase',
    'mongo',
    'react']

let cards = null
startGame()

function startGame() {
    let cards = createCardsFromTechs(techs)

    // console.log(cards)

    inicializarCartas(cards)
    embaralhar(cards) //inverter a posição
    
}

function inicializarCartas(cards) {
    let bordeGame = document.getElementById('bordeGame')
    bordeGame.innerHTML = ''
    
    cards.forEach(card => {
        let cardElement = document.createElement('div')
        cardElement.id = card.id;
        cardElement.classList.add(CARD) // sem parêteses
        cardElement.dataset.icon = card.icon

        creatCardContent(card, cardElement)
        
        cardElement.addEventListener('click', flipCard)
        bordeGame.appendChild(cardElement)

    });
}

function creatCardContent(card, cardElement) {
    creatCardFace(FRONT, card, cardElement) // tira o =
    creatCardFace(BACK, card, cardElement) // tira o =
}

function creatCardFace(face, card, element) {
    let creatCardFace = document.createElement('div')
    creatCardFace.classList.add(face)

    if (face === FRONT) {
        let iconElement = document.createElement('img')
        iconElement.classList.add(ICON) //colocar ICON
        iconElement.src = './assets/images/' + card.icon + '.png'

        creatCardFace.appendChild(iconElement) //tirar os parênteses

    } else {
        creatCardFace.innerHTML = '&lt/&gt' // aqui é creatCardFace
    }
    element.appendChild(creatCardFace) // aqui é element
}

function embaralhar(cards) {
    let indexAtual = cards.length
    let randoIndex = 0

    while (indexAtual !== 0) {
        randoIndex = Math.floor.random * indexAtual

        indexAtual--
        [cards[randoIndex], cards[indexAtual]] = [cards[indexAtual], cards[randoIndex]]
    }
}

// modelo das cartas
function createCardsFromTechs(techs) {
    let cards = []
    for (let tech of techs) {
        cards.push(createPaiFrom(tech))
    }
    return cards.flatMap(pair => pair)
}


function createPaiFrom(tech) {
    return [{
        id: creatID(tech),
        icon: tech,
        flipped: false
    }, {
        id: creatID(tech),
        icon: tech,
        flipped: false
    }]
}
function creatID(tech) {
    return tech + parseInt(Math.random() * 1000)
}
function flipCard() {

}