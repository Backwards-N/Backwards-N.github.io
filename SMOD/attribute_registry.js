// Definitions.
class smodAttribute {
  constructor(special_internal_name, special_internal_descriptor, internal_integer) {
    this.sin = special_internal_name;
    this.sid = special_internal_descriptor;
    this.bs = internal_integer;
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
var neutralArray = [];

//-------------------------------------------
// Example attribute, DO NOT ADD TO ARRAY.
//-------------------------------------------

class deaconAttribute extends smodAttribute {
  constructor(special_internal_name, special_internal_descriptor, internal_integer) {
    super(special_internal_name, special_internal_descriptor, internal_integer);
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

//-------------------------------------------
// Neutral Attributes.
//-------------------------------------------

class artifactAttribute extends smodAttribute {
  constructor(special_internal_name, special_internal_descriptor, internal_integer) {
    super(special_internal_name, special_internal_descriptor, internal_integer);
  }

  trigger() {
    super.trigger();
  }
  update() {
    super.update();
  }
  attack() {
    super.attack();
  }
  onDie() {
    super.onDie();
  }
  onHit() {
    super.onHit();
  }
}

var artifact = new artifactAttribute('Artifact', 'Artifacts', 0);
neutralArray.push(artifact);

class plushAttribute extends smodAttribute {
  constructor(special_internal_name, special_internal_descriptor, internal_integer) {
    super(special_internal_name, special_internal_descriptor, internal_integer);
  }

  trigger() {
    super.trigger();
  }
  update() {
    super.update();
  }
  attack() {
    super.attack();
  }
  onDie() {
    super.onDie();
  }
  onHit() {
    super.onHit();
  }
}

var plush = new plushAttribute('Plush', 'Plush', 1);
neutralArray.push(plush);

class flammableAttribute extends smodAttribute {
  constructor(special_internal_name, special_internal_descriptor, internal_integer) {
    super(special_internal_name, special_internal_descriptor, internal_integer);
  }

  trigger() {
    super.trigger();
  }
  update() {
    super.update();
  }
  attack() {
    super.attack();
  }
  onDie() {
    super.onDie();
  }
  onHit() {
    super.onHit();
  }
}

var inferno = new flammableAttribute('Inferno', 'Inferno', 2);
var tinder = new flammableAttribute('Tinder', 'Tinder', 3);
neutralArray.push(tinder, inferno);

class glassAttribute extends smodAttribute {
  constructor(special_internal_name, special_internal_descriptor, internal_integer) {
    super(special_internal_name, special_internal_descriptor, internal_integer);
  }

  trigger() {
    super.trigger();
  }
  update() {
    super.update();
  }
  attack() {
    super.attack();
  }
  onDie() {
    super.onDie();
  }
  onHit() {
    super.onHit();
  }
}

var glass = new glassAttribute('Glass', 'Glass', 4);
neutralArray.push(glass);

class humidAttribute extends smodAttribute {
  constructor(special_internal_name, special_internal_descriptor, internal_integer) {
    super(special_internal_name, special_internal_descriptor, internal_integer);
  }

  trigger() {
    super.trigger();
  }
  update() {
    super.update();
  }
  attack() {
    super.attack();
  }
  onDie() {
    super.onDie();
  }
  onHit() {
    super.onHit();
  }
}

var moist = new humidAttribute('Moist', 'Moistness', 5);
var dry = new humidAttribute('Dry', 'Dryness', 6);
neutralArray.push(moist, dry);

class fragileAttribute extends smodAttribute {
  constructor(special_internal_name, special_internal_descriptor, internal_integer) {
    super(special_internal_name, special_internal_descriptor, internal_integer);
  }

  trigger() {
    super.trigger();
  }
  update() {
    super.update();
  }
  attack() {
    super.attack();
  }
  onDie() {
    super.onDie();
  }
  onHit() {
    super.onHit();
  }
}

var brittle = new fragileAttribute('Brittle', 'Brittleness', 7);
neutralArray.push(brittle);

class weatherAttribute extends smodAttribute {
  constructor(special_internal_name, special_internal_descriptor, internal_integer) {
    super(special_internal_name, special_internal_descriptor, internal_integer);
  }

  trigger() {
    super.trigger();
  }
  update() {
    super.update();
  }
  attack() {
    super.attack();
  }
  onDie() {
    super.onDie();
  }
  onHit() {
    super.onHit();
  }
}

var rain = new weatherAttribute('Rain', 'Rain', 8);
neutralArray.push(rain);

class animalAttribute extends smodAttribute {
  constructor(special_internal_name, special_internal_descriptor, internal_integer) {
    super(special_internal_name, special_internal_descriptor, internal_integer);
  }

  trigger() {
    super.trigger();
  }
  update() {
    super.update();
  }
  attack() {
    super.attack();
  }
  onDie() {
    super.onDie();
  }
  onHit() {
    super.onHit();
  }
}

var feral = new artifactAttribute('Feral', 'Ferality', 9);
neutralArray.push(feral);

class magicAttribute extends smodAttribute {
  constructor(special_internal_name, special_internal_descriptor, internal_integer) {
    super(special_internal_name, special_internal_descriptor, internal_integer);
  }

  trigger() {
    super.trigger();
  }
  update() {
    super.update();
  }
  attack() {
    super.attack();
  }
  onDie() {
    super.onDie();
  }
  onHit() {
    super.onHit();
  }
}

var magic = new magicAttribute('Magic', 'Magic', 10);
neutralArray.push(magic);

class geoAttribute extends smodAttribute {
  constructor(special_internal_name, special_internal_descriptor, internal_integer) {
    super(special_internal_name, special_internal_descriptor, internal_integer);
  }

  trigger() {
    super.trigger();
  }
  update() {
    super.update();
  }
  attack() {
    super.attack();
  }
  onDie() {
    super.onDie();
  }
  onHit() {
    super.onHit();
  }
}

var quartz = new geoAttribute('Quartz', 'Quartz', 11);
neutralArray.push(quartz);

class buildingAttribute extends smodAttribute {
  constructor(special_internal_name, special_internal_descriptor, internal_integer) {
    super(special_internal_name, special_internal_descriptor, internal_integer);
  }

  trigger() {
    super.trigger();
  }
  update() {
    super.update();
  }
  attack() {
    super.attack();
  }
  onDie() {
    super.onDie();
  }
  onHit() {
    super.onHit();
  }
}

var house = new buildingAttribute('House', 'Houses', 12);
neutralArray.push(house);

class landAttribute extends smodAttribute {
  constructor(special_internal_name, special_internal_descriptor, internal_integer) {
    super(special_internal_name, special_internal_descriptor, internal_integer);
  }

  trigger() {
    super.trigger();
  }
  update() {
    super.update();
  }
  attack() {
    super.attack();
  }
  onDie() {
    super.onDie();
  }
  onHit() {
    super.onHit();
  }
}

var ocean = new landAttribute('Ocean', 'Oceans', 13);
neutralArray.push(ocean);

//-------------------------------------------
// Time Attributes.
//-------------------------------------------

class musicAttribute extends smodAttribute {
  constructor(special_internal_name, special_internal_descriptor, internal_integer) {
    super(special_internal_name, special_internal_descriptor, internal_integer);
  }

  trigger() {
    super.trigger();
  }
  update() {
    super.update();
  }
  attack() {
    super.attack();
  }
  onDie() {
    super.onDie();
  }
  onHit() {
    super.onHit();
  }
}

var musicBox = new musicAttribute('Music Box', 'Music Boxes', 14);
timeArray.push(musicBox);

//-------------------------------------------
// Space Attributes.
//-------------------------------------------


//-------------------------------------------
// Light Attributes.
//-------------------------------------------

class dramaticAttribute extends smodAttribute {
  constructor(special_internal_name, special_internal_descriptor, internal_integer) {
    super(special_internal_name, special_internal_descriptor, internal_integer);
  }

  trigger() {
    window.alert('The enemy is making a scene!');
    super.trigger();
  }
  update() {
    super.update();
  }
  attack() {
    super.attack();
  }
  onDie() {
    super.onDie();
  }
  onHit() {
    super.onHit();
  }
}

var dramatic = new dramaticAttribute('Dramatic', 'Drama', 15);
lightArray.push(dramatic);

class diceAttribute extends smodAttribute {
  constructor(special_internal_name, special_internal_descriptor, internal_integer) {
    super(special_internal_name, special_internal_descriptor, internal_integer);
  }

  trigger() {
    super.trigger();
  }
  update() {
    super.update();
  }
  attack() {
    super.attack();
  }
  onDie() {
    super.onDie();
  }
  onHit() {
    super.onHit();
  }
}

var eightBall = new diceAttribute('8-Ball', 'Eight-balls', 16);
lightArray.push(eightBall);

//-------------------------------------------
// Void Attributes.
//-------------------------------------------


//-------------------------------------------
// Mind Attributes.
//-------------------------------------------


//-------------------------------------------
// Heart Attributes.
//-------------------------------------------

class charmAttribute extends smodAttribute {
  constructor(special_internal_name, special_internal_descriptor, internal_integer) {
    super(special_internal_name, special_internal_descriptor, internal_integer);
  }

  trigger() {
    super.trigger();
  }
  update() {
    super.update();
  }
  attack() {
    super.attack();
  }
  onDie() {
    super.onDie();
  }
  onHit() {
    super.onHit();
  }
}

var flushed = new charmAttribute('Flushed', 'Flush', 17);
heartArray.push(flushed);

class sodaAttribute extends smodAttribute {
  constructor(special_internal_name, special_internal_descriptor, internal_integer) {
    super(special_internal_name, special_internal_descriptor, internal_integer);
  }

  trigger() {
    super.trigger();
  }
  update() {
    super.update();
  }
  attack() {
    super.attack();
  }
  onDie() {
    super.onDie();
  }
  onHit() {
    super.onHit();
  }
}

var soda = new sodaAttribute('Soda', 'Soda', 18);
heartArray.push(soda);

//-------------------------------------------
// Rage Attributes.
//-------------------------------------------

class angerAttribute extends smodAttribute {
  constructor(special_internal_name, special_internal_descriptor, internal_integer) {
    super(special_internal_name, special_internal_descriptor, internal_integer);
  }

  trigger() {
    super.trigger();
  }
  update() {
    super.update();
  }
  attack() {
    super.attack();
  }
  onDie() {
    super.onDie();
  }
  onHit() {
    super.onHit();
  }
}

var anger = new angerAttribute('Anger', 'Anger', 19);
rageArray.push(anger);

//-------------------------------------------
// Hope Attributes.
//-------------------------------------------


//-------------------------------------------
// Doom Attributes.
//-------------------------------------------


//-------------------------------------------
// Life Attributes.
//-------------------------------------------

class woodAttribute extends smodAttribute {
  constructor(special_internal_name, special_internal_descriptor, internal_integer) {
    super(special_internal_name, special_internal_descriptor, internal_integer);
  }

  trigger() {
    super.trigger();
  }
  update() {
    super.update();
  }
  attack() {
    super.attack();
  }
  onDie() {
    super.onDie();
  }
  onHit() {
    super.onHit();
  }
}

var wood = new woodAttribute('Wooden', 'Wood', 20);
lifeArray.push(wood);

//-------------------------------------------
// Blood Attributes.
//-------------------------------------------

class magnetAttribute extends smodAttribute {
  constructor(special_internal_name, special_internal_descriptor, internal_integer) {
    super(special_internal_name, special_internal_descriptor, internal_integer);
  }

  trigger() {
    super.trigger();
  }
  update() {
    super.update();
  }
  attack() {
    super.attack();
  }
  onDie() {
    super.onDie();
  }
  onHit() {
    super.onHit();
  }
}

var magnetOne = new magnetAttribute('Magnet I', 'Lodestones', 21);
var magnetTwo = new magnetAttribute('Magnet II', 'Lodestones', 22);
var magnetThree = new magnetAttribute('Magnet III', 'Lodestones', 23);
var magnetFour = new magnetAttribute('Magnet IV', 'Magnetism', 24);
var magnetFive = new magnetAttribute('Magnet V', 'Magnetism', 25);
var magnetSix = new magnetAttribute('Magnet VI', 'Magnetism', 26);
var magnetSeven = new magnetAttribute('Magnet VII', 'Magnetars', 27);
bloodArray.push(magnetOne, magnetTwo, magnetThree, magnetFour, magnetFive, magnetSix, magnetSeven);

//-------------------------------------------
// Breath Attributes.
//-------------------------------------------


//-------------------------------------------
// Final array, do not change.
//-------------------------------------------

function getArrayByID(id) {
    initArray = (({
        0: neutralArray,
        1: timeArray,
        2: spaceArray,
        3: voidArray,
        4: lightArray,
        5: mindArray,
        6: heartArray,
        7: rageArray,
        8: hopeArray,
        9: doomArray,
        10: lifeArray,
        11: bloodArray,
        12: breathArray,
    })[id]||neutralArray);

    return initArray;
}

attributeArray = attributeArray.concat(neutralArray, timeArray, spaceArray, lightArray, voidArray, mindArray, heartArray, rageArray, hopeArray, doomArray, lifeArray, bloodArray, breathArray);
