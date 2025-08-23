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
import TestPage from "./pages/PreLoader";
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
import PivotDoor from "./pages/products/PivotDoor";
import SlideDoor from "./pages/products/SlideDoor";
import HingedDoors from "./pages/products/HingedDoors";
import CollectionPage from "./pages/CollectionPage";
import ConfiguratorPage from "./pages/ConfiguratorPage";
import ConsciousNcrafts from "./pages/ConsciousNcrafts";
import VideoScroller from "./components/commonComponent/VideoScroller";
import FlushToWall from "./pages/products/FlushToWall";
import WallPartition from "./pages/products/WallPartition";
import Biosirie from "./pages/products/Biosirie";
import Material from "./pages/products/Material";
import MeetTheMakerPage from "./pages/zebrano/MeetTheMakerPage";
import GlitchImage from "./components/commonComponent/GlitchImage";
import OurStory from "./pages/zebrano/OurStory";
import ServicesPage from "./pages/zebrano/ServicesPage";
import DragableSlider from "./components/commonComponent/DragableSlider";
import ZebranoPreLoader from "./rootLayout/ZebranoPreLoader";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route element={<RootLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/test" element={<TestPage />} />
          <Route path="/test2" element={<DragableSlider/>} />
          <Route path="/test3" element={<ZebranoPreLoader/>} />
          <Route path="/architects" element={<ArchitectPage />} />
          <Route path="/inspiration" element={<InspirationPage />} />
          <Route path="/terms" element={<TermsAndConditions />} />
          <Route path="/privacy-Policy" element={<PrivecyPolicy />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/collection" element={<CollectionPage />} />
          <Route path="/collections/GlassCollection" element={<GlassCollection />}/>
          <Route path="/collections/FineerCollection" element={<FineerCollection />} />
          <Route path="/collections/ThreeDCollection" element={<ThreeDCollection />} />
          <Route path="/collections/AtelierCollection" element={<AtelierCollection />}/>
          <Route path="/products" element={<CabinetryPage />} />
          <Route path="/products/PivotDoor" element={<PivotDoor />} />
          <Route path="/products/SlideDoor" element={<SlideDoor />} />
          <Route path="/products/HingedDoors" element={<HingedDoors />} />
          <Route path="/products/flushTowall" element={<FlushToWall />} />
          <Route path="/products/wallPartition" element={<WallPartition />} />
          <Route path="/products/biosirie" element={<Biosirie />} />
          <Route path="/products/material" element={<Material />} />
          <Route path="/aboutus" element={<AboutUsPage />} />
          <Route path="/aboutus/ourStory" element={<OurStory />} />
          <Route path="/aboutus/ConsciousNcrafts" element={<ConsciousNcrafts />} />
          <Route path="/aboutus/services" element={<ServicesPage />} />
          <Route path="/aboutus/theMakers" element={<MeetTheMakerPage />} />
          <Route path="/configurator" element={<ConfiguratorPage />} />
          <Route path="/VideoScroller" element={<VideoScroller />} />
          <Route path="/GlitchImage" element={<GlitchImage />} />
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
