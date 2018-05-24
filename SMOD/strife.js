db = firebase.firestore();

var choosePlayer = document.querySelector('#choosePlayer');
var startStrife = document.querySelector('#startStrife');

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
