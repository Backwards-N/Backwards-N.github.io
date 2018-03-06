function writeUserData(name, password) {
  firebase.database().ref('users/').push.set({
    username: name,
    email: email
  });
}
