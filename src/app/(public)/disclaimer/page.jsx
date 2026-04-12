import PageHeader from '@/app/components/Shared/PageHeader';
import React from 'react';

export const metadata = {
  title: 'Medical Disclaimer | Sonaimuri Maa O Shishu Hospital',
  description: 'Important medical disclaimers regarding the use of the Sonaimuri Maa O Shishu Hospital website and its content.',
};

export default function DisclaimerPage() {
  return (
    <main>
      <PageHeader 
        title="Medical Disclaimer" 
        breadcrumb="Disclaimer" 
      />

      <section className="py-14 lg:py-20 px-5">
        <div className="max-width-wrapper bg-white rounded-3xl shadow-sm border border-[#D3BFDF]/30 p-8 md:p-12">
          
          <div className="prose prose-purple max-w-none text-gray-600 space-y-8">
            
            {/* Last Updated */}
            <p className="text-sm font-bold text-[#916BBF] uppercase tracking-wider mb-8">
              Last Updated: April 2026
            </p>

            {/* Highlighted Critical Warning */}
            <div className="bg-[#F3E8FF] border-l-4 border-[#512D6D] p-6 rounded-r-2xl mb-8">
              <h2 className="text-xl font-black text-[#512D6D] mb-2">1. Not Medical Advice</h2>
              <p className="leading-relaxed text-[#512D6D]">
                The information provided on the <strong>Sonaimuri Maa O Shishu Hospital</strong> website, including text, graphics, images, blogs, and other materials, is for general informational purposes only. <strong>It is NOT intended to be a substitute for professional medical advice, diagnosis, or treatment.</strong> Always seek the direct advice of your physician or a qualified healthcare provider with any questions you may have regarding a medical condition.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-black text-[#512D6D] mb-4">2. Emergency Situations</h2>
              <p className="leading-relaxed">
                Never disregard professional medical advice or delay in seeking it because of something you have read on this website. <strong>If you think you may have a medical emergency, call your local emergency number or go to the nearest hospital emergency department immediately.</strong> Sonaimuri Maa O Shishu Hospital does not recommend or endorse any specific tests, physicians, products, procedures, or opinions mentioned on the website outside of direct consultations.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-black text-[#512D6D] mb-4">3. No Doctor-Patient Relationship</h2>
              <p className="leading-relaxed">
                Use of this website, including submitting inquiries through contact forms or booking an appointment online, does not establish a doctor-patient relationship until you have physically registered at the hospital and are being treated by one of our medical professionals.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-black text-[#512D6D] mb-4">4. Accuracy of Information</h2>
              <p className="leading-relaxed">
                Medical knowledge and practices are constantly evolving. While we strive to keep the information on our website accurate and up-to-date, Sonaimuri Maa O Shishu Hospital makes no guarantees regarding the absolute accuracy, completeness, or timeliness of the content provided. We are not liable for any errors or omissions in the information.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-black text-[#512D6D] mb-4">5. External Links</h2>
              <p className="leading-relaxed">
                Our website may contain links to third-party websites for your convenience or for additional reading (such as in our blog posts). Sonaimuri Maa O Shishu Hospital does not endorse the content of any third-party websites and is not responsible for their medical claims, privacy practices, or overall accuracy.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-black text-[#512D6D] mb-4">6. Contact Information</h2>
              <p className="leading-relaxed mb-4">
                If you have questions regarding this disclaimer, or if you need to schedule a direct consultation for personalized medical advice, please contact us:
              </p>
              <div className="bg-[#FAFAFE] p-6 rounded-2xl border border-gray-100 font-medium">
                <p className="text-[#512D6D] font-black text-lg mb-2">Sonaimuri Maa O Shishu Hospital</p>
                <p>100 Yards East of Sonaimuri Thana,</p>
                <p>(Opp. Shwapno Super Shop),</p>
                <p>Sonaimuri, Noakhali, Bangladesh.</p>
                <p className="mt-4">
                  <strong>Emergency / Serial Hotline:</strong> <a href="tel:+8801705319271" className="text-[#916BBF] hover:underline">01705-319271</a>
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