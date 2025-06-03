import React from "react";
import { useLoaderData } from "react-router";

const FindTutors = () => {
  const tutors = useLoaderData();
  console.log(tutors);
  return (
    <>
      <h2 className="text-3xl font-bold my-8 text-center text-primary">Find Tutors</h2>
      <div></div>
    </>
  );
};

export default FindTutors;
