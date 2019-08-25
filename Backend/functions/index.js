const admin = require('firebase-admin');
const functions = require('firebase-functions');

const express = require("express");
const app = express();

const cors = require("cors");
app.use(cors());

admin.initializeApp();

let db = admin.firestore();

exports.api = functions.https.onRequest(app);

exports.addPage = (req, res) => {
    const newPag = {
        ...req.body
      };
     db.collection("paginas")
         .add(newPag)
         .then(data => {
             res.status(201).json({ message: "Added" });
         })
         .catch(err => {
             res.status(500).json({ error: "Something went wrong" });
         });
  };

  exports.addEmail = (req, res) => {
    const newEmail = {
        ...req.body
      };
     db.collection("correos")
         .add(newEmail)
         .then(data => {
             res.status(201).json({ message: "Added" });
         })
         .catch(err => {
             res.status(500).json({ error: "Something went wrong" });
         });
  };

app.post("/addPage", this.addPage);
app.post("/addEmail", this.addEmail);