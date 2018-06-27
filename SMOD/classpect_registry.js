//TODO: add comments

class smodClass {
    constructor(grit, spd, stlth, will, gluk, bluk, vis, special_internal_name) {
        this.manGrit = grit;
        this.speed = spd;
        this.stealth = stlth;
        this.willPower = will;
        this.goodLuck = gluk;
        this.badLuck = bluk;
        this.gelViscosity = vis;
        this.sin = special_internal_name;
    }
}

class smodAspect {
    constructor(grit, spd, stlth, will, gluk, bluk, vis, special_internal_name) {
        this.manGrit = grit;
        this.speed = spd;
        this.stealth = stlth;
        this.willPower = will;
        this.goodLuck = gluk;
        this.badLuck = bluk;
        this.gelViscosity = vis;
        this.sin = special_internal_name;
    }
}

function calculateStatAtLevel(level, c, a, m) {
    stat = c+a+m;
    
    if (stat > 0) {
        result = Math.floor((1/3*stat)*level+stat);
    } else if (stat == -1) {
        result = Math.floor(1/3*level-1);
    } else if (stat === 0) {
        result = Math.floor(1/6*level+a);
    } else if (stat < -1) {
        result = Math.floor((1/Math.abs(stat))*level+stat);
    } else {
        console.error("How did you even do this?");
        return 0;
    }
    
    return result;
}

function getClassByID(id) {
    initClass = (({
        1: rouge,
        2: thief,
        3: maid,
        4: heir,
        5: page,
        6: knight,
        7: seer,
        8: sylph,
        9: mage,
        10: witch,
        11: bard,
        12: prince,
        13: lord,
        14: muse,
    })[id]||rouge);
    
    return initClass;
}

function getAspectByID(id) {
    initClass = (({
        1: time,
        2: space,
        3: light,
        4: smodVoid,
        5: mind,
        6: heart,
        7: rage,
        8: hope,
        9: doom,
        10: life,
        11: blood,
        12: breath,
    })[id]||smodVoid);
    
    return initClass;
}

var rouge = new smodClass(1,0,6,3,-5,0,10,'Rouge');
var thief = new smodClass(1,3,6,-4,0,1,10,'Thief');
var maid = new smodClass(-1,6,-1,4,-1,2,8,'Maid');
var heir = new smodClass(0,6,-1,-4,4,0,9,'Heir');
var page = new smodClass(6,0,-5,1,3,0,12,'Page');
var knight = new smodClass(6,0,-3,4,-1,1,12,'Knight');
var seer = new smodClass(4,-2,-2,3,-1,-3,8,'Seer');
var sylph = new smodClass(2,3,1,4,-3,2,11,'Sylph');
var mage = new smodClass(-2,-2,2,-1,6,-2,8,'Mage');
var witch = new smodClass(3,-2,-3,0,6,-1,11,'Witch');
var bard = new smodClass(1,1,1,1,1,0,10,'Bard');
var prince = new smodClass(3,0,2,0,0,0,11,'Prince');
var lord = new smodClass(7,7,-2,7,-7,7,7,'Lord');
var muse = new smodClass(-7,-7,7,-2,7,-7,13,'Muse');

var time = new smodAspect(1,6,-2,3,-1,2,13,'Time');
var space = new smodAspect(3,-6,1,2,3,-2,14,'Space');
var light = new smodAspect(0,1,-6,0,6,-4,11,'Light');
var smodVoid = new smodAspect(1,0,6,4,-3,3,7,'Void');
var mind = new smodAspect(0,-2,1,6,0,0,9,'Mind');
var heart = new smodAspect(4,5,0,-6,3,1,16,'Heart');
var rage = new smodAspect(6,2,0,3,-4,2,17,'Rage');
var hope = new smodAspect(3,-3,-4,3,0,-6,15,'Hope');
var doom = new smodAspect(3,3,3,0,2,6,7,'Doom');
var life = new smodAspect(-6,4,1,2,4,0,20,'Life');
var blood = new smodAspect(4,2,2,0,-6,-3,12,'Blood');
var breath = new smodAspect(0,5,0,-4,2,-2,9,'Breath');

