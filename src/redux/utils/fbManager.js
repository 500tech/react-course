import firebase from 'firebase';

class fbManager {
  constructor() {
    const config = {
      // todo: complete config from firebase
    };
    firebase.initializeApp(config);

    this.db = firebase.database();
  }

  set(path, payload) {
    this.db.ref(path).set(payload);
  }

  remove(url) {
    this.db.ref(url).remove();
  }

  on(path, payload, onSuccess, onError) {
    this.db.ref(path).on('value', (snapshot) => {
      onSuccess(snapshot.val());
    });
  }
}

export default fbManager;
