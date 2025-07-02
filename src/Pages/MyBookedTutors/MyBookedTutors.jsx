import axios from "axios";
import React, { use, useEffect, useState } from "react";
import {} from "react-router";
import SetTitle from "../../Hooks/SetTitle";
import { Flip, toast } from "react-toastify";
import { AuthContext } from "../../Contexts/AuthContext";
import Loader from "../../Utils/loader";
import { IoIosStar } from "react-icons/io";

const MyBookedTutors = () => {
  const [bookedTutors, setBookedTutors] = useState([]);
  const [loading, setLoading] = useState(true);

  // console.log(bookedTutors);
  const { user } = use(AuthContext);
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });

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
        <div className="overflow-x-auto">
          <table className="table table-zebra border border-base-300 w-full">
            <thead className="bg-base-200 text-base-content">
              <tr>
                <th>#</th>
                <th>Image</th>
                <th>Name</th>
                <th>Language</th>
                <th>Price ($)</th>
                <th>Review</th>
                <th>Description</th>
                <th>Tutor Email</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {bookedTutors.map((tutor, index) => (
                <tr key={tutor._id}>
                  <td>{index + 1}</td>
                  <td>
                    <img src={tutor.image} alt={tutor.name} className="w-16 h-16 object-cover rounded" />
                  </td>
                  <td className="font-semibold">{tutor.name}</td>
                  <td>{tutor.language}</td>
                  <td>${tutor.price}</td>
                  <td>
                    <div className="flex items-center gap-1">
                      {tutor.review || 0}
                      <IoIosStar color="#FFD700" />
                    </div>
                  </td>

                  <td>
                    <div className="tooltip tooltip-left" data-tip={tutor.description}>
                      <span className="line-clamp-2 max-w-xs">{tutor.description.slice(0, 40)}...</span>
                    </div>
                  </td>
                  <td>{tutor.tutorEmail}</td>
                  <td>
                    <button onClick={() => handleReview(tutor.tutorId)} className="btn btn-sm btn-outline btn-secondary">
                      Review
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default MyBookedTutors;
