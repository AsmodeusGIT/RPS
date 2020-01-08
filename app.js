const game = () => {
  let pScore = 0;
  let cScore = 0;

  //start the game
  const startGame = () => {
    const playBtn = document.querySelector('.intro button');
    const introScreen = document.querySelector('.intro');
    const match = document.querySelector('.match');

    playBtn.addEventListener('click', () => {
      introScreen.classList.add('fadeOut');
      match.classList.add("fadeIn");
    });
  };

  //Play match
  const playMatch = () => {
    const options = document.querySelectorAll('.options button');
    const playerHand = document.querySelector('.player_hand');
    const computerHand = document.querySelector('.computer_hand');
    const hands = document.querySelectorAll('.hands img');

    hands.forEach(hand =>{
      hand.addEventListener('animationend', function() {
        this.style.animation = "";
      });
    });
    //computer options
    const computerOptions = ['rock', 'paper', 'scissors'];

    options.forEach(option => {
      option.addEventListener("click", function() {
        //computer choice
        const computerNumber = Math.floor(Math.random() * 3);
        const computerChoice = computerOptions[computerNumber];
        // console.log(computerChoice);

        setTimeout(() => {
          //here we call compare hands function
          compareHands(this.textContent, computerChoice);
          //update images
          playerHand.src = `./img/${this.textContent}.png`;
          computerHand.src = `./img/${computerChoice}.png`;
        }, 1300);
        //animation
        playerHand.style.animation = "shakePlayer 1.5s ease";
        computerHand.style.animation = "shakeComputer 1.5s ease";
      });
    });
  };

  //updating the score
  const updateScore = () => {
    const playerScore = document.querySelector('.player_score p');
    const computerScore = document.querySelector('.computer_score p');
    playerScore.textContent = pScore;
    computerScore.textContent = cScore;
  };

  const compareHands = (playerChoice, computerChoice) => {
    //Update text
    const winner = document.querySelector('.winner');
      //checking for a tie
    if(playerChoice === computerChoice){
      winner.textContent = 'It is a tie';
      return;
    }
    //checking for rock
    if(playerChoice === 'rock'){
      if(computerChoice === 'scissors'){
        winner.textContent = 'Player wins';
        pScore++;
        updateScore();
        return;
      }else{
        winner.textContent = 'Computer wins';
        cScore++;
        updateScore();
        return;
      }
    }
    //checking for paper
    if(playerChoice === 'paper'){
      if(computerChoice === 'rock'){
        winner.textContent = 'Player wins';
        pScore++;
        updateScore();
        return;
      }else{
        winner.textContent = 'Computer wins';
        cScore++;
        updateScore();
        return;
      }
    }
    //checking for scissors
    if(playerChoice === 'scissors'){
      if(computerChoice === 'paper'){
        winner.textContent = 'Player wins';
        pScore++;
        updateScore();
        return;
      }else{
        winner.textContent = 'Computer wins';
        cScore++;
        updateScore();
        return;
      }
    }


  };


  //call all inner functions
  startGame();
  playMatch();
};
//start the game function
game();
