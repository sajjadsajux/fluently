import React from "react";
import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import FindTutors from "../Pages/FindTutors/FindTutors";
import AddTutorials from "../Pages/AddTutorials/AddTutorials";
import PrivateRoute from "../Routes/PrivateRoute";
import Loader from "../Utils/loader";
import TutorDetails from "../Pages/FindTutors/TutorDetails";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/login",
        Component: Login,
      },
      {
        path: "/register",
        Component: Register,
      },
      {
        path: "/find-tutors",
        Component: FindTutors,
        loader: () => fetch(`${import.meta.env.VITE_LOCAL_URL}/tutorials`),
        hydrateFallbackElement: <Loader></Loader>,
      },
      {
        path: "/tutor/:id",
        element: (
          <PrivateRoute>
            <TutorDetails></TutorDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) => fetch(`${import.meta.env.VITE_LOCAL_URL}/tutor/${params.id}`),
        hydrateFallbackElement: <Loader></Loader>,
      },
      {
        path: "/add-tutorials",
        element: (
          <PrivateRoute>
            <AddTutorials></AddTutorials>
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
