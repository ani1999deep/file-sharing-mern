import express from "express";
import Connection from "./database/db.js";
import router from "./routes/api.js";
const app = express();
const PORT = 9000;

app.use("/", router);
app.use(cors());

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
Connection();
