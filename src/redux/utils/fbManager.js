import firebase from 'firebase';

class fbManager {
  constructor() {
    const config = {

    };
    firebase.initializeApp(config);

    this.db = firebase.database();
  }

  // add(path, payload) {
  //   this.db.ref(path).set(payload);
  // }

  once(path, payload, onSuccess, onError) {
    this.db.ref(path).once('value', (snapshot) => {
      onSuccess(snapshot.val());
    });
  }
}

export default fbManager;
