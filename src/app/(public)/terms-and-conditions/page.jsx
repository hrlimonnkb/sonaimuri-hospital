import PageHeader from '@/app/components/Shared/PageHeader';
import React from 'react';

export const metadata = {
  title: 'Terms and Conditions | Sonaimuri Maa O Shishu Hospital',
  description: 'Read the terms and conditions for using the Sonaimuri Maa O Shishu Hospital website and online appointment services.',
};

export default function TermsAndConditionsPage() {
  return (
    <main>
      <PageHeader 
        title="Terms and Conditions" 
        breadcrumb="Terms & Conditions" 
      />

      <section className="py-14 lg:py-20 px-5">
        <div className="max-width-wrapper bg-white rounded-3xl shadow-sm border border-[#D3BFDF]/30 p-8 md:p-12">
          
          <div className="prose prose-purple max-w-none text-gray-600 space-y-8">
            
            {/* Last Updated */}
            <p className="text-sm font-bold text-[#916BBF] uppercase tracking-wider mb-8">
              Last Updated: April 2026
            </p>

            <div>
              <h2 className="text-2xl font-black text-[#512D6D] mb-4">1. Acceptance of Terms</h2>
              <p className="leading-relaxed">
                By accessing and using the <strong>Sonaimuri Maa O Shishu Hospital</strong> website (smosh.bd), you accept and agree to be bound by the terms and provisions of this agreement. If you do not agree to abide by these terms, please do not use this service.
              </p>
            </div>

            <div className="bg-[#F3E8FF] border-l-4 border-[#512D6D] p-6 rounded-r-2xl my-8">
              <h2 className="text-xl font-black text-[#512D6D] mb-2">2. Medical Disclaimer (Not Medical Advice)</h2>
              <p className="leading-relaxed text-[#512D6D]">
                <strong>The content on this website is for informational purposes only.</strong> It is not intended to be a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition. In the event of a medical emergency, immediately call our emergency hotline or visit the nearest hospital.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-black text-[#512D6D] mb-4">3. Appointments and Serials</h2>
              <p className="leading-relaxed mb-4">When booking an appointment or serial through our website or via phone:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>You agree to provide accurate, current, and complete information.</li>
                <li>Appointment times are estimated. Due to medical emergencies, doctors may be delayed. We appreciate your patience.</li>
                <li>If you are unable to attend your scheduled appointment, please contact the reception to cancel or reschedule at least 2 hours in advance to allow other patients to receive care.</li>
                <li>The hospital reserves the right to cancel or reschedule appointments due to doctor unavailability or unforeseen emergencies.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-black text-[#512D6D] mb-4">4. User Conduct</h2>
              <p className="leading-relaxed mb-4">
                You agree to use the website only for lawful purposes. You are prohibited from:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 mt-4">
                <li>Submitting false or misleading information through our contact or appointment forms.</li>
                <li>Attempting to interfere with the website's network security or functionality.</li>
                <li>Using the website to harass, abuse, or harm another person or hospital staff.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-black text-[#512D6D] mb-4">5. Intellectual Property Rights</h2>
              <p className="leading-relaxed">
                All content, trademarks, logos, and service marks displayed on this website are the property of Sonaimuri Maa O Shishu Hospital or their respective owners. You are not permitted to use these materials without our prior written consent.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-black text-[#512D6D] mb-4">6. Limitation of Liability</h2>
              <p className="leading-relaxed mb-4">
                Sonaimuri Maa O Shishu Hospital and its staff shall not be liable for any direct, indirect, incidental, consequential, or punitive damages arising out of your access to, or use of, the website. This includes damages to, or viruses that may infect, your computer equipment or other property.
              </p>
            </div>
            
            <div>
              <h2 className="text-2xl font-black text-[#512D6D] mb-4">7. Changes to Terms</h2>
              <p className="leading-relaxed mb-4">
                We reserve the right to modify these Terms and Conditions at any time without prior notice. Your continued use of the website following any changes constitutes your acceptance of the new Terms.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-black text-[#512D6D] mb-4">8. Contact Information</h2>
              <p className="leading-relaxed mb-4">
                If you have any questions or concerns regarding these Terms and Conditions, please contact us:
              </p>
              <div className="bg-[#FAFAFE] p-6 rounded-2xl border border-gray-100 font-medium">
                <p className="text-[#512D6D] font-black text-lg mb-2">Sonaimuri Maa O Shishu Hospital</p>
                <p>100 Yards East of Sonaimuri Thana,</p>
                <p>(Opp. Shwapno Super Shop),</p>
                <p>Sonaimuri, Noakhali, Bangladesh.</p>
                <p className="mt-4">
                  <strong>Phone:</strong> <a href="tel:+8801705319271" className="text-[#916BBF] hover:underline">01705-319271</a>
                </p>
                <p>
                  <strong>Email:</strong> <a href="mailto:info@smosh.bd" className="text-[#916BBF] hover:underline">info@smosh.bd</a>
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}