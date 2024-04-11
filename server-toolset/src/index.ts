import express, { Application } from "express";
import dotenv from "dotenv";
import { VerifyDiscordRequest } from "./services/discordServices";
import myRoute from "./routes/myRoute";

//For env File
dotenv.config();

const app: Application = express();
const port = process.env.PORT || 3000;

// Middlewares
app.use(express.json());
app.use(express.json({ verify: VerifyDiscordRequest(process.env.PUBLIC_KEY) }));

// Routes will be written here
app.use("/", myRoute);

app.listen(port, () => {
  console.log(`Server is Fire at http://localhost:${port}`);
});
