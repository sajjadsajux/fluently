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
      <h2 className="text-3xl  text-center mb-12 text-primary  font-bold ">Contact Us</h2>
      <div className="max-w-xl mx-auto my-8 p-4 rounded-xl shadow-md border border-white">
        <div className="mb-6 text-center space-y-1 text-sm ">
          <h2 className="text-xl font-bold">Get in Touch</h2>
          <p>
            <strong>Phone:</strong>{" "}
            <a href="tel:+8801629202095" className="text-primary hover:underline">
              01629202095
            </a>
          </p>
          <p>
            <strong>Email:</strong>{" "}
            <a href="mailto:info@fluently.com" className="text-primary hover:underline">
              info@fluently.com
            </a>
          </p>
          <p>
            <strong>Address:</strong> 312 Lovely Street, NY
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-3 text-sm">
          <input required type="text" name="name" placeholder="Your Name" className="w-full px-2 py-1.5 rounded-lg border border-base-300 bg-base-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary" />

          <input required type="email" name="email" placeholder="Email Address" className="w-full px-2 py-1.5 rounded-lg border border-base-300 bg-base-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary" />

          <input required type="text" name="subject" placeholder="Subject" className="w-full px-2 py-1.5 rounded-lg border border-base-300 bg-base-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary" />

          <textarea required name="message" rows="4" placeholder="Your Message" className="w-full px-2 py-1.5 rounded-lg border border-base-300 bg-base-100 placeholder-gray-500 resize-none focus:outline-none focus:ring-2 focus:ring-primary" />

          <button type="submit" className="w-full py-2 bg-primary text-white rounded-lg font-medium hover:bg-primary-focus active:scale-95 transition-transform">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
