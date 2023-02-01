import type { Component } from "solid-js";
import { Router, Routes, Route } from "@solidjs/router";
import Navbar from "./navbar";
import Footer from "./footer";

import HomePage from "./pages/Home";
import OmossPage from "./pages/OmOss";
import KontaktPage from "./pages/Kontakt";

const App: Component = () => {
  return (
    <Router>
      <div class="bg-gray-800 font-sans leading-normal tracking-normal min-h-screen">
        <Navbar />
        <div class="bg-gray-400">
          <Routes>
            <Route path="/" component={HomePage} />
            <Route path="/omoss" component={OmossPage} />
            <Route path="/kontakt" component={KontaktPage} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
