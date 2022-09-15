require("dotenv").config();
require('express-async-errors');

//=========== IMPORTS ==========

//----------- db ------------
const connectDB = require("./db/connect");

//---------- express ----------
const express = require("express");
const app = express();

//---------- product route ----------
const productsRoute = require("./routes/products");

//---------- custom middleware import ---------
const notFoundMiddleware = require("./middleware/not-found");
const errorHandlerMiddleware = require("./middleware/error-handler");

//express middleware use statements
app.use(express.json());

//======= ROUTES =======
app.use("/api/v1/products", productsRoute);

app.get("/", (req, res) => {
  res.send("Home page");
});

//=========== CUSTOM MIDDLEWARES USE =========
app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 3000;

const start = async () => {
  try {
    //await connect db
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => {
      console.log(`server listening on port 3000`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
