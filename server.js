const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const dotenv = require("dotenv");
const colors = require("colors");
const connectDb = require("./config/connectDb");
//config dotenv file
dotenv.config();

connectDb();
//rest objects
const app = express();

//middleware

app.use(morgan("dev"));
app.use(express.json());
app.use(cors());

//routes
app.use("/api/v1/users", require("./routes/userRoute"));

//port
const PORT = 8080 || process.env.PORT;

//Listen
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
