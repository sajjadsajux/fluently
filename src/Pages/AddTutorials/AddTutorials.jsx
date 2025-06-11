import React, { use } from "react";
import { AuthContext } from "../../Contexts/AuthContext";
import Loader from "../../Utils/loader";
import axios from "axios";

const AddTutorials = () => {
  const { user } = use(AuthContext);
  console.log(user);

  const handleAddTutorial = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const image = form.image.value;
    const language = form.language.value;
    const price = form.price.value;
    const description = form.description.value;

    const newTutorial = {
      name,
      email,
      image,
      language,
      price,
      description,
      review: 0,
    };

    console.log("Tutorial submitted:", newTutorial);

    // fetching api
    axios
      .post(`${import.meta.env.VITE_LOCAL_URL}/tutorials`, newTutorial)
      .then((res) => {
        if (res.data.insertedId) {
          alert("Added");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-10 lg:min-h-[100vh]">
      <h2 className="text-3xl font-bold mb-6 text-center text-primary">Add New Tutorial</h2>
      <form onSubmit={handleAddTutorial} className="space-y-6 bg-base-200 p-6 rounded-xl shadow-md">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="label">User Name</label>
            <input type="text" name="name" defaultValue={user.displayName} readOnly className="input input-bordered w-full" />
          </div>
          <div>
            <label className="label">Email</label>
            <input type="email" name="email" defaultValue={user.email} readOnly className="input input-bordered w-full" />
          </div>
          <div>
            <label className="label">Image URL</label>
            <input type="url" name="image" required placeholder="Enter image URL" className="input input-bordered w-full" />
          </div>
          <div>
            <label className="label">Language</label>
            <input type="text" name="language" required placeholder="E.g., Spanish, Math, JavaScript" className="input input-bordered w-full" />
          </div>
          <div>
            <label className="label">Price ($)</label>
            <input type="number" name="price" required placeholder="Enter price" className="input input-bordered w-full" />
          </div>
        </div>
        <div>
          <label className="label">Description</label>
          <textarea name="description" required rows="4" placeholder="Describe the tutorial" className="textarea textarea-bordered w-full"></textarea>
        </div>
        <div>
          <button type="submit" className="btn btn-primary w-full">
            Add Tutorial
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddTutorials;
