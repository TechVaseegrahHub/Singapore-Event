import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import EventLandingPage from "./pages/EventLandingPage";
import ScrollToTop from "./components/ScrollToTop";

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<EventLandingPage />} />
      </Routes>
    </BrowserRouter>
  );
}