import type { Component } from "solid-js";
import { Router, Routes, Route } from "@solidjs/router";
import Navbar from "./navbar";

import HomePage from "./pages/Home";
import OmossPage from "./pages/OmOss";
import KontaktPage from "./pages/Kontakt";

const App: Component = () => {
  return (
    <Router>
      <div class="bg-gray-400 font-sans leading-normal tracking-normal min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" component={HomePage} />
          <Route path="/omoss" component={OmossPage} />
          <Route path="/kontakt" component={KontaktPage} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
