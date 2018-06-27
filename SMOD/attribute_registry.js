// Definitions.
class smodAttribute {
  constructor(special_internal_name) {
    this.sin = special_internal_name;
  }
  
  trigger() {console.log(this.sin + ' has been triggered!');}
  update() {}
  attack() {console.log(this.sin + ' has been triggered!');}
  onDie() {console.log(this.sin + ' has been triggered!');}
  onHit() {console.log(this.sin + ' has been triggered!');}
}

var attributeArray = [];
var deaconArray = [];
var timeArray = [];
var spaceArray = [];
var lightArray = [];
var voidArray = [];
var mindArray = [];
var heartArray = [];
var rageArray = [];
var hopeArray = [];
var doomArray = [];
var lifeArray = [];
var bloodArray = [];
var breathArray = [];

// Example attribute, DO NOT ADD TO ARRAY.
class deaconAttribute extends smodAttribute {
  constructor(special_internal_name) {
    super(special_internal_name);
  }
  
  trigger() {
    console.log('DQ0N has arrived.');
    super.trigger();
  }
  update() {
    super.update();
  }
  attack() {
    console.log('DQ0N has arrived.');
    super.attack();
  }
  onDie() {
    console.log('DQ0N has arrived.');
    super.onDie();
  }
  onHit() {
    console.log('DQ0N has arrived.');
    super.onHit();
  }
}

var deacon = new deaconAttribute('Deacon');
deaconArray.push(deacon);

// Neutral Attributes.


// Time Attributes.


// Space Attributes.


// Light Attributes.


// Void Attributes.


// Mind Attributes.


// Heart Attributes.


// Rage Attributes.


// Hope Attributes.


// Doom Attributes.


// Life Attributes.


// Blood Attributes.


// Breath Attributes.



// Final array, do not change.

attributeArray.concat(timeArray, spaceArray, lightArray, voidArray, midArray, heartArray, rageArray, hopeArray, doomArray, lifeArray, bloodArray, breathArray);
