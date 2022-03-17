import React from "react";
import Navbar from "./components/Navbar/Navbar";
import "./App.css";
import Slider from "./components/Slider/Slider";
import RecipesList from "./components/Api/RecipesList";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Slider />
      <RecipesList />
      <Footer />
    </div>
  );
}

export default App;
