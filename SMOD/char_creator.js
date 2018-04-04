var debugText = document.querySelector('.debugText');
var creatorMenu = document.querySelector('.creatorMenu');
var playerName = document.querySelector('#playerName');

var uid = user.uid;
var db = firebase.firestore();
var version = "v1.1";
var debug = false;

updateUpdate();

if (debug === true) {
    debugText.textContent = "This is an experimental version of this page. Do not expect this page to be compatible with the rest of the project. Please report all bugs to aftermathCosmos on tumblr.";
    debugText.style.backgroundColor = 'Firebrick';
} else {
    debugText.textContent = version;
}

$("#nameSubmit").on('click', nameUpdate);
$(".playerGender").on('click', genderUpdate);
$("#classDropdown").on('change', updateUpdate);
$("#aspectDropdown").on('change', updateUpdate);
$("#manGrit").on('change', updateUpdate);
$("#speed").on('change', updateUpdate);
$("#stealth").on('change', updateUpdate);
$("#badLuck").on('change', updateUpdate);
$("#goodLuck").on('change', updateUpdate);
$("#gelViscosity").on('change', updateUpdate);
$("#willPower").on('change', updateUpdate);
$("#addPlayer").on('click', logPlayer)

function updateUpdate() {
    var megaBox = document.querySelector('#rPoints');
    var subButt = document.querySelector('#addPlayer');
    
    aspectUpdate();
    classUpdate();
    var maxINum = gritUpdate() + spdUpdate() + stlthUpdate() - badUpdate() + goodUpdate() + willUpdate();
    gelUpdate();
    
    var remPoi = 5 - maxINum;
    megaBox.textContent = "Points remaining:" + remPoi;
    
    if(remPoi >= 0){
        subButt.disabled=false;
    } else {
        subButt.disabled=true;
    }
    
    return maxINum;
}

function logPlayer() {
    logName = nameUpdate();
    logGender = genderUpdate();
    logClass = classUpdate();
    logAspect = aspectUpdate();
    logGrit = gritUpdate();
    logSpd = spdUpdate();
    logStlth = stlthUpdate();
    logBad = badUpdate();
    logGood = goodUpdate();
    logWill = willUpdate();
    
    window.alert('Player added.');
    
    db.collection("players").add({
        name: logName, 
        gender: logGender,
        aspect: logAspect,
        grit: logGrit,
        spd: logSpd,
        stlth: logStlth,
        bad: logBad,
        good: logGood,
        will: logWill,
        owner: userIdentifier
    })
    .then(function(docRef) {
    console.log("Document written with ID: ", docRef.id);
    })
    .catch(function(error) {
    console.error("Error adding document: ", error);
    });
}

function nameUpdate() {
    var internalName = playerName.value;
    console.log('This is the story of ' + internalName);
    
    return internalName;
}

function genderUpdate() {
    var internalGender = 0;
    
    if (document.getElementById("femaleGender").checked){
        internalGender = 0;
    } else if (document.getElementById("maleGender").checked) {
        internalGender = 1;
    } else {
        console.error("Oops, looks like you broke the gender buttons.");
        internalGender = 0;
    }
    //console.log(internalGender);
    
    return internalGender;
}

