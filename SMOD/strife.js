db = firebase.firestore();

var choosePlayer = document.querySelector('#choosePlayer');
var startStrife = document.querySelector('#startStrife');
var playerDisplay = document.querySelector('#playerDisplay');
var playerBattleInfoDisplay = document.querySelector('#pbInfoDisplay');
var enemyDisplay = document.querySelector('#enemyDisplay');
var activePlayerHealth = null;
var activePlayerGrit = null;
var activePlayerSpeed = null;
var activePlayerLevel = null;

function strifeSelect() {
  db.collection("players").where("owner", "==", userIdentifier)
                .get()
                .then(function(querySnapshot) {
                    querySnapshot.forEach(function(doc) {
                        // doc.data() is never undefined for query doc snapshots
                        workingData = doc.data();
                        console.log(workingData);
                        var opt = document.createElement('option');
                        opt.value = doc.id;
                        opt.text = doc.data().name;
                        choosePlayer.options.add(opt)
                    });
                })
                .catch(function(error) {
                    console.log("Error getting documents: ", error);
                });
}

$("#startStrife").on('click', loadStrife);
$("#aggrieve").on('click', advanceStrife);

function loadStrife() {
  enemyMine = createUnderlingAtTiers(0, 1, null);
  enemyDisplay.innerHTML = enemyMine.name
                             + '<br /> Power: ' + enemyMine.power
                             + '<br /> Speed: ' + enemyMine.speed
                             + '<br /> Stealth: ' + enemyMine.stealth
                             + '<br /> Health: ' + enemyMine.health
                             + '<br /> Size: ' + enemyMine.size
                             + '<br /> Trigger: ' + enemyMine.trigger;
  
  db.collection("players").where(firebase.firestore.FieldPath.documentId(), "==", choosePlayer.value)
                .get()
                .then(function(querySnapshot) {
                    querySnapshot.forEach(function(doc) {
                        // doc.data() is never undefined for query doc snapshots
                        workingData = doc.data();
                        console.log(workingData);
                        playerDisplay.innerHTML = workingData.name + ', '
                          + getClassByID(workingData.class).sin + ' of '
                          + getAspectByID(workingData.aspect).sin + '</p>' + '<p> Level '
                          + workingData.level
                          + '<br /> Gel Viscosity: ' + calculateStatAtLevel(workingData.level, getClassByID(workingData.class).gelViscosity, getAspectByID(workingData.aspect).gelViscosity, 0)
                          + '<br /> Mangrit: ' + calculateStatAtLevel(workingData.level, getClassByID(workingData.class).manGrit, getAspectByID(workingData.aspect).manGrit, workingData.grit)
                          + '<br /> Speed: ' + calculateStatAtLevel(workingData.level, getClassByID(workingData.class).speed, getAspectByID(workingData.aspect).speed, workingData.spd)
                          + '<br /> Good Luck: ' + calculateStatAtLevel(workingData.level, getClassByID(workingData.class).goodLuck, getAspectByID(workingData.aspect).goodLuck, workingData.good)
                          + '<br /> Bad Luck: ' + calculateStatAtLevel(workingData.level, getClassByID(workingData.class).badLuck, getAspectByID(workingData.aspect).badLuck, workingData.bad)
                          + '<br /> Stealth: ' + calculateStatAtLevel(workingData.level, getClassByID(workingData.class).stealth, getAspectByID(workingData.aspect).stealth, workingData.stlth)
                          + '<br /> Willpower:' + calculateStatAtLevel(workingData.level, getClassByID(workingData.class).willPower, getAspectByID(workingData.aspect).willPower, workingData.will);
                      
                        activePlayerHealth = (calculateStatAtLevel(workingData.level, getClassByID(workingData.class).gelViscosity, getAspectByID(workingData.aspect).gelViscosity, 0)) * 10;
                        activePlayerMaxHealth = (calculateStatAtLevel(workingData.level, getClassByID(workingData.class).gelViscosity, getAspectByID(workingData.aspect).gelViscosity, 0)) * 10;
                        activePlayerGrit = calculateStatAtLevel(workingData.level, getClassByID(workingData.class).manGrit, getAspectByID(workingData.aspect).manGrit, workingData.grit);
                        activePlayerSpeed = calculateStatAtLevel(workingData.level, getClassByID(workingData.class).speed, getAspectByID(workingData.aspect).speed, workingData.spd);
                        activePlayerLevel = workingData.level;
                      
                        playerBattleInfoDisplay.innerHTML =
                        'Current Health: ' + math.ceil((activePlayerHealth/activePlayerMaxHealth)*100) + '&percnt';
                    });
                })
                .catch(function(error) {
                    console.log("Error getting documents: ", error);
                });
}

function advanceStrife() {
  if (enemyMine.speed > activePlayerSpeed) {
    activePlayerHealth = activePlayerHealth - enemyMine.power;
    playerBattleInfoDisplay.innerHTML =
      'Current Health: ' + math.ceil((activePlayerHealth/activePlayerMaxHealth)*100) + '&percnt'
      + '( -' + enemyMine.power + '! )';
    
    var enemyHealthModifier = useAffray(aggrieve, activePlayerLevel, activePlayerGrit, 2);
    enemyMine.health = enemyMine.health - enemyHealthModifier;
    enemyDisplay.innerHTML = enemyMine.name
                             + '<br /> Power: ' + enemyMine.power
                             + '<br /> Speed: ' + enemyMine.speed
                             + '<br /> Stealth: ' + enemyMine.stealth
                             + '<br /> Health: ' + enemyMine.health + '( -' + enemyHealthModifier + '! )';
                             + '<br /> Size: ' + enemyMine.size
                             + '<br /> Trigger: ' + enemyMine.trigger;
  } else {
    var enemyHealthModifier = useAffray(aggrieve, activePlayerLevel, activePlayerGrit, 2);
    enemyMine.health = enemyMine.health - enemyHealthModifier;
    enemyDisplay.innerHTML = enemyMine.name
                             + '<br /> Power: ' + enemyMine.power
                             + '<br /> Speed: ' + enemyMine.speed
                             + '<br /> Stealth: ' + enemyMine.stealth
                             + '<br /> Health: ' + enemyMine.health + '( -' + enemyHealthModifier + '! )';
                             + '<br /> Size: ' + enemyMine.size
                             + '<br /> Trigger: ' + enemyMine.trigger;
    
    activePlayerHealth = activePlayerHealth - enemyMine.power;
    playerBattleInfoDisplay.innerHTML =
      'Current Health: ' + math.ceil((activePlayerHealth/activePlayerMaxHealth)*100) + '&percnt'
      + '( -' + enemyMine.power + '! )';
  }
}
