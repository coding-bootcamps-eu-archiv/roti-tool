import firebase from "firebase/app";
import "firebase/database";

const firebaseConfig = {
  databaseURL:
    "https://roti-b514f-default-rtdb.europe-west1.firebasedatabase.app/",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default {
  getRotis: () => {
    return [];
  },
  writeRoti: () => {
    firebase.database().ref("foo").set({
      roti: 1,
      thema: "firebase",
    });
  },
};
