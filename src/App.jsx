import { useState } from "react";
import HomePage from "./pages/HomePage";
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
  Outlet,
} from "react-router-dom";
import RootLayout from "./rootLayout/RootLayout";
import TestPage from "./pages/TestPage";
import ArchitectPage from "./pages/ArchitectPage";
import CabinetryPage from "./pages/CabinetryPage";
import InspirationPage from "./pages/InspirationPage";
import AboutUsPage from "./pages/AboutUsPage";


function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route element={<RootLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/test" element={<TestPage />} />
          <Route path="/architects" element={<ArchitectPage />} />
          <Route path="/inspiration" element={<InspirationPage />} />
          <Route path="/cabinetary" element={<CabinetryPage />} />
          <Route path="/aboutus" element={<AboutUsPage />} />
        </Route>
      </>
    )
  );
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
