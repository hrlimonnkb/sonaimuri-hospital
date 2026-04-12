import PageHeader from '@/app/components/Shared/PageHeader';
import SpecialistDepartments from '@/app/components/Shared/SpecialistDepartments';
import React from 'react';

export const metadata = {
  title: 'Our Departments | Sonaimuri Maa O Shishu Hospital',
  description: 'Explore the specialized medical departments at Sonaimuri Maa O Shishu Hospital. We offer expert care in Gynecology, Pediatrics, Cardiology, and more.',
};

export default function DepartmentsPage() {
  return (
    <main>
      <PageHeader 
        title="Our Departments" 
        breadcrumb="Departments" 
      />
      <div className="-mt-10 relative z-20">
        <SpecialistDepartments hideHeader={true} />
      </div>

    </main>
  );
}