// src/app/(public)/page.js

import AboutUs from "../components/Home/AboutUs";
import HeroSlider from "../components/Home/HeroSlider";
import ServiceHighlights from "../components/Home/ServiceHighlights";

export default function HomePage() {
  return (
    <div>
      <HeroSlider />
      <ServiceHighlights/>
      <AboutUs/>
    </div>
  );
}