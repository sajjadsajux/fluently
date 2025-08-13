import { useEffect } from "react";
import { toast } from "react-toastify";
import { Mail, Phone, MapPin, Send } from "lucide-react";
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
      <h2 className="text-3xl text-center mb-12 text-primary font-bold">Contact Us</h2>

      <div className="max-w-xl mx-auto my-8 p-4 rounded-xl shadow-2xl bg-gradient-to-br from-white via-gray-50 to-blue-50/30 border border-gray-200/50 backdrop-blur-sm relative overflow-hidden">
        {/* Subtle decorative elements */}
        <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-primary/10 to-purple-500/10 rounded-full -translate-y-8 translate-x-8"></div>
        <div className="absolute bottom-0 left-0 w-12 h-12 bg-gradient-to-tr from-blue-500/10 to-primary/10 rounded-full translate-y-6 -translate-x-6"></div>

        <div className="relative z-10">
          {/* Contact Info Section */}
          <div className="mb-6 text-center space-y-1 text-sm">
            <div className="flex items-center justify-center mb-3">
              <div className="w-10 h-10 bg-gradient-to-r from-primary to-blue-600 rounded-full flex items-center justify-center shadow-lg">
                <Mail className="w-5 h-5 text-white" />
              </div>
            </div>
            <h2 className="text-xl font-bold text-gray-800">Get in Touch</h2>

            <div className="flex items-center justify-center space-x-2 text-gray-700 hover:text-primary transition-colors group">
              <Phone className="w-3 h-3 group-hover:scale-110 transition-transform" />
              <p>
                <strong>Phone:</strong>{" "}
                <a href="tel:+8801820646469" className="text-primary hover:underline font-medium">
                  01820646469
                </a>
              </p>
            </div>

            <div className="flex items-center justify-center space-x-2 text-gray-700 hover:text-primary transition-colors group">
              <Mail className="w-3 h-3 group-hover:scale-110 transition-transform" />
              <p>
                <strong>Email:</strong>{" "}
                <a href="mailto:info@fluently.com" className="text-primary hover:underline font-medium">
                  info@fluently.com
                </a>
              </p>
            </div>

            <div className="flex items-center justify-center space-x-2 text-gray-700 group">
              <MapPin className="w-3 h-3 group-hover:scale-110 transition-transform" />
              <p>
                <strong>Address:</strong> Dhaka, Bangladesh
              </p>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-3 text-sm">
            <div className="relative group">
              <input
                required
                type="text"
                name="name"
                placeholder="Your Name"
                className="w-full px-2 py-1.5 rounded-lg border border-gray-300/60 bg-white/80 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent hover:border-primary/50 hover:bg-white transition-all duration-200 shadow-sm hover:shadow-md"
              />
              <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-primary/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
            </div>

            <div className="relative group">
              <input
                required
                type="email"
                name="email"
                placeholder="Email Address"
                className="w-full px-2 py-1.5 rounded-lg border border-gray-300/60 bg-white/80 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent hover:border-primary/50 hover:bg-white transition-all duration-200 shadow-sm hover:shadow-md"
              />
              <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-primary/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
            </div>

            <div className="relative group">
              <input
                required
                type="text"
                name="subject"
                placeholder="Subject"
                className="w-full px-2 py-1.5 rounded-lg border border-gray-300/60 bg-white/80 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent hover:border-primary/50 hover:bg-white transition-all duration-200 shadow-sm hover:shadow-md"
              />
              <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-primary/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
            </div>

            <div className="relative group">
              <textarea
                required
                name="message"
                rows="4"
                placeholder="Your Message"
                className="w-full px-2 py-1.5 rounded-lg border border-gray-300/60 bg-white/80 placeholder-gray-500 resize-none focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent hover:border-primary/50 hover:bg-white transition-all duration-200 shadow-sm hover:shadow-md"
              />
              <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-primary/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
            </div>

            <button type="submit" className="w-full py-2 bg-gradient-to-r from-primary to-blue-600 text-white rounded-lg font-medium hover:from-primary/90 hover:to-blue-700 active:scale-95 transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2">
              <Send className="w-4 h-4" />
              <span>Send Message</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
