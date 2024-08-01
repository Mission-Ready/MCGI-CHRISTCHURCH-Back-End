// ========== Module IMPORTS ========== //
const cors = require("cors");
const express = require("express");
const app = express();
require("dotenv").config();

// Middleware
app.use(cors());
app.use(express.json());


// ========== ROUTE IMPORTS ========== //
const logInRouter = require("./routes/loginRoutes");

// Create API ENDPOINTS HERE!!!
// ROOT ENDPOINT
app.get("/", (req, res) => {
  res.send("The backend is functioning!");
});

// ========== API ========== //

// HOME LOGIN
app.use(logInRouter);

// Port
const PORT = process.env.PORT;
app
  .listen(PORT, console.log(`It's working at http://localhost:${PORT}`))
  .on("error", (err) => {
    console.log(err);
  });
