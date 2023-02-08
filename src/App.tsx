import type { Component } from "solid-js";
import { Router, Routes, Route } from "@solidjs/router";
import Navbar from "./navbar";
import Footer from "./footer";

import HomePage from "./pages/Home";
import Odd from "./pages/odd";
import ClipsPage from "./pages/Clips";
import StatsPage from "./pages/Stats";

const App: Component = () => {
  return (
    <Router>
      <div
        style={
          "background: radial-gradient( circle, rgba(49, 40, 51, 1) 0%, rgba(39, 31, 40, 1) 31%, rgba(28, 22, 29, 1) 61%, rgba(21, 18, 22, 1) 100% );"
        }
        class="font-sans leading-normal tracking-normal min-h-screen"
      >
        <Navbar />
        <div class="bg-gray-400">
          <Routes>
            <Route path="/" component={HomePage} />
            <Route path="/clips" component={ClipsPage} />
            <Route path="/stats" component={StatsPage} />
            <Route path="/odd" component={Odd} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
