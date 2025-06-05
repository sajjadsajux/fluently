import React from "react";
import Banner from "../../Components/Banner";
import StatsCount from "../../Components/StatsCount";
import Categories from "../../Components/Categories";

const Home = () => {
  return (
    <>
      <section>
        <Banner></Banner>
      </section>
      <section>
        <StatsCount></StatsCount>
      </section>
      <section>
        <Categories></Categories>
      </section>
    </>
  );
};

export default Home;
