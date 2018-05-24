db = firebase.firestore();

var choosePlayer = document.querySelector('#choosePlayer');
var startStrife = document.querySelector('#startStrife');

db.collection("players").where("owner", "==", uid)
                .get()
                .then(function(querySnapshot) {
                    querySnapshot.forEach(function(doc) {
                        // doc.data() is never undefined for query doc snapshots
                        workingData = doc.data();
                        console.log(workingData);
                        choosePlayer.innerHtml += "<option value='" + doc.id + "'>" + doc.name + "</option>";
                    });
                })
                .catch(function(error) {
                    console.log("Error getting documents: ", error);
                });
