db = firebase.firestore();

var choosePlayer = document.querySelector('#choosePlayer');
var startStrife = document.querySelector('#startStrife');
var playerDisplay = document.querySelector('#playerDisplay');
var enemyDisplay = document.querySelector('#enemyDisplay');

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
                    });
                })
                .catch(function(error) {
                    console.log("Error getting documents: ", error);
                });
}
