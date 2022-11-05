var admin = require("firebase-admin");

var serviceAccount = require("../play-pal-a1403-firebase-adminsdk-in8tp-53c12e178e.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();
module.exports = { admin, db };
