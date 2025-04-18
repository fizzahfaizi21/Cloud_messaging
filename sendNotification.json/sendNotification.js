// sendNotification.js

const admin = require("firebase-admin");

// Load your service account key
const serviceAccount = require("./serviceAccountKey.json");

// Initialize Firebase Admin SDK
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

// Replace this with your actual FCM token
const fcmToken = "YOUR_DEVICE_FCM_TOKEN";

const message = {
  notification: {
    title: "🚀 Hello from Firebase",
    body: "This is a test push to a single device!",
  },
  token: fcmToken,
};

admin
  .messaging()
  .send(message)
  .then((response) => {
    console.log("Successfully sent message:", response);
  })
  .catch((error) => {
    console.error("Error sending message:", error);
  });
