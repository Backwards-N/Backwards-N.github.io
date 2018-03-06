function saveToFirebase(email) {
    var emailObject = {
        email: email
    };

    firebase.database().ref('subscription-entries').push().set(emailObject)
        .then(function(snapshot) {
        }, function(error) {
            console.log('error' + error);
        });
}

saveToFirebase(email);
