import React from "react";
import Navbar from "./components/Navbar/Navbar";
import "./App.css";
import Slider from "./components/Slider/Slider";
import RecipeApi from "./components/Api/RecipeApi";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Slider />
      <RecipeApi />
      <Footer />
    </div>
  );
}

export default App;
