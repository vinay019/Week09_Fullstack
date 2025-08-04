import express from "express";
import cors from "cors";
import dotenv from "dotenv";

const app = express();

app.use(express.json());
app.use(cors());

dotenv.config();

console.log("my secret env is", process.env.my_Secret_Key);

console.log("Second", process.env.my_Second_Key);

console.log("third", process.env.my_thirdKEY);

const PORT = 8080;

app.get("/", function (req, res) {
  res.send("Ouch, you've hit my root!!!");
});

app.get("/secrets", function (req, res) {
  console.log("my secret env is", process.env.my_Secret_Key);

  console.log("Second", process.env.my_Second_Key);

  console.log("third", process.env.my_thirdKEY);
});
app.listen(PORT, function () {
  console.log(`Server is running on ${PORT}`);
});
