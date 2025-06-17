import React, { useEffect } from "react";
import SetTitle from "../../Hooks/SetTitle";

const PrivacyPolicy = () => {
  SetTitle(`Privacy Policy`);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <div className="max-w-2xl mx-auto p-6 min-h-screen">
      <h2 className="text-3xl font-bold mb-6 text-center text-primary">Privacy Policy</h2>

      <div className="space-y-4 text-base-content">
        <section>
          <h2 className="text-2xl font-semibold mb-2">1. Introduction</h2>
          <p>We value your privacy and are committed to protecting your personal information. This Privacy Policy explains what information we collect, how we use it, and your choices regarding your data.</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">2. Information We Collect</h2>
          <p>We may collect the following information when you use our service:</p>
          <ul className="list-disc ml-6">
            <li>Personal information (name, email, phone number)</li>
            <li>Booking details and preferences</li>
            <li>Device and usage information</li>
            <li>Cookies and similar technologies</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">3. How We Use Your Information</h2>
          <p>We use your information to:</p>
          <ul className="list-disc ml-6">
            <li>Provide and improve our services</li>
            <li>Process payments and send confirmations</li>
            <li>Improve customer service and respond to inquiries</li>
            <li>Comply with legal obligations</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">4. Your Rights</h2>
          <p>You have the following rights over your data:</p>
          <ul className="list-disc ml-6">
            <li>To view, update, or delete your personal information</li>
            <li>To withdraw consent at any time</li>
            <li>To opt out of marketing communications</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">5. Contact</h2>
          <p>
            If you have questions about this Privacy Policy, please contact us at{" "}
            <a className="link link-primary" href="mailto:information@fluently.com">
              information@fluently.com
            </a>
            .
          </p>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
