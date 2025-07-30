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
import InspirationInsight from "./components/homeComponents/InspirationInsight";
import CabinetryPage from "./pages/CabinetryPage";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route element={<RootLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/test" element={<TestPage />} />
          <Route path="/architects" element={<ArchitectPage />} />
          <Route path="/inspiration" element={<InspirationInsight />} />
          <Route path="/cabinetary" element={<CabinetryPage />} />
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