function classUpdate() {
    var cDrop = document.querySelector('#classDropdown');
    var cBox = document.querySelector('#classBox');
    
    if (cDrop.value == 1) {
        cBox.textContent = "Rouges steal their aspect and redistrbute it throughout their entire team. They serve to even the field, ensuring that every person on thier team has equal advantage. Rouges gain a natural bonus to their stealth.";   
    } else if (cDrop.value == 2) {
        cBox.textContent = "Thieves steal their aspect and keep it all to themselves. They can become very powerful players able to outcompete other players and their enemies in one particular category while maintaining normal usage of other categories. Thieves gain a natural bonus to their stealth.";
    } else if (cDrop.value == 3) {
        cBox.textContent = "Maids are capable of \"cleaning\" or \"fixing\" their aspect. They are frequently capable of completely negating the abilities of others. They also are, in essence, made of their aspect and therefore can command a great deal of control over it. Maids get a natural boost to speed.";
    } else if (cDrop.value == 4) {
        cBox.textContent = "Heirs posess a great deal of rule over their aspect. They are capable of many feats, both defensive and offensive, but lack the ability to \"bend the rules\" of their aspect in the manner that many other classes do. They also can, in essence, become their aspect and therefore must take great care to maintain it. Heirs get a natural boost to speed.";
    } else if (cDrop.value == 5) {
        cBox.textContent = "Pages are capable of using offense as the best defense for their team. Pages deliver their aspect to their team, meaning that they need little time to recharge. They gain power slowly in early and late stages but have a massive boost in the middle of their advancement, making them a difficult class to handle. They get a natural boost to offensive power.";
    } else if (cDrop.value == 6) {
        cBox.textContent = "Knights are capable of easily weaponizing their aspect, allowing even a defensive or strategic aspect to become a directly offensive one. They always have their aspect ready, meaning that they can do a lot before they must recharge. They have a sacred duty to help the session's space player. Knights gain power smoothly as they advance, making them an easy class to handle. They get a natural boost to offensive power.";
    } else if (cDrop.value == 7) {
        cBox.textContent = "Seers can make predictions concerning their aspect and act accordingly, as well as being able to see the truth and invert their aspect. To reach their full potential they must learn to balance the two sides of their aspect. If they can manage this a Seer can become one of the most versatile classes, able to think quickly and utilize two opposite but same powers. Seers do not need to restore their aspect.";
    } else if (cDrop.value == 8) {
        cBox.textContent = "Sylphs can seek out their aspect and see it around them as well as being capable of funneling large amounts of their aspect into someone. The offensive capability of this class is heavily dependent on their aspect as they can only give their aspect, not take it. The Sylph is the most highly specialized of all classes and to be used properly a Sylph must accept their specialization. Sylphs do not need to restore their aspect.";
    } else if (cDrop.value == 9) {
        cBox.textContent = "Mages have no offensive capability, instead acting as a support class. They are capable of performing powerful feats that boost other player's abilities but are weak on their own. As an additional effect Mages are esentially immune to their own aspect, incapable of being boosted or harmed by it. Mages get a natural boost to luck.";
    } else if (cDrop.value == 10) {
        cBox.textContent = "Witches have little offensive capability, instead acting as a support class. They are capable of performing powerful feats that minimize the enemies' abilities but are weak on their own. As an additional effect they have a tendency to gain abilites outside of their own aspect, giving them a certain unpredictability. Witches get a natural boost to luck.";
    } else if (cDrop.value == 11) {
        cBox.textContent = "Bards have the most variety of ability with their aspect but the least control over how their aspect effects them. Their ability works through inviting destruction around them. This allows them to closely mimic the effects of other classes and at times, other aspects. Bards gain no boost.";
    } else if (cDrop.value == 12) {
        cBox.textContent = "Princes always completely invert their aspect, giving them abilites that match those of no other class or aspect. They gain more of their inverted aspect by destroying their original aspect. Ideally this allows them to rise in power as they attack. Princes are negatively affected in the stats that their aspect boosts.";
    } else if (cDrop.value == 13) {
        cBox.textContent = "Gents ";
    } else if (cDrop.value == 14) {
        cBox.textContent = "Sleuths ";
    } else {
        cBox.textContent = "Oops, you broke the class box.";
        console.error("Class not found.");
    }
    
    return parseInt(cDrop.value);
}

