import { Application, Router } from "express";
import userRoute from "./userRoute";
import transactionRoute from "./transactionRoute";

const getRoutes = (app: Application) => {
  const routes: Array<Router> = [userRoute, transactionRoute];
  routes.map((route) => app.use(route));
};

export default getRoutes;