function writeUserData(name, password) {
  firebase.database().ref('users/').push.set({
    username: name,
    password: password
  });
}
