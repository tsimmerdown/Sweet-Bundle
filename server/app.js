const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

const checkOutRoutes = require("./routes/checkOutRoutes");

dotenv.config();

const app = express();
const port = process.env.PORT || 8080;

app.use(cors());
app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));

app.use("/", checkOutRoutes);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