function aspectUpdate() {
    var aDrop = document.querySelector('#aspectDropdown');
    var aBox = document.querySelector('#aspectBox');
    
    if (aDrop.value == 1) {
        aBox.textContent = "Time is one of the two aspects present in any successful session, the other being space. Time is associated with absolute destruction and perfect loops of events. Time players tend to have an easy time getting around, this is balanced out by having difficult to navigate lands. In a pre-scratch session the time player posesses a scratch construct. This is a massive instrument that, in combination with the aspect of space, is capable of resetting an entire session with different starting conditions.";
    } else if (aDrop.value == 2) {
        aBox.textContent = "Space is one of the two aspects present in any succesful session, the other being time. Space is associated with creation and the basic physical properties of objects. Space players tend to not get around much in the early game but gain massive boosts to speed in the late game. Space players are known for waking up on their moon long before their fellow players. In addition to this they also posess access to the powerful Quills of Echidna, the only thing capable of activating the time player's scratch construct. Space players are also in charge of completing a major part of The Ultimate Reward.";
    } else if (aDrop.value == 3) {
        aBox.textContent = "Void is associated with nothingness and the absence of presence. Void players are capable of doing things beneath others' notice, including the notice of fate itself. This allows them a higher amount of free will than others, enabling them to completely ignore fate at times. Void players have no associated role, instead they are left to do what they think is best.";
    } else if (aDrop.value == 4) {
        aBox.textContent = "Light is associated with luck and the overabundance of presence. Light players tend to have all the luck. ALL OF IT. Light players tend to be heavily reliant on things naturally working out for them and therefore have low resistance to fate. Light players tend to be flashy and overdramatic. This causes them to draw attention away from their allies, even when they are a giving class.";
    } else if (aDrop.value == 5) {
        aBox.textContent = "Mind is associated with decision making and practicality. Mind players tend to not form strong relationships with other players. Mind players also tend to sync all versions of themselves together, forming a strong singular identity. They ignore luck entirely, whether they want to or not.";
    } else if (aDrop.value == 6) {
        aBox.textContent = "Heart is associated with impulses and passion. Heart players tend to form really strong relationships with other players, either fully embracing them or fully rejecting them. Heart players also tend to divide each version of themself into a sperate and distinct identity. They tend to be spacey and trust fate to take care of them.";
    } else if (aDrop.value == 7) {
        aBox.textContent = "Rage is associated with extreme desires and the will to fulfil them. Rage players will go to great lengths to get what they want, even to the point of forcing themselves into power high above their level.";
    } else if (aDrop.value == 8) {
        aBox.textContent = "Hope is associated with extreme needs and the will to aquire them. Hope players will go to great lengths to get what they need, even to the point of forcing themselves into power high above their level.";
    } else if (aDrop.value == 9) {
        aBox.textContent = "Doom is associated with fate and prophecies. Doom players have the duty to ensure that the session does not end up doomed. Doom player posess powerful abilities that are unlocked through experiencing doom firsthand.";
    } else if (aDrop.value == 10) {
        aBox.textContent = "Life is associated with restoration. Life players have the duty of restoring and avoiding damage to the session's overall health. Life players have extemely flexible abilities.";
    } else if (aDrop.value == 11) {
        aBox.textContent = "Blood is associated with teamwork and stability. Blood players are naturally competent at helping others through tough times. They tend to be highly task oriented.";
    } else if (aDrop.value == 12) {
        aBox.textContent = "Breath is associated with individuality and change. Breath players naturally posess the ability to help themselves through tough times. They tend to easily get distracted from the task at hand.";
    } else if (aDrop.value == 13) {
        aBox.textContent = "Scope is associated with knowledge and broad generalization. Scope players are good at leading large groups of people and tend to be quite organized. They also are naturally good at many things, but improve quite slowly.";
    } else if (aDrop.value == 14) {
        aBox.textContent = "Spheres is associated with skill and very fine specialization. Spheres players find it hard to resist focusing on something and not resting until it is acheived, as a result they tend to be quite unorganized. They also tend to have one aspect of themselves that they improve much faster than others.";
    } else if (aDrop.value == 15) {
        aBox.textContent = "Rule is associated with clarity and extreme absolutes. Rule players are stubborn and adhere strongly to their personal sense of moral justice. They posess extremely good abilities in some areas while performing extremely poorly in others.";
    } else if (aDrop.value == 16) {
        aBox.textContent = "Strife is associated with chaos and extreme changes. It is easy to change a strife player's opinion on a subject and they have little to no sense of morals. Their abilities change quickly, for better or worse.";
    } else {
        aBox.textContent = "Oops, you broke the aspect box.";
        console.error("Aspect not found.");
    }
    
    return parseInt(aDrop.value);
}    

