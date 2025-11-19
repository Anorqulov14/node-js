export function addItem(player, item) {
  player.inventory.push(item);
  console.log(`${player.name} picked up ${item.name}.`);
}

export function removeItem(player, itemName) {
  player.inventory = player.inventory.filter(i => i.name !== itemName);
  console.log(`${player.name} removed ${itemName} from inventory.`);
}

export function listInventory(player) {
  console.log(`${player.name}'s Inventory:`);
  if (player.inventory.length === 0) console.log("Empty");
  else player.inventory.forEach(i => console.log(`- ${i.name} (value: ${i.value})`));
}
