const hands = ["rock", "paper", "scissors"];

// Define a function called getHand() that returns a hand from the array.
function getHand() {
  return hands[parseInt(Math.random() * 10) % 3];
}

// Define two objects for two players. Each player has name and getHand() properties.
const player1 = { name: "Player 1", getHand: getHand };
const player2 = { name: "Player 2", getHand: getHand };

function playRound(player1, player2) {
  const player1Hand = player1.getHand();
  const player2Hand = player2.getHand();
  let winner = null;
  console.log(player1.name + " plays " + player1Hand);
  console.log(player2.name + " plays " + player2Hand);
  if (player1Hand == player2Hand) {
    console.log(" It's a tie! ");
    return winner;
  } else if (player1Hand == "rock") {
    if (player2Hand == "paper") {
      winner = player2.name;
      console.log(winner + " is the winner! ");
      return winner;
    } else if (player2Hand == "scissors") {
      winner = player1.name;
      console.log(winner + " is the winner! ");
      return winner;
    }
  } else if (player1Hand == "paper") {
    if (player2Hand == "rock") {
      winner = player1.name;
      console.log(winner + " is the winner! ");
      return winner;
    } else if (player2Hand == "scissors") {
      winner = player2.name;
      console.log(winner + " is the winner! ");
      return winner;
    }
  } else if (player1Hand == "scissors") {
    if (player2Hand === "rock") {
      winner = player2.name;
      console.log(winner + " is the winner! ");
      return winner;
    } else if (player2Hand === "paper") {
      winner = player1.name;
      console.log(winner + " is the winner! ");
      return winner;
    }
  }
}

playRound(player1, player2);
