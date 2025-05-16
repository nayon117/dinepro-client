import { useEffect } from "react";
import Banner from "./Banner";
import Category from "./Category";
import Featured from "./featured/Featured";
import PopularMenu from "./PopularMenu";
import Testimonials from "./Testimonials";

const Home = () => {
  useEffect(() => {
    document.title = "DinePro | Home";
  }, []);
  return (
    <>
        <Banner />
        <Category/>
        <PopularMenu/>
        <Featured/>
        <Testimonials/>
    </>
  )
}
export default Home;
