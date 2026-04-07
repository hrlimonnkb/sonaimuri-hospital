// src/app/(public)/page.js

import AboutUs from "../components/Home/AboutUs";
import DoctorsSection from "../components/Home/DoctorsSection";
import HeroSlider from "../components/Home/HeroSlider";
import ServiceHighlights from "../components/Home/ServiceHighlights";
import SpecialistDepartments from "../components/Home/SpecialistDepartments";

export default function HomePage() {
  return (
    <div>
      <HeroSlider />
      <ServiceHighlights/>
      <AboutUs/>
      <SpecialistDepartments/>
      <DoctorsSection/>
    </div>
  );
}