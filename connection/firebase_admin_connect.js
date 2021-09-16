
var admin = require("firebase-admin");

var serviceAccount = require("../expressfirebaseauthentication-firebase-adminsdk-j8lip-3cf0bf782f.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://expressfirebaseauthentication-default-rtdb.firebaseio.com"

});

var db = admin.database();//只要使用這個功能

//讓其他的js檔案都可以載入的模組
module.exports = db