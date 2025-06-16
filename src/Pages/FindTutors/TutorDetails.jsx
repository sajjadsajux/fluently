import React, { use, useEffect, useState } from "react";
import { useParams } from "react-router";
import { AuthContext } from "../../Contexts/AuthContext";
import axios from "axios";
import SetTitle from "../../Hooks/SetTitle";
import { Flip, toast } from "react-toastify";
import Loader from "../../Utils/loader";

const TutorDetails = () => {
  const [tutor, setTutor] = useState(null);
  const { user } = use(AuthContext);
  const { id } = useParams();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });

    fetch(`${import.meta.env.VITE_LOCAL_URL}/tutor/${id}`, {
      headers: {
        authorization: `Bearer ${user.accessToken}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setTutor(data);
        setLoading(false);
      })
      .catch((err) => console.error("Failed to fetch tutorials:", err));
  }, [id, user.accessToken]);
  SetTitle(`Tutor- ${tutor?.name}`);

  if (loading) {
    return <Loader></Loader>;
  }
  if (!tutor) return <Loader></Loader>;

  const { description, email, image, language, name, price, review, _id } = tutor;
  // console.log(tutor);
  const bookedData = {
    tutorId: _id,
    name: name,
    image: image,
    language: language,
    review: review,
    price: price,
    tutorEmail: email,
    email: user?.email,
    description: description,
  };
  // console.log(bookedData);

  const handleBook = () => {
    axios
      .post(`${import.meta.env.VITE_LOCAL_URL}/booked-tutors`, bookedData)
      .then((res) => {
        if (res.data.insertedId) {
          toast("You have successfully reserved this tutorial.", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Flip,
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <h2 className="text-3xl font-bold text-center  text-primary pt-10">Tutor Details</h2>

      <div className="flex items-start justify-center min-h-screen px-4 pb-10 pt-5">
        <div className="max-w-md w-full border border-white">
          <div className="card bg-base-100 shadow-2xl p-6 rounded-xl">
            <figure className="mb-6">
              <img src={image} alt={name} className="w-full h-60 object-cover rounded-xl" />
            </figure>
            <div className="card-body text-center">
              <h2 className="card-title text-3xl font-semibold text-primary mb-4 flex justify-center">{name}</h2>
              <p className="mb-2">
                <strong>Language:</strong> {language}
              </p>
              <p className="mb-2">
                <strong>Description:</strong> {description}
              </p>
              <p className="mb-4">
                <strong>Review:</strong> ⭐ {review || 0}
              </p>
              <p className="mb-2">
                <strong>Price:</strong> ${price}
              </p>
              <div className="card-actions justify-center">
                <button onClick={handleBook} className="btn btn-primary hover:bg-green-700">
                  Book Session
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TutorDetails;
