import express from "express";
import fs from "fs";
import helmet from "helmet";
import swaggerUi from "swagger-ui-express";
import carsRoutes from "./routes/cars.routes.js";
import { errorHandler } from "./middlewares/errorHandler.js";

const swaggerDocument = JSON.parse(fs.readFileSync("./src/swagger.json", "utf-8"));

const app = express();

app.use(express.json());
app.use(helmet());
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use("/cars", carsRoutes);
app.use(errorHandler);

app.get("/", (req, res) => {
    res.status(200).send("API de Carros com Express e Node.js");
});

export default app;