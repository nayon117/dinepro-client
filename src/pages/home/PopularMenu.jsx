import SectionTitle from "../../components/SectionTitle";
import useFetch from "../../hooks/useFetch";
import MenuCategory from "../menu/MenuCategory";


const PopularMenu = () => {
  const [data] = useFetch('http://localhost:5000/menu');
  const popular = data.filter(item=>item.category === 'popular');
  return (
    <section className="mb-12">
      <SectionTitle heading={"From our menu"} subHeading={"Popular Items"} />
      <MenuCategory items={popular} />
    </section>
  );
};
export default PopularMenu;
