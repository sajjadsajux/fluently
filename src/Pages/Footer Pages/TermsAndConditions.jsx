import React, { useEffect } from "react";
import SetTitle from "../../Hooks/SetTitle";

const TermsAndConditions = () => {
  SetTitle(`Terms and Conditions`);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <section className="container mx-auto px-4 py-12 min-h-screen">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-2xl p-6 md:p-10 border border-gray-200">
        {/* Page Header */}
        <h1 className="text-4xl font-bold text-center text-primary mb-8">Terms and Conditions</h1>

        <div className="space-y-8 text-gray-700">
          {/* Section 1 */}
          <section>
            <h2 className="text-2xl font-semibold mb-3">1. Introduction</h2>
            <p>These terms and conditions govern your use of our website and services. By accessing or using our service, you agree to be bound by these terms in their entirety.</p>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="text-2xl font-semibold mb-3">2. User Responsibilities</h2>
            <p>As a user of our service, you agree to:</p>
            <ul className="list-disc ml-6 mt-2 space-y-1">
              <li>Provide accurate and up-to-date information</li>
              <li>Comply with all applicable laws and regulations</li>
              <li>Not use the service for unlawful or prohibited purposes</li>
              <li>Respect intellectual property and other users’ rights</li>
            </ul>
          </section>

          {/* Section 3 */}
          <section>
            <h2 className="text-2xl font-semibold mb-3">3. Limitations of Liability</h2>
            <p>To the fullest extent permitted by law, we will not be liable for any direct, indirect, or consequential damages arising from your use of our service.</p>
          </section>

          {/* Section 4 */}
          <section>
            <h2 className="text-2xl font-semibold mb-3">4. Modifications to the Service</h2>
            <p>We reserve the right to modify or discontinue the service at any time, with or without notice. We will not be liable for any modification, suspension, or discontinuance of the service.</p>
          </section>

          {/* Section 5 */}
          <section>
            <h2 className="text-2xl font-semibold mb-3">5. Governing Law</h2>
            <p>These terms shall be governed by and interpreted in accordance with the laws of your jurisdiction.</p>
          </section>

          {/* Section 6 */}
          <section>
            <h2 className="text-2xl font-semibold mb-3">6. Contact</h2>
            <p>
              If you have any questions about these terms, please contact us at{" "}
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

export default TermsAndConditions;
