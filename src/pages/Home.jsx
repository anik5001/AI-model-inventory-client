import React from "react";
import HeroSlider from "../components/Slider/HeroSlider";
import LatestModels from "./LatestModels";
import AboutAiModelSection from "../components/AboutAiModel/AboutAiModelSection";
import GetStarted from "../components/GetStartedSection/GetStarted";
import Services from "../components/Services/Services";
import Testimonials from "../components/Testimonials/Testimonials";
import FAQ from "../components/FAQ/FAQ";
import Newsletter from "../components/Newsletter/Newsletter";

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
      <div>
        <Services></Services>
      </div>
      {/* About Ai Models section */}
      <div id="about">
        <AboutAiModelSection></AboutAiModelSection>
      </div>
      <div>
        <Testimonials></Testimonials>
      </div>
      {/* Get Started Section */}
      <div>
        <FAQ></FAQ>
      </div>
      <div>
        <Newsletter></Newsletter>
      </div>
      <div id="getStarted" className="my-10 ">
        <GetStarted></GetStarted>
      </div>
    </>
  );
};

export default Home;
