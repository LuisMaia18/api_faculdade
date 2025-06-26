import express from "express";
import fs from "fs";
import cors from "cors";
import helmet from "helmet";
import swaggerUi from "swagger-ui-express";
import carsRoutes from "./routes/cars.routes.js";
import { errorHandler } from "./middlewares/errorHandler.js";
import authRoutes from "./routes/auth.routes.js";
import brandsRoutes from "./routes/brands.routes.js";

const swaggerDocument = JSON.parse(fs.readFileSync("./src/swagger.json", "utf-8"));

const app = express();
app.use(cors());

app.use(express.json());
app.use(helmet());
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use("/auth", authRoutes);
app.use("/cars", carsRoutes);
app.use("/brands", brandsRoutes);
app.use(errorHandler);

app.get("/", (req, res) => {
    res.status(200).send("API de Carros com Express e Node.js");
});

export default app;