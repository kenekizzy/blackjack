const startBtn = document.querySelector("#start-btn")
const newBtn = document.querySelector("#new-btn")
let messager = document.querySelector("#message-er")
let player = document.querySelector("#player")
let score = document.querySelector("#score")
let cards = document.querySelector("#cards")
let amount = 1000
let hasBlackjack = false
let isAlive = false
let message = ""
let card = []
let sum = 0
let details = {
    name: "Kene",
    money: amount
}

player.textContent = `${details.name}: ${details.money}`
function getRandomNumber(){
    let number = Math.floor(Math.random() * 13) + 1
    if (number === 1){
        return 11
    }else if(number > 10 && number <= 13){
        return 10
    }else{
        return number
    }
}
function startGame(){
    isAlive = true
    let firstCard = getRandomNumber()
    let secondCard = getRandomNumber()
    card.push(firstCard)
    card.push(secondCard)
    sum = firstCard + secondCard
    renderGame()
}
function renderGame(){
    score.textContent = `Sum: ${sum}`
    if(sum <= 20){
        message = "Do you want to draw a new Card"
    }else if(sum === 21){
        message = "You've got blackjack"
        hasBlackjack = true
        amount = amount += 10
        console.log(amount)
    }else{
        message = "You are out of the game"
        isAlive = false
        amount = amount -= 10
        console.log(amount)
    }
    messager.textContent = message
    cards.textContent = "Cards:"
    for(let i = 0; i < card.length; i++){
        cards.textContent += ` ${card[i]}`
       }
   
}
function newCard(){
    if(isAlive === true && hasBlackjack === false){
        let thirdCard = getRandomNumber()
        card.push(thirdCard)
        sum += thirdCard
        renderGame()
    }

}

startBtn.addEventListener("click", startGame)

newBtn.addEventListener("click", newCard)