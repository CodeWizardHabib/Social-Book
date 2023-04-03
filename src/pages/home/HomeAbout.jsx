import React from "react";
import About from "../../layouts/about/About";
import ViewPostCard from "./ViewPostCard";
export default function HomeAbout() {
  return (
    <div className="about-section-home">
      <About />
      <ViewPostCard />
    </div>
  );
}