function gritUpdate() {
    var iClass = classUpdate();
    var iAspect = aspectUpdate();
    var cStat = 0;
    var aStat = 0;
    var iNum = parseInt(document.querySelector('#manGrit').value);
    var iBox = document.querySelector('#gritSpan');
    
    if (iClass == 1) {
        cStat = rouge.manGrit;
    } else if (iClass == 2) {
        cStat = thief.manGrit;
    } else if (iClass == 3) {
        cStat = maid.manGrit;
    } else if (iClass == 4) {
        cStat = heir.manGrit;
    } else if (iClass == 5) {
        cStat = page.manGrit;
    } else if (iClass == 6) {
        cStat = knight.manGrit;
    } else if (iClass == 7) {
        cStat = seer.manGrit;
    } else if (iClass == 8) {
        cStat = sylph.manGrit;
    } else if (iClass == 9) {
        cStat = maid.manGrit;
    } else if (iClass == 10) {
        cStat = witch.manGrit;
    } else if (iClass == 11) {
        cStat = bard.manGrit;
    } else if (iClass == 12) {
        cStat = prince.manGrit;
    } else if (iClass == 13) {
        cStat = priest.manGrit;
    } else if (iClass == 14) {
        cStat = fool.manGrit;
    } else if (iClass == 15) {
        cStat = gent.manGrit;
    } else if (iClass == 16) {
        cStat = sleuth.manGrit;
    } else if (iClass == 17) {
        cStat = waste.manGrit;
    } else {
        console.error("Class could not be found for STAT update.");
    }
    
    if (iAspect == 1) {
        aStat = time.manGrit;
    } else if (iAspect == 2) {
        aStat = space.manGrit;
    } else if (iAspect == 3) {
        aStat = smodVoid.manGrit;
    } else if (iAspect == 4) {
        aStat = light.manGrit;
    } else if (iAspect == 5) {
        aStat = mind.manGrit;
    } else if (iAspect == 6) {
        aStat = heart.manGrit;
    } else if (iAspect == 7) {
        aStat = rage.manGrit;
    } else if (iAspect == 8) {
        aStat = hope.manGrit;
    } else if (iAspect == 9) {
        aStat = doom.manGrit;
    } else if (iAspect == 10) {
        aStat = life.manGrit;
    } else if (iAspect == 11) {
        aStat = blood.manGrit;
    } else if (iAspect == 12) {
        aStat = breath.manGrit;
    } else {
        console.error("Aspect could not be found for STAT update.")
    }
    
    iBox.textContent = "Level 1: "+calculateStatAtLevel(1,cStat,aStat,iNum)+" | Level 176: "+calculateStatAtLevel(176,cStat,aStat,iNum);
    
    return iNum;
}


