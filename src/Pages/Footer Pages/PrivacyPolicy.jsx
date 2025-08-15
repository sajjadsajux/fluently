import React, { useEffect } from "react";
import SetTitle from "../../Hooks/SetTitle";

const PrivacyPolicy = () => {
  SetTitle(`Privacy Policy`);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <section className="container mx-auto px-4 py-12 min-h-screen">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-2xl p-6 md:p-10 border border-gray-200">
        {/* Page Header */}
        <h1 className="text-4xl font-bold text-center text-primary mb-8">Privacy Policy</h1>

        <div className="space-y-8 text-gray-700">
          {/* Section 1 */}
          <section>
            <h2 className="text-2xl font-semibold mb-3">1. Introduction</h2>
            <p>We value your privacy and are committed to protecting your personal information. This Privacy Policy explains what information we collect, how we use it, and your choices regarding your data.</p>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="text-2xl font-semibold mb-3">2. Information We Collect</h2>
            <p>We may collect the following information when you use our service:</p>
            <ul className="list-disc ml-6 mt-2 space-y-1">
              <li>Personal information (name, email, phone number)</li>
              <li>Booking details and preferences</li>
              <li>Device and usage information</li>
              <li>Cookies and similar technologies</li>
            </ul>
          </section>

          {/* Section 3 */}
          <section>
            <h2 className="text-2xl font-semibold mb-3">3. How We Use Your Information</h2>
            <p>We use your information to:</p>
            <ul className="list-disc ml-6 mt-2 space-y-1">
              <li>Provide and improve our services</li>
              <li>Process payments and send confirmations</li>
              <li>Improve customer service and respond to inquiries</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          {/* Section 4 */}
          <section>
            <h2 className="text-2xl font-semibold mb-3">4. Your Rights</h2>
            <p>You have the following rights over your data:</p>
            <ul className="list-disc ml-6 mt-2 space-y-1">
              <li>To view, update, or delete your personal information</li>
              <li>To withdraw consent at any time</li>
              <li>To opt out of marketing communications</li>
            </ul>
          </section>

          {/* Section 5 */}
          <section>
            <h2 className="text-2xl font-semibold mb-3">5. Contact</h2>
            <p>
              If you have questions about this Privacy Policy, please contact us at{" "}
              <a className="text-primary hover:underline font-medium" href="mailto:information@fluently.com">
                information@fluently.com
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
