import { Navigate, Outlet } from "react-router-dom";
import * as React from 'react';

export const ProtectedRoute = ({ isAllowed, redirectTo = '/reqsAdmin', children }) => {
  if (!isAllowed) {
    return <Navigate to={redirectTo} />;
  }

  return children && <Outlet />;
};
