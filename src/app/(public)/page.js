// src/app/(public)/page.js

import AboutUs from "../components/Shared/AboutUs";
import BlogSection from "../components/Home/BlogSection";
import DoctorsSection from "../components/Home/DoctorsSection";
import HeroSlider from "../components/Home/HeroSlider";
import ServiceHighlights from "../components/Home/ServiceHighlights";
import PatientReviews from "../components/Shared/PatientReviews";
import WhyChooseUs from "../components/Shared/WhyChooseUs";
import SpecialistDepartments from "../components/Shared/SpecialistDepartments";

export default function HomePage() {
  return (
    <div>
      <HeroSlider />
      <ServiceHighlights/>
      <AboutUs/>
      <SpecialistDepartments/>
      <DoctorsSection/>
      <WhyChooseUs/>
      <PatientReviews/>
      <BlogSection/>
    </div>
  );
}