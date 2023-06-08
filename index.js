const express = require("express");
const bodyParser = require("body-parser");
const router = require("./routes");
const { MONGO_URI } = require("./shared/mongoDB");

const app = express();
app.use(bodyParser());
const port = 8080;

app.use("/", router);

app.listen(port, () => {
  console.log(`connected to port ${port}`);
});

mongoose
  .connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MDB connected"))
  .catch((error) => error);
