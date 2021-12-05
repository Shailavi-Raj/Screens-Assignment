import React from "react";
import { Redirect, Route } from "react-router";

const PublicRoute = ({ children, ...routeProps }) => {
  const profile = false;
  if (profile) {
    return <Redirect to="/home" />;
  }

  return (
    <div>
      <Route {...routeProps}>{children}</Route>
    </div>
  );
};

export default PublicRoute;