function spdUpdate() {
    var iClass = classUpdate();
    var iAspect = aspectUpdate();
    var cStat = 0;
    var aStat = 0;
    var iNum = parseInt(document.querySelector('#speed').value);
    var iBox = document.querySelector('#spdSpan');
    
    if (iClass == 1) {
        cStat = rouge.speed;
    } else if (iClass == 2) {
        cStat = thief.speed;
    } else if (iClass == 3) {
        cStat = maid.speed;
    } else if (iClass == 4) {
        cStat = heir.speed;
    } else if (iClass == 5) {
        cStat = page.speed;
    } else if (iClass == 6) {
        cStat = knight.speed;
    } else if (iClass == 7) {
        cStat = seer.speed;
    } else if (iClass == 8) {
        cStat = sylph.speed;
    } else if (iClass == 9) {
        cStat = maid.speed;
    } else if (iClass == 10) {
        cStat = witch.speed;
    } else if (iClass == 11) {
        cStat = bard.speed;
    } else if (iClass == 12) {
        cStat = prince.speed;
    } else if (iClass == 13) {
        cStat = priest.speed;
    } else if (iClass == 14) {
        cStat = fool.speed;
    } else if (iClass == 15) {
        cStat = gent.speed;
    } else if (iClass == 16) {
        cStat = sleuth.speed;
    } else if (iClass == 17) {
        cStat = waste.speed;
    } else {
        console.error("Class could not be found for STAT update.");
    }
    
    if (iAspect == 1) {
        aStat = time.speed;
    } else if (iAspect == 2) {
        aStat = space.speed;
    } else if (iAspect == 3) {
        aStat = smodVoid.speed;
    } else if (iAspect == 4) {
        aStat = light.speed;
    } else if (iAspect == 5) {
        aStat = mind.speed;
    } else if (iAspect == 6) {
        aStat = heart.speed;
    } else if (iAspect == 7) {
        aStat = rage.speed;
    } else if (iAspect == 8) {
        aStat = hope.speed;
    } else if (iAspect == 9) {
        aStat = doom.speed;
    } else if (iAspect == 10) {
        aStat = life.speed;
    } else if (iAspect == 11) {
        aStat = blood.speed;
    } else if (iAspect == 12) {
        aStat = breath.speed;
    } else {
        console.error("Aspect could not be found for STAT update.")
    }
    
    iBox.textContent = "Level 1: "+calculateStatAtLevel(1,cStat,aStat,iNum)+" | Level 176: "+calculateStatAtLevel(176,cStat,aStat,iNum);
    
    return iNum;
}

function stlthUpdate() {
    var iClass = classUpdate();
    var iAspect = aspectUpdate();
    var cStat = 0;
    var aStat = 0;
    var iNum = parseInt(document.querySelector('#stealth').value);
    var iBox = document.querySelector('#stlthSpan');
    
    if (iClass == 1) {
        cStat = rouge.stealth;
    } else if (iClass == 2) {
        cStat = thief.stealth;
    } else if (iClass == 3) {
        cStat = maid.stealth;
    } else if (iClass == 4) {
        cStat = heir.stealth;
    } else if (iClass == 5) {
        cStat = page.stealth;
    } else if (iClass == 6) {
        cStat = knight.stealth;
    } else if (iClass == 7) {
        cStat = seer.stealth;
    } else if (iClass == 8) {
        cStat = sylph.stealth;
    } else if (iClass == 9) {
        cStat = maid.stealth;
    } else if (iClass == 10) {
        cStat = witch.stealth;
    } else if (iClass == 11) {
        cStat = bard.stealth;
    } else if (iClass == 12) {
        cStat = prince.stealth;
    } else if (iClass == 13) {
        cStat = priest.stealth;
    } else if (iClass == 14) {
        cStat = fool.stealth;
    } else if (iClass == 15) {
        cStat = gent.stealth;
    } else if (iClass == 16) {
        cStat = sleuth.stealth;
    } else if (iClass == 17) {
        cStat = waste.stealth;
    } else {
        console.error("Class could not be found for STAT update.");
    }
    
    if (iAspect == 1) {
        aStat = time.stealth;
    } else if (iAspect == 2) {
        aStat = space.stealth;
    } else if (iAspect == 3) {
        aStat = smodVoid.stealth;
    } else if (iAspect == 4) {
        aStat = light.stealth;
    } else if (iAspect == 5) {
        aStat = mind.stealth;
    } else if (iAspect == 6) {
        aStat = heart.stealth;
    } else if (iAspect == 7) {
        aStat = rage.stealth;
    } else if (iAspect == 8) {
        aStat = hope.stealth;
    } else if (iAspect == 9) {
        aStat = doom.stealth;
    } else if (iAspect == 10) {
        aStat = life.stealth;
    } else if (iAspect == 11) {
        aStat = blood.stealth;
    } else if (iAspect == 12) {
        aStat = breath.stealth;
    } else {
        console.error("Aspect could not be found for STAT update.")
    }
    
    iBox.textContent = "Level 1: "+calculateStatAtLevel(1,cStat,aStat,iNum)+" | Level 176: "+calculateStatAtLevel(176,cStat,aStat,iNum);
    return iNum;
}

