// src/app/(public)/page.js

import AboutUs from "../components/Shared/AboutUs";
import BlogSection from "../components/Home/BlogSection";
import DoctorsSection from "../components/Home/DoctorsSection";
import HeroSlider from "../components/Home/HeroSlider";
import ServiceHighlights from "../components/Home/ServiceHighlights";
import SpecialistDepartments from "../components/Home/SpecialistDepartments";
import PatientReviews from "../components/Shared/PatientReviews";
import WhyChooseUs from "../components/Shared/WhyChooseUs";

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