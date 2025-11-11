export class Enemy {
  constructor(type, health = 50, attack = 10) {
    this.type = type;
    this.health = health;
    this.attack = attack;
  }

  isAlive() {
    return this.health > 0;
  }
}
