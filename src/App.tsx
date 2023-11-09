import React from "react";
import "./App.css";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import Main from "./Main/Main";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Galery from "./Galery/Galery";
import PriceList from "./PriceList/PriceList";
import { AnimatePresence} from "framer-motion";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AnimatePresence>
            <Header key="header" />
            <Routes>
              <Route path="/*" element={<Main />} />
              <Route path="/galery" element={<Galery />} />
              <Route path="/price-list" element={<PriceList />} />
            </Routes>
            <Footer key="footer" />{" "}
        </AnimatePresence>
      </BrowserRouter>
    </div>
  );
}

export default App;
