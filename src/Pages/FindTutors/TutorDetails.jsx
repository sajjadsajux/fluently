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
  console.log(tutor);
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
  console.log(bookedData);

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
    <div className="max-w-4xl mx-auto px-4 py-10 h-[100vh]">
      <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure className="lg:w-1/2">
          <img src={image} alt={tutor.name} className="w-full h-80 object-cover rounded-lg" />
        </figure>
        <div className="card-body lg:w-1/2">
          <h2 className="card-title text-2xl text-primary">{name}</h2>
          <p>
            <strong>Language:</strong> {language}
          </p>
          <p>
            <strong>Description:</strong> {description}
          </p>
          <p>
            <strong>Price:</strong> ${price}
          </p>
          <p>
            <strong>Review:</strong> ⭐ {review || 0}
          </p>
          <div className="card-actions justify-end mt-4">
            <button onClick={handleBook} className="btn btn-primary">
              Book Session
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TutorDetails;
