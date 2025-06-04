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
import MyBookedTutors from "../Pages/MyBookedTutors/MyBookedTutors";
import MyTutorials from "../Pages/MyTutorials/MyTutorials";
import UpdateTutorials from "../Pages/MyTutorials/UpdateTutorials";

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
      {
        path: "/my-booked-tutors/:email",
        element: (
          <PrivateRoute>
            <MyBookedTutors></MyBookedTutors>
          </PrivateRoute>
        ),
        loader: ({ params }) => fetch(`${import.meta.env.VITE_LOCAL_URL}/booked-tutors/${params.email}`),
        hydrateFallbackElement: <Loader></Loader>,
      },
      {
        path: "/my-tutorials/:email",
        element: (
          <PrivateRoute>
            <MyTutorials></MyTutorials>
          </PrivateRoute>
        ),
        loader: ({ params }) => fetch(`${import.meta.env.VITE_LOCAL_URL}/tutorials/${params.email}`),
        hydrateFallbackElement: <Loader></Loader>,
      },
      {
        path: "/update-tutorials/:id",
        element: (
          <PrivateRoute>
            <UpdateTutorials></UpdateTutorials>
          </PrivateRoute>
        ),
        loader: ({ params }) => fetch(`${import.meta.env.VITE_LOCAL_URL}/update-tutorials/${params.id}`),
        hydrateFallbackElement: <Loader></Loader>,
      },
    ],
  },
]);

export default router;
