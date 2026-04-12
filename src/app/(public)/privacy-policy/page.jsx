import PageHeader from '@/app/components/Shared/PageHeader';
import React from 'react';

export const metadata = {
  title: 'Privacy Policy | Sonaimuri Maa O Shishu Hospital',
  description: 'Learn how Sonaimuri Maa O Shishu Hospital collects, uses, and protects your personal and medical information.',
};

export default function PrivacyPolicyPage() {
  return (
    <main>
      <PageHeader 
        title="Privacy Policy" 
        breadcrumb="Privacy Policy" 
      />

      <section className="py-14 lg:py-20 px-5">
        <div className="max-width-wrapper bg-white rounded-3xl shadow-sm border border-[#D3BFDF]/30 p-8 md:p-12">
          
          <div className="prose prose-purple max-w-none text-gray-600 space-y-8">
            
            {/* Last Updated */}
            <p className="text-sm font-bold text-[#916BBF] uppercase tracking-wider mb-8">
              Last Updated: April 2026
            </p>

            <div>
              <h2 className="text-2xl font-black text-[#512D6D] mb-4">1. Introduction</h2>
              <p className="leading-relaxed">
                Welcome to <strong>Sonaimuri Maa O Shishu Hospital</strong>. We respect your privacy and are committed to protecting your personal data. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website (smosh.bd) or use our medical and appointment services. 
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-black text-[#512D6D] mb-4">2. Information We Collect</h2>
              <p className="leading-relaxed mb-4">We may collect information about you in a variety of ways when you interact with our website. The information we may collect includes:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Personal Data:</strong> Name, phone number, and email address that you voluntarily give us when booking an appointment or filling out our contact form.</li>
                <li><strong>Health & Medical Data:</strong> Any preliminary symptoms, medical history, or consultation details you choose to share with us via our appointment forms. This data is subject to strict medical confidentiality.</li>
                <li><strong>Derivative Data:</strong> Information our servers automatically collect when you access the site, such as your IP address, browser type, and operating system.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-black text-[#512D6D] mb-4">3. How We Use Your Information</h2>
              <p className="leading-relaxed mb-4">Having accurate information about you permits us to provide you with a smooth, efficient, and customized healthcare experience. Specifically, we may use information collected about you via the website to:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Schedule and manage your medical appointments.</li>
                <li>Respond to your inquiries, contact form submissions, and medical emergencies.</li>
                <li>Send you confirmation emails or SMS reminders regarding your serials.</li>
                <li>Improve our website performance and user experience.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-black text-[#512D6D] mb-4">4. Patient Confidentiality & Data Sharing</h2>
              <p className="leading-relaxed mb-4">
                As a healthcare provider, maintaining your medical privacy is our highest priority. <strong>We do not sell, trade, or rent your personal or medical information to third parties.</strong>
              </p>
              <p className="leading-relaxed">
                We may share your information only in the following specific situations:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 mt-4">
                <li><strong>With Medical Professionals:</strong> Your data may be shared with our doctors, nurses, and medical staff solely for the purpose of providing you with medical diagnosis and treatment.</li>
                <li><strong>By Law or to Protect Rights:</strong> If we believe the release of information about you is necessary to respond to legal process, or to investigate or remedy potential violations of our policies.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-black text-[#512D6D] mb-4">5. Security of Your Information</h2>
              <p className="leading-relaxed">
                We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-black text-[#512D6D] mb-4">6. Your Rights</h2>
              <p className="leading-relaxed mb-4">
                You have the right to request access to the personal data we hold about you, to ask that your personal data be corrected, updated, or deleted. If you would like to exercise any of these rights, please contact our reception team.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-black text-[#512D6D] mb-4">7. Contact Us</h2>
              <p className="leading-relaxed mb-4">
                If you have questions or comments about this Privacy Policy, please contact us at:
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