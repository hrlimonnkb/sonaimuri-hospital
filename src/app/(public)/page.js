// src/app/(public)/page.js

import HeroSlider from "../components/Home/HeroSlider";
import ServiceHighlights from "../components/Home/ServiceHighlights";

export default function HomePage() {
  return (
    <div>
      <HeroSlider />
      <ServiceHighlights/>
    </div>
  );
}