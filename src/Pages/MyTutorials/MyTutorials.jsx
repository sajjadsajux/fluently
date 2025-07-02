import axios from "axios";
import React, { use, useEffect, useState } from "react";
import { Link } from "react-router";
import SetTitle from "../../Hooks/SetTitle";
import Swal from "sweetalert2";
import { AuthContext } from "../../Contexts/AuthContext";
import Loader from "../../Utils/loader";

const MyTutorials = () => {
  const { user } = use(AuthContext);
  const [myTutorials, setMyTutorials] = useState([]);
  const [loading, setLoading] = useState(true);

  // console.log(myTutorials);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });

    if (!user?.email || !user?.accessToken) return;
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
            // console.log(res.data);
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
    <div className="max-w-6xl mx-auto my-10 px-4 min-h-[100vh]">
      <h2 className="text-3xl font-bold mb-6 text-center text-primary">My Tutorials</h2>

      {myTutorials.length === 0 ? (
        <p className="text-center text-gray-500">No tutorials found.</p>
      ) : (
        <div className="overflow-x-auto rounded-lg shadow border border-base-300">
          <table className="table w-full">
            <thead className="bg-base-200 text-base-content">
              <tr>
                <th className="text-left">Image</th>
                <th>Language</th>
                <th>Price</th>
                <th>Review</th>
                <th>Description</th>
                <th className="text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {myTutorials.map((tutorial) => (
                <tr key={tutorial._id} className="hover:bg-base-100 border-t">
                  <td className="p-3">
                    <img src={tutorial.image} alt="Tutorial" className="w-20 h-16 rounded-md object-cover" />
                  </td>
                  <td className="font-semibold">{tutorial.language}</td>
                  <td>${tutorial.price}</td>
                  <td>{tutorial.review}</td>
                  <td>
                    <div className="tooltip tooltip-left" data-tip={tutorial.description}>
                      <span className="line-clamp-2 max-w-xs">{tutorial.description.slice(0, 40)}...</span>
                    </div>
                  </td>
                  <td className="text-center space-x-2">
                    <Link to={`/update-tutorials/${tutorial._id}`} className="btn btn-xs btn-primary hover:bg-green-600">
                      Update
                    </Link>
                    <button onClick={() => handleDelete(tutorial._id)} className="btn btn-xs btn-secondary hover:bg-red-600">
                      Delete
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

export default MyTutorials;
