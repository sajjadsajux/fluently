import axios from "axios";
import React, { useEffect, useState } from "react";

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
        console.log(res.data);
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
        console.log(res.data.totalUsers);
        setUser(res.data);
      })
      .catch((err) => {
        console.error("Error loading stats:", err);
      });
  }, []);

  return (
    <div className="container mx-auto my-10">
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="grid grid-cols-2 row-gap-8 md:grid-cols-4">
          <div className="text-center md:border-r">
            <h6 className="text-4xl font-bold lg:text-5xl xl:text-6xl">{stats.tutors}</h6>
            <p className="text-sm font-medium tracking-widest  uppercase lg:text-base">Experienced Tutors</p>
          </div>
          <div className="text-center md:border-r">
            <h6 className="text-4xl font-bold lg:text-5xl xl:text-6xl">{stats.reviews}</h6>
            <p className="text-sm font-medium tracking-widest  uppercase lg:text-base">Total Reviews</p>
          </div>
          <div className="text-center md:border-r">
            <h6 className="text-4xl font-bold lg:text-5xl xl:text-6xl">{stats.languages}</h6>
            <p className="text-sm font-medium tracking-widest  uppercase lg:text-base">Languages</p>
          </div>
          <div className="text-center">
            <h6 className="text-4xl font-bold lg:text-5xl xl:text-6xl">{user}</h6>
            <p className="text-sm font-medium tracking-widest  uppercase lg:text-base">Users</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsCount;
