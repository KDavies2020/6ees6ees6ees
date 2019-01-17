class ForagerBee extends Bee {
  constructor() {
    super()
    this.age = 10;
    this.canFly = true;
    this.treasureChest = [];
    this.job = "find pollen"
  }

  forage() {
    this.treasureChest.push("treasure")
  }
  // TODO..
};

// var ForagerBee = function() {
//   Bee.call(this);
//   this.age = 10;
//   this.job = 'find pollen';
//   this.canFly = true;
//   this.treasureChest = [];

// };

// ForagerBee.prototype = Object.create(Bee.prototype);
// ForagerBee.prototype.constructor = ForagerBee;

// ForagerBee.prototype.forage = function() {
//   var treasure = {};
//   this.treasureChest.push(treasure);
// };
