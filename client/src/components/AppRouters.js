import React from "react";
import { Routes, Route } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { publicRoutes, privateRoutes } from "../routes";

export const AppRouters = () => {
  const { isAuthenticated } = useAuth0();
  return (
    <Routes>
      {isAuthenticated &&
        privateRoutes.map(({ path, Component }) => (
          <Route key={path} path={path} element={Component} exact />
        ))}
      {publicRoutes.map(({ path, Component }) => (
        <Route key={path} path={path} element={Component} exact />
      ))}
    </Routes>
  );
};
