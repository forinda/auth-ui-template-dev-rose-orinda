import * as React from "react";
import { createBrowserRouter } from "react-router-dom";
import Users from "./components/Users";
import Login from "./Pages/Login";
import UpdateRole from "./components/UpdateRole";
import Layout from "./components/Layout";
import Register from "./Pages/Register";
import Hero from "./components/Hero";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout>
        <Hero />,
      </Layout>
    ),
  },
  {
    path: "/users",
    element: (
      <Layout>
        <Users />,
      </Layout>
    ),
  },
  {
    path: "/register",
    element: (
      <Layout>
        <Register />,
      </Layout>
    ),
  },
  {
    path: "/login",
    element: (
      <Layout>
        <Login />,
      </Layout>
    ),
  },
  {
    path: "/role",
    element: (
      <Layout>
        <UpdateRole />
      </Layout>
    ),
  },
]);
