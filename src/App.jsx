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
import TermsAndConditions from "./pages/TermsAndConditions";
import PrivecyPolicy from "./pages/PrivecyPolicy";
import ContactUs from "./pages/ContactUs";
import GlassCollection from "./pages/collection/GlassCollection";
import FineerCollection from "./pages/collection/FineerCollection";
import ThreeDCollection from "./pages/collection/ThreeDCollection";
import AtelierCollection from "./pages/collection/AtelierCollection";


function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route element={<RootLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/test" element={<TestPage />} />
          <Route path="/architects" element={<ArchitectPage />} />
          <Route path="/inspiration" element={<InspirationPage />} />
          <Route path="/products" element={<CabinetryPage />} />
          <Route path="/aboutus" element={<AboutUsPage />} />
          <Route path="/terms" element={<TermsAndConditions />} />
          <Route path="/privacy-Policy" element={<PrivecyPolicy />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/collections/GlassCollection" element={<GlassCollection />} />
          <Route path="/collections/FineerCollection" element={<FineerCollection />} />
          <Route path="/collections/ThreeDCollection" element={<ThreeDCollection />} />
          <Route path="/collections/AtelierCollection" element={<AtelierCollection />} />

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
