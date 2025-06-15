import axios from "axios";
import React, { use, useEffect, useState } from "react";
import { useParams } from "react-router";
import SetTitle from "../../Hooks/SetTitle";
import { Bounce, toast, Zoom } from "react-toastify";
import { AuthContext } from "../../Contexts/AuthContext";
import Loader from "../../Utils/loader";

const UpdateTutorials = () => {
  const [prevData, setPrevData] = useState(null);
  const [loading, setLoading] = useState(true);
  const { user } = use(AuthContext);
  const { id } = useParams();

  useEffect(() => {
    if (!user?.accessToken) return;
    fetch(`${import.meta.env.VITE_LOCAL_URL}/update-tutorials/${id}`, {
      headers: {
        authorization: `Bearer ${user.accessToken}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setPrevData(data);
        setLoading(false);
      })
      .catch((err) => console.error("Failed to fetch update tutorial:", err));
  }, [id, user.accessToken]);

  const handleUpdate = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const image = form.image.value;
    const language = form.language.value;
    const price = form.price.value;
    const description = form.description.value;
    const review = form.review.value;

    const updatedTutorial = {
      name,
      email,
      image,
      language,
      price,
      description,
      review,
    };

    // console.log("Tutorial submitted:", updatedTutorial);

    // fetching api
    axios
      .patch(`${import.meta.env.VITE_LOCAL_URL}/tutorials/${prevData._id}`, updatedTutorial)
      .then((res) => {
        // console.log(res.data);
        if (res.data.bookedResult.modifiedCount || res.data.tutorialResult.modifiedCount) {
          toast("Tutorial updated successfully!", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Zoom,
          });
        } else if (res.data.bookedResult.modifiedCount === 0 || res.data.tutorialResult.modifiedCount === 0) {
          toast.warn("No new information to update", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Bounce,
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  SetTitle(`Update Tutorial`);
  if (loading) {
    return <Loader></Loader>;
  }
  return (
    <div className="">
      <div className="max-w-4xl mx-auto px-4 py-10 ">
        <h2 className="text-3xl font-bold mb-6 text-center text-primary">Update Tutorial</h2>
        <form onSubmit={handleUpdate} className="space-y-6 bg-base-200 p-6 rounded-xl shadow-md">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="label">User Name</label>
              <input type="text" name="name" defaultValue={prevData.name} readOnly className="input input-bordered w-full" />
            </div>
            <div>
              <label className="label">Email</label>
              <input type="email" name="email" defaultValue={prevData.email} readOnly className="input input-bordered w-full" />
            </div>
            <div>
              <label className="label">Image URL</label>
              <input type="url" name="image" required defaultValue={prevData.image} placeholder="Enter image URL" className="input input-bordered w-full" />
            </div>
            <div>
              <label className="label">Language</label>
              <input type="text" name="language" required defaultValue={prevData.language} placeholder="E.g., Spanish, Math, JavaScript" className="input input-bordered w-full" />
            </div>
            <div>
              <label className="label">Price ($)</label>
              <input type="number" name="price" required defaultValue={prevData.price} placeholder="Enter price" className="input input-bordered w-full" />
            </div>
            <div>
              <label className="label">Review (🌟)</label>
              <input type="number" name="review" defaultValue={prevData.review} readOnly placeholder="Enter price" className="input input-bordered w-full" />
            </div>
          </div>
          <div>
            <label className="label">Description</label>
            <textarea name="description" required defaultValue={prevData.description} rows="4" placeholder="Describe the tutorial" className="textarea textarea-bordered w-full"></textarea>
          </div>
          <div>
            <button type="submit" className="btn btn-primary w-full">
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateTutorials;
