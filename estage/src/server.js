import express from "express";
const app = express();

app.use(static(__dirname + "/dist"));

app.all("*", (req, res) => {
  res.status(200).sendFile(__dirname + "/build/index.html");
});

app.listen(process.env.PORT || 3000);

// const express = require("express");
// const { resolve } = require("path");

// const app = express();

// app.use("/", express.static(resolve(__dirname, "./build")));

// app.listen(process.env.PORT || 3000, (err) => {
//   if (err) {
//     return console.log(err);
//   }
//   console.log("Le port marche bien!");
// });
