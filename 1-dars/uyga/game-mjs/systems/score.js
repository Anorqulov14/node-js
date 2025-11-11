export function addScore(player, points) {
  player.score += points;
  console.log(`${player.name} earned ${points} points! Total: ${player.score}`);
}

export function resetScore(player) {
  player.score = 0;
}
