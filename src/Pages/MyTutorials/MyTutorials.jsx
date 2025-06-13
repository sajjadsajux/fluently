import axios from "axios";
import React, { useState } from "react";
import { Link, useLoaderData } from "react-router";
import SetTitle from "../../Hooks/SetTitle";

const MyTutorials = () => {
  const loadedmyTutorials = useLoaderData();
  const [myTutorials, setMyTutorials] = useState(loadedmyTutorials);
  console.log(myTutorials);

  const handleDelete = (id) => {
    axios
      .delete(`${import.meta.env.VITE_LOCAL_URL}/tutorials/${id}`)
      .then((res) => {
        console.log(res.data);
        if (res.data.bookedResult.deletedCount || res.data.tutorialResult.deletedCount) {
          // alert("Deleted successfully");
          const remaining = myTutorials.filter((tuto) => tuto._id !== id);
          setMyTutorials(remaining);
        }
      })
      .catch((err) => console.log(err));
  };
  SetTitle("My Tutorials");

  return (
    <div className="container mx-auto my-6 p-4 min-h-[100vh]">
      <h2 className="text-3xl font-bold mb-6 text-center text-primary">My Tutorials</h2>

      {myTutorials.length === 0 ? (
        <p className="text-center text-gray-500">No tutorials found.</p>
      ) : (
        <div className="grid grid-cols-1 gap-6">
          {myTutorials.map((tutorial) => (
            <div key={tutorial._id} className=" rounded-2xl shadow-lg overflow-hidden border flex flex-col md:flex-row">
              <div className="w-full md:w-1/3 h-64">
                <img src={tutorial.image} alt="Tutorial" className="w-full h-full object-cover" />
              </div>

              <div className="w-full md:w-2/3 p-6 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-primary mb-2">{tutorial.language}</h3>
                  <p className=" mb-2">
                    <span className="font-semibold">Price:</span> ${tutorial.price}
                  </p>
                  <p className=" mb-2">
                    <span className="font-semibold">Review:</span> {tutorial.review}
                  </p>
                  <p className="">{tutorial.description}</p>
                </div>

                <div className="flex gap-3 mt-4">
                  <Link to={`/update-tutorials/${tutorial._id}`} className="btn btn-sm btn-info">
                    Update
                  </Link>
                  <button onClick={() => handleDelete(tutorial._id)} className="btn btn-sm btn-error">
                    Delete
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

export default MyTutorials;
