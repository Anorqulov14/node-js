import { randomInt } from "../utils/random.mjs";

export function attack(attacker, defender) {
  const damage = randomInt(5, attacker.attack);
  defender.health -= damage;
  console.log(`${attacker.name || attacker.type} hits ${defender.name || defender.type} for ${damage} damage!`);
  if (defender.health <= 0) {
    console.log(`${defender.name || defender.type} has been defeated!`);
  }
}

export function heal(player, amount = 20) {
  player.health += amount;
  console.log(`${player.name} healed by ${amount}. Health: ${player.health}`);
}
