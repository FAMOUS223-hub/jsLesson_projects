const winner = document.querySelector('.winDeclare');
const player1 = document.querySelector('.player1');
const player2 = document.querySelector('.player2');
const playBtn = document.getElementById('play');
let count1 = document.querySelector('.count1');
let drawCounter = document.getElementById('draw')

//STORING RESULTS IN LOCASTORAGE
let count = Number(localStorage.getItem('player1Score') || 0);
let counter1 = Number(localStorage.getItem('player2Score') || 0);
let drawCount = Number(localStorage.getItem('drawScore') || 0);

let count2 = document.querySelector('.count2');
const resetButton = document.querySelector('.reset');

//PLAYER 1 TO PLAY A RANDOM DICE
function player1Goes(){
    let play1 = Math.floor(Math.random()*6)+1;
    player1.src = `img/${play1}.png`
    return play1;
}

//PLAYER 2 TO PLAY A RANDOM DICE
function player2Goes(){
    let play2 = Math.floor(Math.random()*6)+1;
    player2.src = `img/${play2}.png`
    return play2;
}

//PLAYY BUTTON THAT PLAYS THE TWO FUNCTIONS ABOVE
playBtn.addEventListener('click', () =>{
    player1Goes();
    player2Goes();

        const p1 = player1Goes();
        const p2 = player2Goes();

        if (p1 > p2){
            winner.textContent = "Player 1 Won!";
            count += 1;
            localStorage.setItem('player1Score', count);
            count1.textContent = count;
        } 
        else if(p1 < p2){
            winner.textContent = "Player 2 Won!"
            counter1 += 1;
            localStorage.setItem('player2Score', count);
            count2.textContent = counter1;
        } 
        else {
            winner.textContent = "Draw!"
            drawCount += 1;
            localStorage.setItem('drawScore', count);
            drawCounter.textContent = drawCount;
        }
})

resetButton.addEventListener('click', ()=>{
    localStorage.clear();
        count = 0;
        counter1 = 0;
        drawCount = 0;

        count1.textContent = 0;
        count2.textContent = 0;
        drawCounter.textContent = 0;
        winner.textContent ="Play Now!"
})

let hello = {
     firstName: 'Amos',
     lastName: 'Nganbe',
     age: 22

}


// hello =JSON.stringify(hello);
// const store = localStorage.setItem('myHello', hello);
// console.log(localStorage.getItem('myHello'))