import Branches from "../components/Branches";
import CorporateTraining from "../components/CorporateTraining";
import Courses from "../components/Courses";
import FAQ from "../components/FAQ";
import FinalCTA from "../components/FinalCTA";
import Hero from "../components/Hero";
import React from "react";
import TrainerProfile from "../components/TrainerProfile";
import TrainingProcess from "../components/TrainingProcess";
import WhyChooseUs from "../components/WhyChooseUs";

export default function Home() {
  return (
    <main>
      <Hero />
      <WhyChooseUs />
      <Courses />
      <TrainingProcess />
      <CorporateTraining />
      <TrainerProfile />
      <Branches />
      <FAQ />
      <FinalCTA />
    </main>
  );
}
