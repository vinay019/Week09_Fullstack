import express from "express";
import cors from "cors";
import dotenv from "dotenv";

const app = express();

app.use(express.json());
app.use(cors());

dotenv.config();

console.log("my secret env is", process.env.my_Secret_Key);

const PORT = 8080;

app.get("/", function (req, res) {
  res.send("Ouch, you've hit my root!!!");
});

app.listen(PORT, function () {
  console.log(`Server is running on ${PORT}`);
});
