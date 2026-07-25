let footballTeam = {
  team: "Argentina",
  year: 1986,
  headCoach: "Carlos Bilardo",
  players: [
    { name: "Chandu", position: "forward", isCaptain: true },
    { name: "Harish", position: "midfielder", isCaptain: false },
    { name: "Praveen", position: "defender", isCaptain: false },
    { name: "Anil", position: "goalkeeper", isCaptain: false },
    { name: "Vamsi", position: "defender", isCaptain: false },
  ],
};

const team = document.getElementById("team");
const year = document.getElementById("year");
const headCoach = document.getElementById("head-coach");

const playerCards = document.getElementById("player-cards");
const select = document.getElementById("players");

team.innerText = footballTeam["team"];
year.innerText = footballTeam["year"];
headCoach.innerText = footballTeam["headCoach"];

function displayPlayers(position) {
  playerCards.innerHTML = ``;

  footballTeam.players.forEach((player) => {
    if (position === "all" || player.position === position) {
      playerCards.innerHTML += `<div class="player-card">
      <h2>
     ${player.isCaptain ? "(Captain) " : ""} 
      ${player.name}</h2>
     <p>Position: ${player.position}</p>
      </div>`;
    }
  });
}

displayPlayers("all");

select.addEventListener("change", (event) => {
  const selected = event.target.value;
  console.log(selected);
  displayPlayers(selected);
});