function badUpdate() {
    var iClass = classUpdate();
    var iAspect = aspectUpdate();
    var cStat = 0;
    var aStat = 0;
    var iNum = parseInt(document.querySelector('#badLuck').value);
    var iBox = document.querySelector('#badSpan');
    
    if (iClass == 1) {
        cStat = rouge.badLuck;
    } else if (iClass == 2) {
        cStat = thief.badLuck;
    } else if (iClass == 3) {
        cStat = maid.badLuck;
    } else if (iClass == 4) {
        cStat = heir.badLuck;
    } else if (iClass == 5) {
        cStat = page.badLuck;
    } else if (iClass == 6) {
        cStat = knight.badLuck;
    } else if (iClass == 7) {
        cStat = seer.badLuck;
    } else if (iClass == 8) {
        cStat = sylph.badLuck;
    } else if (iClass == 9) {
        cStat = maid.badLuck;
    } else if (iClass == 10) {
        cStat = witch.badLuck;
    } else if (iClass == 11) {
        cStat = bard.badLuck;
    } else if (iClass == 12) {
        cStat = prince.badLuck;
    } else if (iClass == 13) {
        cStat = priest.badLuck;
    } else if (iClass == 14) {
        cStat = fool.badLuck;
    } else if (iClass == 15) {
        cStat = gent.badLuck;
    } else if (iClass == 16) {
        cStat = sleuth.badLuck;
    } else if (iClass == 17) {
        cStat = waste.badLuck;
    } else {
        console.error("Class could not be found for STAT update.");
    }
    
    if (iAspect == 1) {
        aStat = time.badLuck;
    } else if (iAspect == 2) {
        aStat = space.badLuck;
    } else if (iAspect == 3) {
        aStat = smodVoid.badLuck;
    } else if (iAspect == 4) {
        aStat = light.badLuck;
    } else if (iAspect == 5) {
        aStat = mind.badLuck;
    } else if (iAspect == 6) {
        aStat = heart.badLuck;
    } else if (iAspect == 7) {
        aStat = rage.badLuck;
    } else if (iAspect == 8) {
        aStat = hope.badLuck;
    } else if (iAspect == 9) {
        aStat = doom.badLuck;
    } else if (iAspect == 10) {
        aStat = life.badLuck;
    } else if (iAspect == 11) {
        aStat = blood.badLuck;
    } else if (iAspect == 12) {
        aStat = breath.badLuck;
    } else {
        console.error("Aspect could not be found for STAT update.")
    }
    
    iBox.textContent = "Level 1: "+calculateStatAtLevel(1,cStat,aStat,iNum)+" | Level 176: "+calculateStatAtLevel(176,cStat,aStat,iNum);
    return iNum;
}

