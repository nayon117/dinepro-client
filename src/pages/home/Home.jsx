import Banner from "./Banner";
import Category from "./Category";
import Featured from "./featured/Featured";
import PopularMenu from "./PopularMenu";
import Testimonials from "./Testimonials";
import useTitle from "../../hooks/useTitle";

const Home = () => {
  useTitle("Home");
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
