import React, { use, useEffect, useState } from "react";
import { Bounce, toast } from "react-toastify";
import { AuthContext } from "../../Contexts/AuthContext";
import { NavLink } from "react-router";
import { Tooltip } from "react-tooltip";
import { MdOutlineLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";

const Navbar = () => {
  const { user, signOutUser } = use(AuthContext);
  console.log(user);
  const [isDark, setIsDark] = useState(false);

  const handleLogOut = () => {
    signOutUser()
      .then(() => {
        // console.log("sign Out Successfully");
        toast("You have successfully logged out", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
      })
      .catch((error) => {
        console.log(error.code);
      });
  };

  const linksNav = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/find-tutors">Find tutors</NavLink>
      </li>
      {user && (
        <>
          <li>
            <NavLink to="/add-tutorials">Add Tutorials</NavLink>
          </li>
          <li>
            <NavLink to={`/my-tutorials/${user.email}`}>My Tutorials</NavLink>
          </li>
          <li>
            <NavLink to={`/my-booked-tutors/${user.email}`}>My Booked Tutors</NavLink>
          </li>
        </>
      )}
    </>
  );
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setIsDark(savedTheme === "dark");
    document.documentElement.setAttribute("data-theme", savedTheme);
  }, []);
  const handleToggle = (e) => {
    const dark = e.target.checked;
    setIsDark(dark);
    const newTheme = dark ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <div>
      <div className="navbar bg-base-100 ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="lg:hidden pl-0 pr-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
              {linksNav}
            </ul>
          </div>
          <h3 className="text-xl pl-0 md:text-2xl lg:text-3xl font-bold ">
            <span className="text-primary">Fluently</span>
          </h3>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{linksNav}</ul>
        </div>
        <div className="navbar-end gap-2">
          {user ? (
            <div className="flex gap-2 items-center justify-center">
              <img className=" h-10 w-10 rounded-2xl object-cover " src={user.photoURL} alt="" data-tooltip-id="my-tooltip" data-tooltip-content={user.displayName} data-tooltip-place="left" />
              <Tooltip id="my-tooltip" />
              <button onClick={handleLogOut} className="hover:bg-red-600 btn btn-primary btn-sm md:btn-md rounded-2xl text-sm md:text-base ml-1  mr-3 md:mr-0">
                LogOut
              </button>
            </div>
          ) : (
            <div className="flex flex-row flex-nowrap gap-2">
              <NavLink className="btn btn-primary px-2 py-1 md:btn-md md:text-base rounded-2xl text-sm " to="/login">
                Login
              </NavLink>
              <NavLink className="btn btn-primary px-2 py-1 md:btn-md md:text-base rounded-2xl text-sm" to="/register">
                Register
              </NavLink>
            </div>
          )}
          <div className="ml-[2px] md:ml-1">
            <label className="toggle text-base-content">
              <input type="checkbox" value="dark" className="theme-controller" onChange={handleToggle} checked={isDark} />
              <MdOutlineLightMode />
              <MdDarkMode />
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