function goodUpdate() {
    var iClass = classUpdate();
    var iAspect = aspectUpdate();
    var cStat = 0;
    var aStat = 0;
    var iNum = parseInt(document.querySelector('#goodLuck').value);
    var iBox = document.querySelector('#goodSpan');
    
    if (iClass == 1) {
        cStat = rouge.goodLuck;
    } else if (iClass == 2) {
        cStat = thief.goodLuck;
    } else if (iClass == 3) {
        cStat = maid.goodLuck;
    } else if (iClass == 4) {
        cStat = heir.goodLuck;
    } else if (iClass == 5) {
        cStat = page.goodLuck;
    } else if (iClass == 6) {
        cStat = knight.goodLuck;
    } else if (iClass == 7) {
        cStat = seer.goodLuck;
    } else if (iClass == 8) {
        cStat = sylph.goodLuck;
    } else if (iClass == 9) {
        cStat = maid.goodLuck;
    } else if (iClass == 10) {
        cStat = witch.goodLuck;
    } else if (iClass == 11) {
        cStat = bard.goodLuck;
    } else if (iClass == 12) {
        cStat = prince.goodLuck;
    } else if (iClass == 13) {
        cStat = priest.goodLuck;
    } else if (iClass == 14) {
        cStat = fool.goodLuck;
    } else if (iClass == 15) {
        cStat = gent.goodLuck;
    } else if (iClass == 16) {
        cStat = sleuth.goodLuck;
    } else if (iClass == 17) {
        cStat = waste.goodLuck;
    } else {
        console.error("Class could not be found for STAT update.");
    }
    
    if (iAspect == 1) {
        aStat = time.goodLuck;
    } else if (iAspect == 2) {
        aStat = space.goodLuck;
    } else if (iAspect == 3) {
        aStat = smodVoid.goodLuck;
    } else if (iAspect == 4) {
        aStat = light.goodLuck;
    } else if (iAspect == 5) {
        aStat = mind.goodLuck;
    } else if (iAspect == 6) {
        aStat = heart.goodLuck;
    } else if (iAspect == 7) {
        aStat = rage.goodLuck;
    } else if (iAspect == 8) {
        aStat = hope.goodLuck;
    } else if (iAspect == 9) {
        aStat = doom.goodLuck;
    } else if (iAspect == 10) {
        aStat = life.goodLuck;
    } else if (iAspect == 11) {
        aStat = blood.goodLuck;
    } else if (iAspect == 12) {
        aStat = breath.goodLuck;
    } else {
        console.error("Aspect could not be found for STAT update.")
    }
    
    iBox.textContent = "Level 1: "+calculateStatAtLevel(1,cStat,aStat,iNum)+" | Level 176: "+calculateStatAtLevel(176,cStat,aStat,iNum);
    return iNum;
}

function gelUpdate() {
    var iClass = classUpdate();
    var iAspect = aspectUpdate();
    var cStat = 0;
    var aStat = 0;
    var iBox = document.querySelector('#gelSpan');
    
    if (iClass == 1) {
        cStat = rouge.gelViscosity;
    } else if (iClass == 2) {
        cStat = thief.gelViscosity;
    } else if (iClass == 3) {
        cStat = maid.gelViscosity;
    } else if (iClass == 4) {
        cStat = heir.gelViscosity;
    } else if (iClass == 5) {
        cStat = page.gelViscosity;
    } else if (iClass == 6) {
        cStat = knight.gelViscosity;
    } else if (iClass == 7) {
        cStat = seer.gelViscosity;
    } else if (iClass == 8) {
        cStat = sylph.gelViscosity;
    } else if (iClass == 9) {
        cStat = maid.gelViscosity;
    } else if (iClass == 10) {
        cStat = witch.gelViscosity;
    } else if (iClass == 11) {
        cStat = bard.gelViscosity;
    } else if (iClass == 12) {
        cStat = prince.gelViscosity;
    } else if (iClass == 13) {
        cStat = priest.gelViscosity;
    } else if (iClass == 14) {
        cStat = fool.gelViscosity;
    } else if (iClass == 15) {
        cStat = gent.gelViscosity;
    } else if (iClass == 16) {
        cStat = sleuth.gelViscosity;
    } else if (iClass == 17) {
        cStat = waste.gelViscosity;
    } else {
        console.error("Class could not be found for STAT update.");
    }
    
    if (iAspect == 1) {
        aStat = time.gelViscosity;
    } else if (iAspect == 2) {
        aStat = space.gelViscosity;
    } else if (iAspect == 3) {
        aStat = smodVoid.gelViscosity;
    } else if (iAspect == 4) {
        aStat = light.gelViscosity;
    } else if (iAspect == 5) {
        aStat = mind.gelViscosity;
    } else if (iAspect == 6) {
        aStat = heart.gelViscosity;
    } else if (iAspect == 7) {
        aStat = rage.gelViscosity;
    } else if (iAspect == 8) {
        aStat = hope.gelViscosity;
    } else if (iAspect == 9) {
        aStat = doom.gelViscosity;
    } else if (iAspect == 10) {
        aStat = life.gelViscosity;
    } else if (iAspect == 11) {
        aStat = blood.gelViscosity;
    } else if (iAspect == 12) {
        aStat = breath.gelViscosity;
    } else {
        console.error("Aspect could not be found for STAT update.")
    }
    
    iBox.textContent = "Level 1: "+calculateStatAtLevel(1,cStat,aStat,0)+" | Level 176: "+calculateStatAtLevel(176,cStat,aStat,0);
}

