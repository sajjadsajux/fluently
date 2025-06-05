import React from "react";
import Banner from "../../Components/Banner";
import StatsCount from "../../Components/StatsCount";

const Home = () => {
  return (
    <>
      <section>
        <Banner></Banner>
      </section>
      <section>
        <StatsCount></StatsCount>
      </section>
    </>
  );
};

export default Home;
