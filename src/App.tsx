import { useState } from "react";

import "./App.css";
import React from "react";
import { RouterProvider } from "react-router-dom";
import Users from "./components/Users";
import UpdateRole from "./components/UpdateRole";
import Layout from "./components/Layout";
import { router } from "./route";

function App() {
  return (
    <React.Fragment>
        <RouterProvider router={router} />
    </React.Fragment>
  );
}

export default App;