function willUpdate() {
    var iClass = classUpdate();
    var iAspect = aspectUpdate();
    var cStat = 0;
    var aStat = 0;
    var iNum = parseInt(document.querySelector('#willPower').value);
    var iBox = document.querySelector('#willSpan');
    
    if (iClass == 1) {
        cStat = rouge.willPower;
    } else if (iClass == 2) {
        cStat = thief.willPower;
    } else if (iClass == 3) {
        cStat = maid.willPower;
    } else if (iClass == 4) {
        cStat = heir.willPower;
    } else if (iClass == 5) {
        cStat = page.willPower;
    } else if (iClass == 6) {
        cStat = knight.willPower;
    } else if (iClass == 7) {
        cStat = seer.willPower;
    } else if (iClass == 8) {
        cStat = sylph.willPower;
    } else if (iClass == 9) {
        cStat = maid.willPower;
    } else if (iClass == 10) {
        cStat = witch.willPower;
    } else if (iClass == 11) {
        cStat = bard.willPower;
    } else if (iClass == 12) {
        cStat = prince.willPower;
    } else if (iClass == 13) {
        cStat = priest.willPower;
    } else if (iClass == 14) {
        cStat = fool.willPower;
    } else if (iClass == 15) {
        cStat = gent.willPower;
    } else if (iClass == 16) {
        cStat = sleuth.willPower;
    } else if (iClass == 17) {
        cStat = waste.willPower;
    } else {
        console.error("Class could not be found for STAT update.");
    }
    
    if (iAspect == 1) {
        aStat = time.willPower;
    } else if (iAspect == 2) {
        aStat = space.willPower;
    } else if (iAspect == 3) {
        aStat = smodVoid.willPower;
    } else if (iAspect == 4) {
        aStat = light.willPower;
    } else if (iAspect == 5) {
        aStat = mind.willPower;
    } else if (iAspect == 6) {
        aStat = heart.willPower;
    } else if (iAspect == 7) {
        aStat = rage.willPower;
    } else if (iAspect == 8) {
        aStat = hope.willPower;
    } else if (iAspect == 9) {
        aStat = doom.willPower;
    } else if (iAspect == 10) {
        aStat = life.willPower;
    } else if (iAspect == 11) {
        aStat = blood.willPower;
    } else if (iAspect == 12) {
        aStat = breath.willPower;
    } else {
        console.error("Aspect could not be found for STAT update.")
    }
    
    iBox.textContent = "Level 1: "+calculateStatAtLevel(1,cStat,aStat,iNum)+" | Level 176: "+calculateStatAtLevel(176,cStat,aStat,iNum);
    return iNum;
}



