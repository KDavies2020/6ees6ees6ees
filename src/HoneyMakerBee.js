class HoneyMakerBee extends Bee {
  constructor() {
    super()
    this.age = 10;
    this.job = "make honey"
    this.honeyPot = 0;
  }

  makeHoney() {
    this.honeyPot++
  }

  giveHoney() {
    this.honeyPot--
  }
  // TODO..
};


// var HoneyMakerBee = function() {
//   Bee.call(this);
//   this.age = 10;
//   this.job = 'make honey';
//   this.honeyPot = 0;
// };

// HoneyMakerBee.prototype = Object.create(Bee.prototype);
// HoneyMakerBee.prototype.constructor = HoneyMakerBee;


// HoneyMakerBee.prototype.makeHoney = function() {
//   this.honeyPot++
// };

// HoneyMakerBee.prototype.giveHoney = function() {
//   this.honeyPot--
// };