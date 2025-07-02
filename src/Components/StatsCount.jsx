import axios from "axios";
import React, { useEffect, useState } from "react";
import CountUp from "react-countup";

const StatsCount = () => {
  const [stats, setStats] = useState({
    tutors: 0,
    languages: 0,
    reviews: 0,
  });
  const [user, setUser] = useState(0);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_LOCAL_URL}/stats`)
      .then((res) => {
        // console.log(res.data);
        setStats(res.data);
      })
      .catch((err) => {
        console.error("Error loading stats:", err);
      });
  }, []);
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_LOCAL_URL}/users`)
      .then((res) => {
        // console.log(res.data.totalUsers);
        setUser(res.data);
      })
      .catch((err) => {
        console.error("Error loading stats:", err);
      });
  }, []);

  return (
    <div className="max-w-7xl mx-auto mb-16 px-2 md:px-0">
      <h2 className="text-4xl font-bold  mb-4 text-center  ">Our Impact So Far</h2>
      <div className="w-24 h-1 bg-primary mx-auto"></div>

      <p className="mt-4 text-lg opacity-80 text-center">We’re proud of what we’ve accomplished. These numbers tell the story of our progress and the people we’ve impacted.</p>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="grid grid-cols-2 row-gap-8 md:grid-cols-4">
          <div className="text-center md:border-x transform transition-all duration-300 hover:shadow-lg hover:scale-105">
            <h6 className="text-4xl font-bold lg:text-5xl xl:text-6xl text-secondary">
              <CountUp end={stats.tutors} duration={10} />
            </h6>
            <p className="text-sm font-medium tracking-widest  uppercase lg:text-base">Experienced Tutors</p>
          </div>
          <div className="text-center md:border-r transform transition-all duration-300 hover:shadow-lg hover:scale-105">
            <h6 className="text-4xl font-bold lg:text-5xl xl:text-6xl text-secondary">
              <CountUp end={stats.reviews} duration={10} />
            </h6>
            <p className="text-sm font-medium tracking-widest  uppercase lg:text-base">Total Reviews</p>
          </div>
          <div className="text-center md:border-r transform transition-all duration-300 hover:shadow-lg hover:scale-105">
            <h6 className="text-4xl font-bold lg:text-5xl xl:text-6xl text-secondary">
              <CountUp end={stats.languages} duration={10} />
            </h6>
            <p className="text-sm font-medium tracking-widest  uppercase lg:text-base">Languages</p>
          </div>
          <div className="text-center transform transition-all duration-300 hover:shadow-lg hover:scale-105 md:border-r">
            <h6 className="text-4xl font-bold lg:text-5xl xl:text-6xl text-secondary">
              <CountUp end={user} duration={10} />
            </h6>
            <p className="text-sm font-medium tracking-widest  uppercase lg:text-base  ">Total Users</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsCount;
