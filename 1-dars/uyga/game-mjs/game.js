import { Player } from "./entities/player.mjs";
import { Enemy } from "./entities/enemy.mjs";
import { Item } from "./entities/item.mjs";
import * as Combat from "./systems/combat.mjs";
import * as Inventory from "./systems/inventory.mjs";
import * as Score from "./systems/score.mjs";

const player = new Player("Hero");
const enemy = new Enemy("Goblin");
const sword = new Item("Sword", 25);

Inventory.addItem(player, sword);
Inventory.listInventory(player);

Combat.attack(player, enemy);
if (!enemy.isAlive()) {
  Score.addScore(player, 100);
}

Combat.heal(player, 15);
console.log(`${player.name}'s final score: ${player.score}`);
