document.addEventListener('DOMContentLoaded', ()=>{

    let squares = document.querySelectorAll(".square");

    squares.forEach((square) => {
        square.addEventListener('click', handleClick);
    })

})


function handleClick(event){

    let square = event.target;
    let position = square.id;

    if(handleMove(position)){

        let inputBlack = document.getElementById("playerBlack").value;
        let inputRed = document.getElementById("playerRed").value;

        if(playerTime == 0) {
            playerTime = inputBlack;
        }else{
            playerTime = inputRed;
        }

        setTimeout(() => {
            alert(`Parabéns ${playerTime}, você ganhou o jogo!`);
        }, 10);
        
    };
    updateSquare(position);
}

function updateSquare(position){

    let square = document.getElementById(position.toString());
    let symbol = board[position];
    square.innerHTML = `<div class='${symbol}'></div>`;
}


function updateSquares() {
    let squares = document.querySelectorAll(".square");

    squares.forEach((square) => {

        let position = square.id;
        let symbol = board[position];
        if(symbol != ''){
            square.innerHTML = `<div class='${symbol}'></div>`;
        }
    })
}


function resetGame(){
   
    let squares = document.querySelectorAll(".square");

    squares.forEach((square) => {

        let position = square.id;
        let symbol = board[position];
        if(symbol != ''){
            square.innerHTML = '';
        }
    })

    board = ['','','','','','','','',''];
    playerTime = 0;
    gameOver = false;

    document.getElementById("vez").innerHTML = "Vez do Jogador Preto";
    document.getElementById("vez").style.color = '#3e3838';

}

function play() {

    let inputBlack = document.getElementById("playerBlack").value;
    let inputRed = document.getElementById("playerRed").value;

    if(inputBlack != '' && inputRed != '') {

        document.getElementById("sqr1").style.display = 'block';
        document.getElementById("sqr2").style.display = 'block';
        document.getElementById("sqr3").style.display = 'block';
        document.getElementById("home").style.display = 'none';
        document.getElementById("clean").style.display = 'inline-block';
        document.getElementById("newGame").style.display = 'inline-block';
        document.getElementById("vez").style.display = 'none';


    } else {
        alert("Digite os nomes dos jogadores!");
    }
}

function newGame() {
    document.getElementById("sqr1").style.display = 'none';
    document.getElementById("sqr2").style.display = 'none';
    document.getElementById("sqr3").style.display = 'none';
    document.getElementById("home").style.display = 'block';
    document.getElementById("clean").style.display = 'none';
    document.getElementById("newGame").style.display = 'none';
    document.getElementById("vez").style.display = 'none';
    
}