import React from 'react';
import WhyChooseUs from '@/app/components/Shared/WhyChooseUs';
import PatientReviews from '@/app/components/Shared/PatientReviews';
import AboutUs from '@/app/components/Shared/AboutUs';
import PageHeader from '@/app/components/Shared/PageHeader';
import MissionVision from '@/app/components/Shared/MissionVision';

export const metadata = {
  title: 'About Us | Sonaimuri Maa O Shishu Hospital',
  description: 'Learn about our mission to provide world-class maternal, neonatal, and pediatric healthcare in Noakhali.',
};

export default function AboutPage() {
  return (
    <div>
         <PageHeader 
            title="About Our Hospital" 
            breadcrumb="About Us" 
        />
         <MissionVision/>
         <AboutUs/>
         <WhyChooseUs/>
         <PatientReviews/>
    </div>
  );
}