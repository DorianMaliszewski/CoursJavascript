import React from "react";
import ReactDOM from "react-dom/client";
import { routes } from "./routes";
import "./index.css";
import { Outlet, ReactLocation, Router } from "@tanstack/react-location";
import { MainLayout } from "./layouts/MainLayout";

const location = new ReactLocation();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Router
      basepath={import.meta.env.PROD ? "/CoursJavascript" : undefined}
      routes={routes}
      location={location}
    >
      <MainLayout>
        <Outlet />
      </MainLayout>
    </Router>
  </React.StrictMode>
);
