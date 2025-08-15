import React, { use } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../../Contexts/AuthContext";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaSquareThreads, FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => {
  const { user } = use(AuthContext);

  return (
    <div className="px-4 pt-12 mx-auto sm:max-w-xl md:max-w-full lg:w-full md:px-24 lg:px-8 bg-primary text-white">
      <div className="grid gap-12 row-gap-10 mb-8 sm:grid-cols-2 lg:grid-cols-4 container mx-auto">
        {/* Company Logo & Description */}
        <div>
          <h2 className="text-3xl font-bold tracking-wide">
            Fluent<span className="text-secondary">ly</span>
          </h2>
          <div className="mt-6 max-w-sm">
            <p className="text-sm">Learn and speak the world’s languages with ease</p>
            <p className="mt-4 text-sm">Fluently is a modern online platform where users can easily connect with expert language guides. Whether you're a beginner or brushing up your fluency, Fluently helps you learn and speak the world’s languages with ease.</p>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:block">
          <h4 className="mb-4 text-md font-semibold ">Navigation</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <NavLink to="/" className="hover:underline">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/find-tutors" className="hover:underline">
                Browse Tutors
              </NavLink>
            </li>
            {user && (
              <>
                <li>
                  <NavLink to="/add-tutorials" className="hover:underline">
                    Add Tutorials
                  </NavLink>
                </li>
                <li>
                  <NavLink to={`/my-tutorials/${user.email}`} className="hover:underline">
                    My Tutorials
                  </NavLink>
                </li>
                <li>
                  <NavLink to={`/my-booked-tutors/${user.email}`} className="hover:underline">
                    My Booked Tutors
                  </NavLink>
                </li>
              </>
            )}
          </ul>
        </div>

        {/* Contacts */}
        <div>
          <h4 className="mb-4 text-md font-semibold">Contacts</h4>
          <ul className="space-y-2 text-sm">
            <li className="flex">
              <span className="mr-2">Phone:</span>
              <a href="tel:01820646469" className="hover:underline">
                01820646469
              </a>
            </li>
            <li className="flex">
              <span className="mr-2">Email:</span>
              <a href="mailto:info@fluently.com" className="hover:underline">
                info@fluently.com
              </a>
            </li>
            <li className="flex">
              <span className="mr-2">Address:</span>
              <a href="https://www.google.com/maps" target="_blank" rel="noopener noreferrer" className="hover:underline">
                Dhaka, Bangladesh
              </a>
            </li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h4 className="mb-4 text-md font-semibold">Social</h4>
          <div className="flex items-center space-x-4">
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
              <FaFacebook size={24} />
            </a>
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
              <FaInstagram size={24} />
            </a>
            <a href="https://www.x.com/" target="_blank" rel="noopener noreferrer">
              <FaSquareXTwitter size={24} />
            </a>
            <a href="https://www.threads.com/" target="_blank" rel="noopener noreferrer">
              <FaSquareThreads size={24} />
            </a>
          </div>
          <p className="mt-4 text-sm">Follow us on social media to get the latest updates, tips, and news. Join our community and never miss a moment!</p>
        </div>
      </div>

      {/* Footer Bottom Bar */}
      <div className="flex flex-col-reverse items-center justify-between pt-6 pb-8 border-t border-white/30 lg:flex-row text-sm container mx-auto">
        <p className="mt-4 lg:mt-0">© Copyright 2025 Fluently All rights reserved.</p>
        <ul className="flex flex-wrap justify-center space-x-4">
          <li>
            <Link to="/faq" className="hover:underline">
              F.A.Q
            </Link>
          </li>
          <li>
            <Link to="/privacy-policy" className="hover:underline">
              Privacy Policy
            </Link>
          </li>
          <li>
            <Link to="/terms-and-conditions" className="hover:underline">
              Terms & Conditions
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
