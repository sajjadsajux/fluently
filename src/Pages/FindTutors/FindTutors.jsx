import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router";
import SetTitle from "../../Hooks/SetTitle";
import { IoIosStar } from "react-icons/io";
import Loader from "../../Utils/loader";

const FindTutors = () => {
  // const tutors = useLoaderData();
  // console.log(tutors);
  const [tutors, setTutors] = useState([]);

  const [search, setSearch] = useState("");
  const location = useLocation();

  const params = new URLSearchParams(location.search);
  const category = params.get("category") || "";
  const [loading, setLoading] = useState(true);

  // console.log(search);
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });

    const query = search || category;

    axios
      .get(`${import.meta.env.VITE_LOCAL_URL}/tutorials?searchQuery=${query}`)
      .then((res) => setTutors(res.data))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, [search, category]);

  SetTitle("All Tutors");
  if (loading) {
    return <Loader></Loader>;
  }
  return (
    <>
      <div className="container mx-auto py-10 min-h-[100vh]">
        <h2 className="text-4xl font-semibold text-center mb-12 text-primary">Find Your Perfect Tutor</h2>

        <div className="flex justify-center mb-10 px-2 md:px-0">
          <label className="input flex items-center gap-2 p-3 rounded-full shadow-md w-full max-w-md">
            <svg className="h-6 w-6 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor">
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </g>
            </svg>
            <input type="search" required placeholder="Search tutors" onChange={(e) => setSearch(e.target.value)} className="flex-1 outline-none bg-transparent " />
          </label>
        </div>

        {tutors.length === 0 ? (
          <p className="text-center  mt-20">No tutors found.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-2 lg:px-0">
            {tutors.map((tutor, index) => (
              <div key={index} className="card transform transition-all hover:shadow-2xl hover:-translate-y-1 rounded-2xl overflow-hidden border-2 border-gray-100 p-4 ">
                <figure className="rounded-t-2xl overflow-hidden">
                  <img src={tutor.image} alt={tutor.name} className="w-full h-52 object-cover transition-transform hover:scale-105" />
                </figure>
                <div className="card-body p-6">
                  <h2 className="card-title text-2xl font-semibold text-primary mb-2">{tutor.name}</h2>
                  <p className="mb-1 ">
                    <strong>Language:</strong> {tutor.language}
                  </p>
                  <p className="mb-1 flex items-center gap-1">
                    <strong>Reviews:</strong> {tutor.review || 0}
                    <span className="flex ml-1">
                      {[...Array(5)].map((_, i) => (
                        <IoIosStar key={i} color="#FFD700" size={20} />
                      ))}
                    </span>
                  </p>

                  <p className=" mb-4 ">{tutor.description?.slice(0, 100)}...</p>
                  <div className="card-actions">
                    <Link to={`/tutor/${tutor._id}`} className="btn btn-primary w-full font-semibold py-2 hover:bg-green-600">
                      See Tutor Details
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
