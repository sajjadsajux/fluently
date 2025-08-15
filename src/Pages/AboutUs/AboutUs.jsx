import { useEffect } from "react";
import SetTitle from "../../Hooks/SetTitle";

const AboutUs = () => {
  SetTitle(`About Us`);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <section className="container mx-auto py-12 max-w-5xl text-gray-800">
      <h2 className="text-4xl text-center mb-12 text-primary font-bold">About Us</h2>

      <div className="space-y-6 text-lg leading-relaxed">
        <p>Welcome to Fluently! We are passionate about connecting learners with expert tutors worldwide. Our platform provides flexible and personalized tutoring sessions to help you achieve your language learning goals confidently.</p>

        <p>Language learning is more than memorizing vocabulary and grammar—it's about understanding cultures, building connections, and gaining confidence in real-life communication. Our tutors focus on interactive lessons tailored to your needs.</p>

        <p>Whether improving conversational skills, preparing for exams, or exploring new cultures, our dedicated tutors guide you every step. We select tutors who are knowledgeable, patient, encouraging, and passionate about teaching.</p>

        <p>Our user-friendly platform lets you browse tutor profiles, read reviews, book sessions, and manage your schedule—all from home. We support multiple languages, including English, French, Spanish, Chinese, Arabic, Russian, and more.</p>

        <p>Join thousands of students who have transformed their language skills with Fluently. Our mission is to make language learning accessible, affordable, and enjoyable for everyone.</p>

        <p>Ready to start your language journey? Explore our tutors, find the perfect match, and take the first step toward fluency today!</p>
      </div>

      <div className="mt-16 text-center">
        <h3 className="text-3xl font-semibold mb-8">Our Values</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6  mx-auto">
          {[
            {
              title: "Quality Education",
              desc: "We provide the highest tutoring standards by carefully vetting tutors and ensuring productive, engaging sessions.",
            },
            {
              title: "Accessibility",
              desc: "Learning a language should be available to everyone. We offer affordable pricing and flexible scheduling.",
            },
            {
              title: "Community",
              desc: "We foster a welcoming environment where learners and tutors can connect, share knowledge, and grow together.",
            },
            {
              title: "Innovation",
              desc: "We use cutting-edge technology to enhance the learning experience—making it interactive, efficient, and enjoyable.",
            },
            {
              title: "Diversity",
              desc: "We celebrate cultural diversity by offering many languages and promoting understanding across cultures.",
            },
            {
              title: "Integrity",
              desc: "We operate with honesty and transparency, ensuring trust between our tutors and learners at every step.",
            },
          ].map((value, idx) => (
            <div key={idx} className="bg-white shadow-lg rounded-xl p-6 hover:shadow-xl transition-shadow">
              <h4 className="font-semibold text-xl mb-2 text-primary">{value.title}</h4>
              <p className="text-gray-700">{value.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
