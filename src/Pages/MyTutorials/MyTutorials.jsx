import axios from "axios";
import React, { use, useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router";
import SetTitle from "../../Hooks/SetTitle";
import Swal from "sweetalert2";
import { AuthContext } from "../../Contexts/AuthContext";
import Loader from "../../Utils/loader";

const MyTutorials = () => {
  const { user } = use(AuthContext);
  const loadedmyTutorials = useLoaderData();
  const [myTutorials, setMyTutorials] = useState(loadedmyTutorials);
  const [loading, setLoading] = useState(true);

  console.log(myTutorials);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_LOCAL_URL}/tutorials/${user.email}`, {
      headers: {
        authorization: `Bearer ${user.accessToken}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setMyTutorials(data);
        setLoading(false);
      })
      .catch((err) => console.error("Failed to fetch tutorials:", err));
  }, [user.email, user.accessToken]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    })
      .then((result) => {
        if (result.isConfirmed) {
          axios.delete(`${import.meta.env.VITE_LOCAL_URL}/tutorials/${id}`).then((res) => {
            console.log(res.data);
            if (res.data.bookedResult.deletedCount || res.data.tutorialResult.deletedCount) {
              // alert("Deleted successfully");
              const remaining = myTutorials.filter((tuto) => tuto._id !== id);
              setMyTutorials(remaining);
              Swal.fire({
                title: "Deleted!",
                text: "Tutorial deleted successfully!",
                icon: "success",
              });
            }
          });
        }
      })
      .catch((err) => console.log(err));
  };
  SetTitle("My Tutorials");
  if (loading) {
    return <Loader></Loader>;
  }
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

                <div className="flex gap-3 mt-4 ">
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
