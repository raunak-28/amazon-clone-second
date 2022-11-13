const functions = require("firebase-functions");

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51M3DslSHd8ErlHVgqKr3PNPtt0pLB9tWNrTo0HSClQaVklVIp36bwlDbr1zoS6jnccNauSBKdnaXcRRscipilJPn00nMiIio8i"
);

//API

//App config

const app = express();

//Middilewares

app.use(cors({ origin: true }));
app.use(express.json());

//Api routes

app.get("/", (request, response) => response.status(200).send("hello world"));
app.post("/payments/create", async (request, response) => {
  const total = request.query.total;
  console.log("Payment Request recieved!!>>>>", total);
  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "inr",
  });

  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});
// listen command

exports.api = functions.https.onRequest(app);
//http://127.0.0.1:5001/clone-fc0d5/us-central1/api
