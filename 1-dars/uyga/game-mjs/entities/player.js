export class Player {
  constructor(name, health = 100, attack = 15) {
    this.name = name;
    this.health = health;
    this.attack = attack;
    this.inventory = [];
    this.score = 0;
  }

  isAlive() {
    return this.health > 0;
  }
}
