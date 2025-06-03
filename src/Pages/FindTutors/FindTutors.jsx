import React from "react";
import { useLoaderData } from "react-router";

const FindTutors = () => {
  const tutors = useLoaderData();
  console.log(tutors);
  return (
    <>
      <div className="container mx-auto py-10">
        <h2 className="text-3xl font-bold text-center mb-8 text-primary">Find Your Perfect Tutor</h2>

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
                    <button className="btn btn-sm btn-outline btn-primary">See tutor details</button>
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
