/**
     * 
thema
trainer
teachingAssistent
date
rotiValue
rotiText
*/
import firebase from "firebase/app";

import * as admin from "firebase-admin";

var serviceAccount = require("path/to/serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL:
    "https://roti-tool-e1dac-default-rtdb.europe-west1.firebasedatabase.app",
});

const firebaseConfig = {
  apiKey: "AIzaSyB5SUwgvvVciUho7HwpbjJTMtWjCywPUfA",
  authDomain: "roti-tool-e1dac.firebaseapp.com",
  projectId: "roti-tool-e1dac",
  storageBucket: "roti-tool-e1dac.appspot.com",
  messagingSenderId: "544674597566",
  appId: "1:544674597566:web:01d19652c123919ad8acef",
  measurementId: "G-QYGG8RG541",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default {
  createRoti: (
    thema,
    trainer,
    teachingAssistent,
    date,
    rotiValue,
    rotiText
  ) => {
    firebase
      .database()
      .ref("users/" + userId)
      .set({
        thema: thema,
        trainer: trainer,
        teachingAssistent: teachingAssistent,
        date: date,
        rotiValue: rotiValue,
        rotiText: rotiText,
      });
  },
  getRotis: () => {},
};
