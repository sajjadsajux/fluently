import React from "react";
import { useLoaderData } from "react-router";

const TutorDetails = () => {
  const tutor = useLoaderData();
  console.log(tutor);
  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure className="lg:w-1/2">
          <img src={tutor.image} alt={tutor.name} className="w-full h-80 object-cover rounded-lg" />
        </figure>
        <div className="card-body lg:w-1/2">
          <h2 className="card-title text-2xl text-primary">{tutor.name}</h2>
          <p>
            <strong>Language:</strong> {tutor.language}
          </p>
          <p>
            <strong>Description:</strong> {tutor.description}
          </p>
          <p>
            <strong>Price:</strong> ${tutor.price}
          </p>
          <p>
            <strong>Review:</strong> ⭐ {tutor.review || 0}
          </p>
          <div className="card-actions justify-end mt-4">
            <button className="btn btn-primary">Book Session</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TutorDetails;
