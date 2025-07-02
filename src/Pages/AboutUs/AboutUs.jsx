import { useEffect } from "react";
import SetTitle from "../../Hooks/SetTitle";

const AboutUs = () => {
  SetTitle(`About Us`);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <section className="container mx-auto py-10 max-w-4xl text-base-content">
      <h2 className="text-3xl  text-center mb-12 text-primary  font-bold  ">About Us</h2>

      <p className="mb-4">Welcome to Fluently! We are passionate about connecting learners with expert tutors from around the world. Our platform provides flexible and personalized tutoring sessions designed to help you achieve your language learning goals quickly and confidently.</p>

      <p className="mb-4">
        At Fluently, we believe that language learning is more than just memorizing vocabulary and grammar. It's about understanding cultures, building connections, and gaining the confidence to communicate effectively in real-life situations. That's why our tutors focus on interactive and engaging
        lessons tailored to your individual needs.
      </p>

      <p className="mb-4">
        Whether you want to improve your conversational skills, prepare for language exams, or explore new cultures through language, our dedicated tutors are here to guide you every step of the way. We carefully select tutors who are not only knowledgeable but also patient, encouraging, and
        passionate about teaching.
      </p>

      <p className="mb-4">Our easy-to-use platform allows you to browse tutor profiles, read reviews, book sessions, and manage your learning schedule—all from the comfort of your home. We support multiple languages, including English, French, Spanish, Chinese, Arabic, Russian, and more.</p>

      <p className="mb-4">Join thousands of happy students who have transformed their language skills with Fluently. Our mission is to make language learning accessible, affordable, and enjoyable for everyone, regardless of background or skill level.</p>

      <p className="mb-4">Ready to start your language journey? Explore our tutors, find the perfect match, and take the first step towards fluency today!</p>

      <div className="mt-8 text-center ">
        <h3 className="text-2xl font-semibold mb-4">Our Values</h3>
        <div className="max-w-4xl mx-auto text-left space-y-6">
          <div>
            <h4 className="font-semibold text-lg">Quality Education</h4>
            <p>We are committed to providing the highest standards of tutoring by carefully vetting our tutors and ensuring every session is productive and engaging.</p>
          </div>
          <div>
            <h4 className="font-semibold text-lg">Accessibility</h4>
            <p>Learning a language should be available to everyone. We offer affordable pricing and flexible scheduling so learners can study at their own pace and convenience.</p>
          </div>
          <div>
            <h4 className="font-semibold text-lg">Community</h4>
            <p>We foster a welcoming and supportive environment where learners and tutors can connect, share knowledge, and grow together.</p>
          </div>
          <div>
            <h4 className="font-semibold text-lg">Innovation</h4>
            <p>We use cutting-edge technology to enhance the learning experience—making it more interactive, efficient, and enjoyable.</p>
          </div>
          <div>
            <h4 className="font-semibold text-lg">Diversity</h4>
            <p>We celebrate cultural diversity by offering a wide range of languages and promoting understanding across different cultures through language learning.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
