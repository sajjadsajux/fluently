import React from "react";
import Banner from "../../Components/Banner";
import StatsCount from "../../Components/StatsCount";
import Categories from "../../Components/Categories";
import Testimonials from "../../Components/Testimonials";
import WhyChooseUs from "../../Components/WhyChooseUs";

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
      <section>
        <Testimonials></Testimonials>
      </section>
      <section>
        <WhyChooseUs></WhyChooseUs>
      </section>
    </>
  );
};

export default Home;
