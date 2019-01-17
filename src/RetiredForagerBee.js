class RetiredForagerBee extends ForagerBee {
  constructor() {
    super()
    this.age = 40;
    this.job = 'gamble';
    this.canFly = false;
    this.color = 'grey';

  }

  forage() {
    return "I am too old, let me play cards instead"
  }
  gamble() {
    return super.forage()
  }
  // TODO..
};

// var RetiredForagerBee = function() {
//   ForagerBee.call(this);
//   this.age = 40;
//   this.job = 'gamble';
//   this.canFly = false;
//   this.color = 'grey';

// };

// RetiredForagerBee.prototype = Object.create(ForagerBee.prototype);
// RetiredForagerBee.prototype.constructor = RetiredForagerBee;

// RetiredForagerBee.prototype.forage = function() {
//   return 'I am too old, let me play cards instead'
// };

// RetiredForagerBee.prototype.gamble = function() {
//   var treasure = {};
//   this.treasureChest.push(treasure);
// };
