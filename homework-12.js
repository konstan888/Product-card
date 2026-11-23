class Soldier {
  constructor(name, rank) {
    this.name = name;
    this.rank = rank;
    this.hp = 100;
  }
  soldierInfo() {
    console.log(`I am ${this.rank} ${this.name}, health: ${this.hp}%`);
  }
}

class Driver extends Soldier {
  constructor(name, rank, armor) {
    super(name, rank);
    this.armor = armor;
  }
  driving() {
    this.soldierInfo();
    console.log(`I drive: ${this.armor}`);
  }
}

class Sniper extends Soldier {
  constructor(name, rank, weapon) {
    super(name, rank);
    this.weapon = weapon;
  }
  shooting() {
    this.soldierInfo();
    console.log(`I shoot a ${this.weapon}`);
  }
}

const petrushka = new Soldier("Petr", "private");
petrushka.soldierInfo();
const vanka = new Driver("Ivan", "junior sergeant", "Main Battle Tank");
vanka.driving();
const vasya = new Sniper("Vasiliy", "captain", "Dragunov sniper rifle");
vasya.shooting();