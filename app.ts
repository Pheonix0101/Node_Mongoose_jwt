import express from "express";
import bodyParser from "body-parser";
import "./config/database_connection";
import { swaggerServe, swaggerSetup } from './config';
import employeeRoute from "./routes/employee";
import employeelogin from "./routes/employee_login";

const PORT = process.env.PORT || 9090;
const app = express();
app.use("/api-docs", swaggerServe, swaggerSetup);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.json());

app.use(employeeRoute);
app.use(employeelogin);

app.listen(PORT, () => {
  console.log(`App is listening`);
});
