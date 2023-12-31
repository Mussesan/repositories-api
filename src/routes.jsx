import React from "react";
import { Route, Routes } from "react-router-dom";

import MainPage from "./pages/Main";

import Dashboard from "./pages/Dashboard";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/home" element={<MainPage />} />
      <Route path="/*" element={<MainPage />} />
      <Route path="/dashboard" element={<Dashboard />} />

    </Routes>
  );
}
