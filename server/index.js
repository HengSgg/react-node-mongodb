const express = require("express");
const app = express();
const port = 3000;
const cookieParser = require("cookie-parser");
const { JsonWebTokenError } = require("jsonwebtoken");
const user = require("./routers/user");
const hello = require("./routers/hello");
const connectDB = require("./connection/db");

app.use(express.json());
app.use(cookieParser());
connectDB();

// routers
app.use("/", hello);
app.use("/api/users", user);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
