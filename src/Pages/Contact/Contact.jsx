import { useEffect } from "react";
import { toast } from "react-toastify";
import SetTitle from "../../Hooks/SetTitle";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    toast.success("Thank you for contacting us! We will get back to you soon.");
    e.target.reset();
  };

  SetTitle(`Contact Us`);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <section className="container mx-auto py-10 min-h-screen px-4 md:px-0">
      <h2 className="text-4xl font-semibold text-center mb-12 text-primary">Contact Us</h2>
      <div className="max-w-3xl mx-auto my-12 p-8  rounded-2xl shadow-xl border border-white">
        <div className="mb-12 text-center space-y-3">
          <h2 className="text-3xl font-extrabold  ">Get in Touch</h2>
          <p className=" ">
            <strong>Phone:</strong>{" "}
            <a href="tel:+8801629202095" className="text-primary hover:underline">
              01629202095
            </a>
          </p>
          <p className=" ">
            <strong>Email:</strong>{" "}
            <a href="mailto:info@fluently.com" className="text-primary hover:underline">
              info@fluently.com
            </a>
          </p>
          <p className=" ">
            <strong>Address:</strong> 312 Lovely Street, NY
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <input
            required
            type="text"
            name="name"
            placeholder="Your Full Name"
            className="w-full px-2 py-2 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-primary/50 transition"
          />

          <input
            required
            type="email"
            name="email"
            placeholder="Email Address"
            className="w-full px-2 py-2 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-primary/50 transition"
          />

          <input
            required
            type="text"
            name="subject"
            placeholder="Subject"
            className="w-full px-2 py-2 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-primary/50 transition"
          />

          <textarea
            required
            name="message"
            rows="5"
            placeholder="Your Message"
            className="w-full px-2 py-2 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 placeholder-gray-400 resize-none focus:outline-none focus:ring-4 focus:ring-primary/50 transition"
          />

          <button type="submit" className="w-full py-4 bg-primary text-white rounded-xl font-semibold hover:bg-primary-focus active:scale-95 transition-transform">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
