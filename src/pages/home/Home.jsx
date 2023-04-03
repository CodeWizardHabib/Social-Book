import React from "react";
import HeroSlider from "../../components/ui/HeroSlider";
import HomeAbout from "./HomeAbout";
import "./Home.css";
export default function Home() {
  return (
    <div className="home-page">
      <HeroSlider />
      <HomeAbout />
    </div>
  );
}
