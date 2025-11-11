import React from "react";
import HeroSlider from "../components/Slider/HeroSlider";
import LatestModels from "./LatestModels";
import AboutAiModelSection from "../components/AboutAiModel/AboutAiModelSection";
import GetStarted from "../components/GetStartedSection/GetStarted";

const Home = () => {
  return (
    <>
      <div>
        {" "}
        <HeroSlider></HeroSlider>
      </div>

      {/* latest 6 ai models */}
      <div id="Ai-feature" className="my-10">
        <LatestModels></LatestModels>
      </div>
      {/* About Ai Models section */}
      <div id="about">
        <AboutAiModelSection></AboutAiModelSection>
      </div>
      {/* Get Started Section */}

      <div id="getStarted">
        <GetStarted></GetStarted>
      </div>
    </>
  );
};

export default Home;
