import express from "express"; //biblioteca 
import routes from "./routes/index.js";

const app = express();
app.use(express.json());
routes(app);

export default app;