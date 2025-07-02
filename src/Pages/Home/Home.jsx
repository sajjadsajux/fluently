import React, { useEffect } from "react";
import Banner from "../../Components/Banner";
import StatsCount from "../../Components/StatsCount";
import Categories from "../../Components/Categories";
import Testimonials from "../../Components/Testimonials";
import WhyChooseUs from "../../Components/WhyChooseUs";
import SetTitle from "../../Hooks/SetTitle";
import NewsLetter from "../../Components/NewsLetter";

const Home = () => {
  SetTitle("Home");
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      <section>
        <Banner></Banner>
      </section>
      <section>
        <Categories></Categories>
      </section>
      <section>
        <StatsCount></StatsCount>
      </section>
      <section>
        <Testimonials></Testimonials>
      </section>
      <section>
        <WhyChooseUs></WhyChooseUs>
      </section>
      <section>
        <NewsLetter></NewsLetter>
      </section>
    </>
  );
};

export default Home;
