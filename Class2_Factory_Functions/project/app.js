// JH - This is Module
const gameBoard = (() => {
  let winner = null, turns = 0;
  const board = [], winnerCombo = [];

  // Possible win combinations
  const winCombos = [[0,1,2],[0,3,6],[3,4,5],[6,7,8],[1,4,7],[2,4,6],[2,5,8],[0,4,8]];

  // Creates players - This is a Factory Function
  const playerFactory = (name, mark, turn) => {
    return { name, mark, turn };
  };
  const player1 = playerFactory('player 1', 'X', true);
  const player2 = playerFactory('Player 2', 'O', false);

  // Module to add eventlistener to each square being played
  (() => {
    const box = document.querySelectorAll('.box');
    box.forEach((b) => {
      b.addEventListener('click', (e) => {
        if (player1.turn == true && gameBoard.winner == null && e.target.textContent == '') {
          // X player
          board[e.target.id] = player1.mark;
          b.textContent = player1.mark;
          b.style.color = '#EE6C4D';
          player1.turn = false;
          player2.turn = true;
          // console.log(board)
        } else {
          // O player
          board[e.target.id] = player2.mark;
          b.textContent = player2.mark;
          b.style.color = '#98C1D9';
          player1.turn = true;
          player2.turn = false;
          // console.log(board)
        };

        winCheck();
      });
    });
    return { box }
  })();
  
  // Method - Checks for a winner
  winCheck = () => {
    turns++;

    // Seperates each player X | O move into 2 diffrent arrays
    let xPlays = board.reduce((a, e, i) => e === player1.mark ? a.concat(i) : a, []);
    let oPlays = board.reduce((a, e, i) => e === player2.mark ? a.concat(i) : a, []);
    
    // Loop iterates over each winCombo array 
    for(let [index, combo] of winCombos.entries()) {
      if (combo.every(elem => xPlays.indexOf(elem) > -1)) {
        gameBoard.winner = 'p1';
        gameBoard.winnerCombo = combo;
      } else if (combo.every(elem => oPlays.indexOf(elem) > -1)) {
        gameBoard.winner = 'p2';
        gameBoard.winnerCombo = combo;
      } else if (gameBoard.winner == null && gameBoard.winner == undefined && turns == 9) {
        gameBoard.winner = 'tie';
        gameBoard.winnerCombo = combo;
      };
    };

    // Display the winner
    winDisplay();
    return winnerCombo;
  }

  // Method - Resets board and display
  gameReset = () => {
    gameBoard.winner = null;
    gameBoard.winnerCombo = undefined;
    player1.turn = true;
    player2.turn = false;
    turns = 0;
    board.splice(0, board.length);
  };

  return { gameReset, winner, winnerCombo };
})();

// JH - This is Module
const displayController = (() => {
  const boxCtn = document.querySelector('.box-ctn');
  const box = document.querySelectorAll('.box');
  const winCtn = document.querySelector('.win-display');
  const playBtn = document.getElementById('play-btn');
  const replayBtn = document.querySelector('.replay-btn');
  const backBtn = document.querySelector('.back-btn');
  const header = document.querySelector('header');

  // Display winner function 
  winDisplay = () => {
    // Displays the win combo
    combDisplay = () => {
      for(i = 0; i < gameBoard.winnerCombo.length; i++) {
        document.getElementById(gameBoard.winnerCombo[i]).style.
        backgroundColor = 'rgba(0, 0, 0, 0.040)';
      };
    };

    // Displays the winner
    if(gameBoard.winner === 'p1') {
      winCtn.textContent = 'X Wins the round!';
      combDisplay();
    } else if (gameBoard.winner === 'p2') {
      winCtn.textContent = 'O Wins the round!';
      combDisplay();
    } else if (gameBoard.winner === 'tie') {
      winCtn.textContent = 'It\'s a tie!';
    } else {
      return;
    };

    replayBtn.style.display = 'flex';
    backBtn.style.display = 'flex';
    // console.log(gameBoard.winnerCombo)
  };

  // Board render 
  gamePlay = () => {
    winCtn.style.display = 'block';
    header.style.display = 'none';
    playBtn.style.display = 'none';
    boxCtn.style.display = 'flex';
    backBtn.style.display = 'flex';
  };

  // Resets board and display
  gameReplay = () => {
    replayBtn.style.display = 'none';
    winCtn.textContent = '';

    box.forEach((box) => {
      box.textContent = '';
      box.style.opacity = '0';
      box.style.backgroundColor = 'white';
    });

    gameReset();
  };

  // Back to main button 
  mainPage = () => {
    boxCtn.style.display = 'none';
    winCtn.style.display = 'none';
    backBtn.style.display = 'none';
    playBtn.style.display = 'flex';
    header.style.display = 'flex';

    // Resets board and display  
    gameReplay();
  };

  // Event listeners 
  playBtn.addEventListener('click', gamePlay);
  replayBtn.addEventListener('click', gameReplay);
  backBtn.addEventListener('click', mainPage);
  
  return { winDisplay }
})();