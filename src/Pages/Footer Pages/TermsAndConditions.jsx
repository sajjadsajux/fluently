import React, { useEffect } from "react";
import SetTitle from "../../Hooks/SetTitle";

const TermsAndConditions = () => {
  SetTitle(`Privacy and Policy`);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <div className="max-w-2xl mx-auto p-6 min-h-screen">
      <h2 className="text-3xl font-bold mb-6 text-center text-primary">Terms and Conditions</h2>

      <div className="space-y-4 text-base-content">
        <section>
          <h2 className="text-2xl font-semibold mb-2">1. Introduction</h2>
          <p>These terms and conditions govern your use of our website and services. By accessing or using our service, you agree to be bound by these terms in their entirety.</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">2. User Responsibilities</h2>
          <p>As a user of our service, you agree to:</p>
          <ul className="list-disc ml-6">
            <li>Provide accurate and up-to-date information</li>
            <li>Comply with all applicable laws and regulations</li>
            <li>Not use the service for unlawful or prohibited purposes</li>
            <li>Respect intellectual property and other users’ rights</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">3. Limitations of Liability</h2>
          <p>To the fullest extent permitted by law, we will not be liable for any direct, indirect, or consequential damages arising from your use of our service.</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">4. Modifications to the Service</h2>
          <p>We reserve the right to modify or discontinue the service at any time, with or without notice. We will not be liable for any modification, suspension, or discontinuance of the service.</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">5. Governing Law</h2>
          <p>These terms shall be governed by and interpreted in accordance with the laws of your jurisdiction.</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">6. Contact</h2>
          <p>
            If you have any questions about these terms, please contact us at{" "}
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

export default TermsAndConditions;
