import React from "react";
import AboutItem from "./AboutItem";
import infoIcon from "../../assets/icons8-info-50.png";
import thumbsUp from "../../assets/icons8-thumbs-up-66.png";
import locationIcon from "../../assets/icons8-address-50.png";
import aboutCompanyIcon from "../../assets/icons8-organization-64.png";
import globeIcon from "../../assets/icons8-geography-50.png";
import { about } from "../../constants/about";
import "./About.css";
export default function About() {
  const {
    aboutItem,
    aboutCommunity,
    aboutLikes,
    aboutFollowers,
    peopleCheckedIn,
    aboutCompany,
  } = about;

  return (
    <div className="about">
      <h1>About</h1>
      <AboutItem img={infoIcon} itemDescription={aboutItem} />
      <AboutItem img={infoIcon} itemDescription={aboutCommunity} />
      <AboutItem img={thumbsUp} itemDescription={aboutLikes} />
      <AboutItem img={globeIcon} itemDescription={aboutFollowers} />
      <AboutItem img={locationIcon} itemDescription={peopleCheckedIn} />
      <AboutItem img={aboutCompanyIcon} itemDescription={aboutCompany} />
    </div>
  );
}
