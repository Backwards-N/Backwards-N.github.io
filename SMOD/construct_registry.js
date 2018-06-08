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

var amber = new gristType(1, 1, 1, 1, 1, 'one', 1, 'amber');
var chalk = new gristType(1, 1, 1, 1, 1, 'one', 2, 'chalk');
var shale = new gristType(1, 1, 1, 1, 1, 'one', 1, 'shale');

var frosting = new gristType(1, 1, 1, 1, 1, 'one', 5, 'frosting');
var rockCandy = new gristType(1.1, 1.2, 1.3, 1.4, 1.5, 'two', 5, 'rock candy');

var iodine = new gristType(1, 1, 1, 1, 1, 'one', 2, 'iodine');
var crystal = new gristType(1, 1, 1, 1, 1, 'one', 1, 'crystal');
var wood  = new gristType(1, 1, 1, 1, 1, 'one', 3, 'wood');

var gOne = [amber, chalk, shale, frosting, iodine, crystal, wood];

// underlings.

var imp = new smodConstruct(1, 1, 0, 20, 0.1, 1, 'zero', 'imp');
var tZero = [imp];

var ogre = new smodConstruct(10, 3, 0, 100, 0.04, 10, 'one', 'ogre');
var basilisk = new smodConstruct(5, 10, 10, 70, 0.1, 7, 'one', 'basilisk');
var lich = new smodConstruct(2, 5, 25, 30, 0.5, 1.5, 'one', 'lich');
var tOne = [ogre, basilisk, lich];

var brute = new smodConstruct(30, 30, 15, 300, 0.1, 25, 'two', 'brute');
var uniorc = new smodConstruct(20, 5, 0, 150, 0.5, 15, 'two', 'uniorc');
var giclops = new smodConstruct(17, 3, 3, 500, 0.01, 15, 'two', 'giclops');
var tTwo = [brute, uniorc, giclops]

// TODO: Find tier three underlings.

// TODO: Find tier four underlings.

var titachnid = new smodConstruct(150, 50, 15, 2500, 0.3, 45, 'five', 'titachnid');
var tFive = [titachnid];

// TODO: Find tier six underlings.

var acheron = new smodConstruct(1000, 50, 0, 5750, 0.1, 25, 'seven', 'acheron');
var drake = new smodConstruct(500, 100, 0, 2500, 0.75, 150, 'seven', 'drake');
var tSeven = [acheron, drake];

var kraken = new smodConstruct(900, 100, 5, 6000, 0.1, 75, 'eight', 'kraken');
var tEight = [kraken];

var lichQueen = new smodConstruct(250, 500, 5, 10000, 0.9, 75, 'nine', 'lich queen');
var tNine = [lichQueen];

// TODO: Find tier ten underlings.

// TODO: Find tier BREAK underlings.

// planets.

var homeworld  = new smodConstruct(0, 0, 0, 100000000000000000, 0, 600000000, 'planet', 'homeworld');
var land = new smodConstruct(0, 0, 0, 10000000, 0, 10000, 'planet', 'land');
var meteor = new smodConstruct(0, 0, 0, 100000, 0, 1500, 'planet', 'meteor');
var moon = new smodConstruct(0, 0, 0, 1000000, 0, 1750, 'planet', 'moon');
var miniMoon = new smodConstruct(0, 0, 0, 100000, 0, 1000, 'planet', 'moon');
var skaia = new smodConstruct(0, 0, 0, 100000000, 0, 17500, 'planet', 'skaia');

// denizens.
