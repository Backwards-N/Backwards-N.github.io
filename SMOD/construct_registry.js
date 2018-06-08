// Definitions.

function smodConstruct(pow, spd, stlth, hlth, trg, siz, tier, special_internal_name) {
    this.power = pow;
    this.speed = spd;
    this.stealth = stlth;
    this.health = hlth;
    this.trigger = trg;
    this.size = siz;
    this.encounterTier = tier;
    this.sin = special_internal_name;
}

function gristType(pow, spd, stlth, hlth, trg, tier, scl, special_internal_name) {
    this.power = pow;
    this.speed = spd;
    this.stealth = stlth;
    this.health = hlth;
    this.trigger = trg;
    this.gristTier = tier;
    this.gristScale = scl;
    this.sin = special_internal_name;
}

// Strife functions.

function getUnderlingsByTier(tier) {
    var initLing = (({
        0: tZero,
        1: tOne,
        2: tTwo,
        5: tFive,
        7: tSeven,
        8: tEight,
        9: tNine,
    })[tier]||tNine);
    
    return initLing; 
}

function getGristByTier(tier) {
    var initGrist = (({
        1: gOne,
    })[tier]||gOne);
    
    return initGrist; 
}

function createUnderling(construct, grist_type, attributes) {
    this.name = grist_type.sin + ' ' + construct.sin;
    this.power = construct.power * grist_type.power;
    this.speed = construct.speed * grist_type.speed;
    this.stealth = construct.stealth * grist_type.stealth;
    this.health = construct.health * grist_type.health;
    this.trigger = construct.trigger * grist_type.trigger;
    this.size = construct.size; 
}

function createUnderlingAtTiers(utier, gtier, attributes) {
    var localUTier = getUnderlingsByTier(utier);
    var localConstruct = localUTier[Math.floor(Math.random() * localUTier.length)];
    
    var localGTier = getGristByTier(gtier);
    var localGrist = localGTier[Math.floor(Math.random() * localGTier.length)];
  
    var underling = new createUnderling(localConstruct, localGrist, attributes);
    console.log(underling);
    
    return underling;
}

// grist types.

var amber = new gristType(1, 1, 1, 1, 1, 'one', 1, 'Amber');
var chalk = new gristType(1, 1, 1, 1, 1, 'one', 2, 'Chalk');
var shale = new gristType(1, 1, 1, 1, 1, 'one', 1, 'Shale');

var frosting = new gristType(1, 1, 1, 1, 1, 'one', 5, 'Frosting');
var rockCandy = new gristType(1.1, 1.2, 1.3, 1.4, 1.5, 'Two', 5, 'rock candy');

var iodine = new gristType(1, 1, 1, 1, 1, 'one', 2, 'Iodine');
var crystal = new gristType(1, 1, 1, 1, 1, 'one', 1, 'Crystal');
var wood  = new gristType(1, 1, 1, 1, 1, 'one', 3, 'Wood');

var gOne = [amber, chalk, shale, frosting, iodine, crystal, wood];

// underlings.

var imp = new smodConstruct(1, 1, 0, 20, 0.1, 1, 'zero', 'Imp');
var tZero = [imp];

var ogre = new smodConstruct(10, 3, 0, 100, 0.04, 10, 'one', 'Ogre');
var basilisk = new smodConstruct(5, 10, 10, 70, 0.1, 7, 'one', 'Basilisk');
var lich = new smodConstruct(2, 5, 25, 30, 0.5, 1.5, 'one', 'Lich');
var tOne = [ogre, basilisk, lich];

var brute = new smodConstruct(30, 30, 15, 300, 0.1, 25, 'two', 'Brute');
var uniorc = new smodConstruct(20, 5, 0, 150, 0.5, 15, 'two', 'Uniorc');
var giclops = new smodConstruct(17, 3, 3, 500, 0.01, 15, 'two', 'Giclops');
var tTwo = [brute, uniorc, giclops]

// TODO: Find tier three underlings.

// TODO: Find tier four underlings.

var titachnid = new smodConstruct(150, 50, 15, 2500, 0.3, 45, 'five', 'Titachnid');
var tFive = [titachnid];

// TODO: Find tier six underlings.

var acheron = new smodConstruct(1000, 50, 0, 5750, 0.1, 25, 'seven', 'Acheron');
var drake = new smodConstruct(500, 100, 0, 2500, 0.75, 150, 'seven', 'Drake');
var tSeven = [acheron, drake];

var kraken = new smodConstruct(900, 100, 5, 6000, 0.1, 75, 'eight', 'Kraken');
var tEight = [kraken];

var lichQueen = new smodConstruct(250, 500, 5, 10000, 0.9, 75, 'nine', 'Lich Queen');
var tNine = [lichQueen];

// TODO: Find tier ten underlings.

// TODO: Find tier BREAK underlings.

// planets.

var homeworld  = new smodConstruct(0, 0, 0, 100000000000000000, 0, 600000000, 'planet', 'Homeworld');
var land = new smodConstruct(0, 0, 0, 10000000, 0, 10000, 'planet', 'Land');
var meteor = new smodConstruct(0, 0, 0, 100000, 0, 1500, 'planet', 'Meteor');
var moon = new smodConstruct(0, 0, 0, 1000000, 0, 1750, 'planet', 'Dream Moon');
var miniMoon = new smodConstruct(0, 0, 0, 100000, 0, 1000, 'planet', "Dream Moon's Moon");
var skaia = new smodConstruct(0, 0, 0, 100000000, 0, 17500, 'planet', 'Skaia');

// denizens.
