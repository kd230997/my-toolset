import express, { Express, Request, Response, Application } from 'express';
import dotenv from 'dotenv';
import myRoute from "./routes/myRoute";

//For env File 
dotenv.config();

const app: Application = express();
const port = process.env.PORT || 8000;

// Middlewares 
app.use(express.json());

// Routes will be written here 
app.use('/', myRoute);

app.listen(port, () => {
    console.log(`Server is Fire at http://localhost:${port}`);
});