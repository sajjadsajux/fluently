import React, { useEffect } from "react";
import SetTitle from "../../Hooks/SetTitle";

const FaqPage = () => {
  SetTitle(`Faqs`);

  const faqs = [
    {
      question: "How do I book a tutor?",
      answer: "Simply browse available tutors, view their profiles, and click the 'Book' button to secure a session.",
    },
    {
      question: "What languages can I learn on Fluently?",
      answer: "Fluently offers a range of languages including English, Spanish, French, German, and more. Browse by category to find a tutor for your preferred language.",
    },
    {
      question: "How do I add my own tutorial?",
      answer: "If you’re a registered tutor, you can add your own tutorial from the 'Add Tutorials' page in your Dashboard.",
    },
    {
      question: "Is there a way to leave a review?",
      answer: "Yes! After booking a tutor, you can leave a review on their profile from the 'My Booked Tutors' page.",
    },
    {
      question: "Who can I contact for help?",
      answer: "If you need help or have questions, please reach us at information@fluently.com or use our 24/7 support chat.",
    },
    {
      question: "Do I need to create an account to book a tutor?",
      answer: "Yes, you need to be a registered and authenticated user to book a tutor or add a tutorial.",
    },
    {
      question: "Can I search for a tutor by price or reviews?",
      answer: "Yes! On the Find Tutors page, you can filter and search by price, reviews, and even by language.",
    },
    {
      question: "What kind of sessions do you offer?",
      answer: "Fluently offers 1-on-1 sessions with tutors, tailored to your goals and preferences.",
    },
    {
      question: "Is the platform mobile-friendly?",
      answer: "Yes, Fluently is fully responsive and designed to work smoothly on smartphones, tablets, and desktops.",
    },
    {
      question: "Are there any free trial sessions?",
      answer: "Some tutors may offer a free trial or a discounted first session. Check their profiles for special offers!",
    },
  ];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="max-w-2xl mx-auto p-6 min-h-screen">
      <h2 className="text-3xl font-bold mb-6 text-center text-primary">Frequently Asked Questions</h2>

      <div className="space-y-4">
        {faqs.map((faq, idx) => (
          <div key={idx} tabIndex={0} className="collapse collapse-arrow bg-base-200 border-white border-2">
            <div className="collapse-title text-lg font-semibold">{faq.question}</div>
            <div className="collapse-content">
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FaqPage;
