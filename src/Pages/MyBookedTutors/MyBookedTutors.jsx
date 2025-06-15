import axios from "axios";
import React, { use, useEffect, useState } from "react";
import {} from "react-router";
import SetTitle from "../../Hooks/SetTitle";
import { Flip, toast } from "react-toastify";
import { AuthContext } from "../../Contexts/AuthContext";
import Loader from "../../Utils/loader";

const MyBookedTutors = () => {
  const [bookedTutors, setBookedTutors] = useState([]);
  const [loading, setLoading] = useState(true);

  // console.log(bookedTutors);
  const { user } = use(AuthContext);
  useEffect(() => {
    if (!user?.email || !user?.accessToken) return;

    fetch(`${import.meta.env.VITE_LOCAL_URL}/booked-tutors/${user.email}`, {
      headers: {
        authorization: `Bearer ${user.accessToken}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setBookedTutors(data);
        setLoading(false);
      })
      .catch((err) => console.error("Failed to fetch tutorials:", err));
  }, [user.email, user.accessToken]);

  const handleReview = (id) => {
    axios
      .patch(`${import.meta.env.VITE_LOCAL_URL}/review/${id}`)
      .then((res) => {
        // console.log(res);
        if (res.data.tutorialUpdate.modifiedCount || res.data.bookedUpdate.modifiedCount) {
          const updatedTutors = bookedTutors.map((tutor) => {
            if (tutor.tutorId === id) {
              toast.success("Thank you! Your review has been submitted successfully.", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                transition: Flip,
              });

              return { ...tutor, review: tutor.review + 1 };
            }
            return tutor;
          });
          setBookedTutors(updatedTutors);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  SetTitle("My Booked Tutors");
  if (loading) {
    return <Loader></Loader>;
  }
  return (
    <div className="max-w-6xl mx-auto px-4 py-10 min-h-[100vh]">
      <h2 className="text-3xl font-bold text-center mb-8 text-primary">My Booked Tutors</h2>

      {bookedTutors.length === 0 ? (
        <p className="text-center text-gray-500">No bookings found.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {bookedTutors.map((tutor, index) => (
            <div key={index} className="card bg-base-100 shadow-xl rounded-xl">
              <figure>
                <img src={tutor.image} alt={tutor.name} className="w-full h-48 object-cover rounded-t-xl" />
              </figure>
              <div className="card-body">
                <h2 className="card-title text-primary">{tutor.name}</h2>
                <p>
                  <strong>Review:</strong> ⭐ {tutor.review || 0}
                </p>
                <p>
                  <strong>Language:</strong> {tutor.language}
                </p>
                <p>
                  <strong>Price:</strong> ${tutor.price}
                </p>
                <p>
                  <strong>Description:</strong> {tutor.description}
                </p>
                <p>
                  <strong>Tutor Email:</strong> {tutor.tutorEmail}
                </p>
                <div className="card-actions justify-end mt-4">
                  <button onClick={() => handleReview(tutor.tutorId)} className="btn btn-sm btn-outline btn-secondary">
                    Review
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyBookedTutors;
