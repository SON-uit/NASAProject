const express = require("express");
const morgan = require("morgan");
const path = require("path");
const cors = require("cors");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 5000;
const app = express();
const mongoURL =
  "mongodb+srv://sonnguyen:Co0meSfeQh7GgtK2@cluster0.a8eyw.mongodb.net/NasaDatabase?retryWrites=true&w=majority";
mongoose.connection.on("open", () => {
  console.log("Mongoose connection ready");
});
mongoose.connection.on("error", (err) => {
  console.error("Mongoose connection error " + err.message);
});
async function startServer() {
  try {
    await mongoose.connect(mongoURL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    app.listen(PORT, function () {
      console.log("listening on port" + PORT);
    });
  } catch (error) {
    console.error(error.message);
  }
}
startServer();
//Middelware
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);
app.use(morgan("combined"));
app.use(express.json());
app.use(express.static(path.join(__dirname,'..', 'public')));
const planetsRouter = require("./routes/planetsRouter.js");
const launchesRouter = require("./routes/launchesRouter");
app.use("/planet", planetsRouter);
app.use("/launch", launchesRouter);
app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname,'..','public','index.html'));
});
