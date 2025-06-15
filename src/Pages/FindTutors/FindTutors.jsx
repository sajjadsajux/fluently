import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router";
import SetTitle from "../../Hooks/SetTitle";

const FindTutors = () => {
  // const tutors = useLoaderData();
  // console.log(tutors);
  const [tutors, setTutors] = useState([]);

  const [search, setSearch] = useState("");
  const location = useLocation();

  const params = new URLSearchParams(location.search);
  const category = params.get("category") || "";

  // console.log(search);
  useEffect(() => {
    const query = search || category;

    axios
      .get(`${import.meta.env.VITE_LOCAL_URL}/tutorials?searchQuery=${query}`)
      .then((res) => setTutors(res.data))
      .catch((err) => console.log(err));
  }, [search, category]);

  SetTitle("All Tutors");
  return (
    <>
      <div className="container mx-auto py-10 min-h-[100vh]">
        <h2 className="text-3xl font-bold text-center mb-8 text-primary">Find Your Perfect Tutor</h2>

        <div className="flex justify-center my-10">
          <label className="input">
            <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor">
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </g>
            </svg>
            <input type="search" required placeholder="Search tutors" onChange={(e) => setSearch(e.target.value)} />
          </label>
        </div>

        {tutors.length === 0 ? (
          <p className="text-center text-gray-500">No tutors found.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tutors.map((tutor, index) => (
              <div key={index} className="card bg-base-300 shadow-lg rounded-xl border-2 border-white">
                <figure>
                  <img src={tutor.image} alt={tutor.name} className="w-full h-48 object-cover rounded-t-xl" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title text-primary">{tutor.name}</h2>
                  <p>
                    <strong>Language:</strong> {tutor.language}
                  </p>
                  <p>
                    <strong>Review:</strong> {tutor.review || 0} ⭐
                  </p>
                  <p className="text-sm ">{tutor.description?.slice(0, 100)}...</p>
                  <div className="card-actions justify-end mt-4">
                    <Link to={`/tutor/${tutor._id}`} className="btn btn-sm btn-outline btn-primary">
                      See tutor details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default FindTutors;
