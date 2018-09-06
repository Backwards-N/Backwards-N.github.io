// Definitions.
class smodAttribute {
  constructor(special_internal_name, special_internal_descriptor) {
    this.sin = special_internal_name;
    this.sid = special_internal_descriptor;
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
  constructor(special_internal_name, special_internal_descriptor) {
    super(special_internal_name, special_internal_descriptor);
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
  constructor(special_internal_name, special_internal_descriptor) {
    super(special_internal_name, special_internal_descriptor);
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

var artifact = new artifactAttribute('Artifact', 'Artifacts');
neutralArray.push(artifact);

class plushAttribute extends smodAttribute {
  constructor(special_internal_name, special_internal_descriptor) {
    super(special_internal_name, special_internal_descriptor);
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

var plush = new plushAttribute('Plush', 'Plush');
neutralArray.push(plush);

class flammableAttribute extends smodAttribute {
  constructor(special_internal_name, special_internal_descriptor) {
    super(special_internal_name, special_internal_descriptor);
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

var inferno = new flammableAttribute('Inferno', 'Inferno');
var tinder = new flammableAttribute('Tinder', 'Tinder');
neutralArray.push(tinder, inferno);

class glassAttribute extends smodAttribute {
  constructor(special_internal_name, special_internal_descriptor) {
    super(special_internal_name, special_internal_descriptor);
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

var glass = new glassAttribute('Glass', 'Glass');
neutralArray.push(glass);

class humidAttribute extends smodAttribute {
  constructor(special_internal_name, special_internal_descriptor) {
    super(special_internal_name, special_internal_descriptor);
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

var moist = new humidAttribute('Moist', 'Moistness');
var dry = new humidAttribute('Dry', 'Dryness');
neutralArray.push(moist, dry);

class fragileAttribute extends smodAttribute {
  constructor(special_internal_name, special_internal_descriptor) {
    super(special_internal_name, special_internal_descriptor);
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

var brittle = new fragileAttribute('Brittle', 'Brittleness');
neutralArray.push(brittle);

class weatherAttribute extends smodAttribute {
  constructor(special_internal_name, special_internal_descriptor) {
    super(special_internal_name, special_internal_descriptor);
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

var rain = new weatherAttribute('Rain', 'Rain');
neutralArray.push(rain);

class animalAttribute extends smodAttribute {
  constructor(special_internal_name, special_internal_descriptor) {
    super(special_internal_name, special_internal_descriptor);
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

var feral = new artifactAttribute('Feral', 'Ferality');
neutralArray.push(feral);

class magicAttribute extends smodAttribute {
  constructor(special_internal_name, special_internal_descriptor) {
    super(special_internal_name, special_internal_descriptor);
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

var magic = new magicAttribute('Magic', 'Magic');
neutralArray.push(magic);

class geoAttribute extends smodAttribute {
  constructor(special_internal_name, special_internal_descriptor) {
    super(special_internal_name, special_internal_descriptor);
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

var quartz = new geoAttribute('Quartz', 'Quartz');
neutralArray.push(quartz);

class buildingAttribute extends smodAttribute {
  constructor(special_internal_name, special_internal_descriptor) {
    super(special_internal_name, special_internal_descriptor);
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

var house = new buildingAttribute('House', 'Houses');
neutralArray.push(house);

class landAttribute extends smodAttribute {
  constructor(special_internal_name, special_internal_descriptor) {
    super(special_internal_name, special_internal_descriptor);
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

var ocean = new landAttribute('Ocean', 'Oceans');
neutralArray.push(ocean);

//-------------------------------------------
// Time Attributes.
//-------------------------------------------

class musicAttribute extends smodAttribute {
  constructor(special_internal_name, special_internal_descriptor) {
    super(special_internal_name, special_internal_descriptor);
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

var musicBox = new musicAttribute('Music Box', 'Music Boxes');
timeArray.push(musicBox);

//-------------------------------------------
// Space Attributes.
//-------------------------------------------


//-------------------------------------------
// Light Attributes.
//-------------------------------------------

class dramaticAttribute extends smodAttribute {
  constructor(special_internal_name, special_internal_descriptor) {
    super(special_internal_name, special_internal_descriptor);
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

var dramatic = new dramaticAttribute('Dramatic', 'Drama');
lightArray.push(dramatic);

class diceAttribute extends smodAttribute {
  constructor(special_internal_name, special_internal_descriptor) {
    super(special_internal_name, special_internal_descriptor);
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

var eightBall = new diceAttribute('8-Ball', 'Eight-balls');
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
  constructor(special_internal_name, special_internal_descriptor) {
    super(special_internal_name, special_internal_descriptor);
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

var flushed = new charmAttribute('Flushed', 'Flush');
heartArray.push(flushed);

class sodaAttribute extends smodAttribute {
  constructor(special_internal_name, special_internal_descriptor) {
    super(special_internal_name, special_internal_descriptor);
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

var soda = new sodaAttribute('Soda', 'Soda');
heartArray.push(soda);

//-------------------------------------------
// Rage Attributes.
//-------------------------------------------

class angerAttribute extends smodAttribute {
  constructor(special_internal_name, special_internal_descriptor) {
    super(special_internal_name, special_internal_descriptor);
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

var anger = new angerAttribute('Anger', 'Anger');
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
  constructor(special_internal_name, special_internal_descriptor) {
    super(special_internal_name, special_internal_descriptor);
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

var wood = new woodAttribute('Wooden', 'Wood');
lifeArray.push(wood);

//-------------------------------------------
// Blood Attributes.
//-------------------------------------------

class magnetAttribute extends smodAttribute {
  constructor(special_internal_name, special_internal_descriptor) {
    super(special_internal_name, special_internal_descriptor);
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

var magnetOne = new magnetAttribute('Magnet I', 'Lodestones');
var magnetTwo = new magnetAttribute('Magnet II', 'Lodestones');
var magnetThree = new magnetAttribute('Magnet III', 'Lodestones');
var magnetFour = new magnetAttribute('Magnet IV', 'Magnetism');
var magnetFive = new magnetAttribute('Magnet V', 'Magnetism');
var magnetSix = new magnetAttribute('Magnet VI', 'Magnetism');
var magnetSeven = new magnetAttribute('Magnet VII', 'Magnetars');
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
