import Cover from "../shared/Cover";
import menuimg from "../../assets/menu/banner3.jpg";
import useFetch from "../../hooks/useFetch";
import SectionTitle from "../../components/SectionTitle";
import MenuCategory from "./MenuCategory";
import saladimg from "../../assets/menu/salad-bg.jpg";
import soupimg from "../../assets/menu/soup-bg.jpg";
import pizzaimg from "../../assets/menu/pizza-bg.jpg";
import dessertimg from "../../assets/menu/dessert-bg.jpeg";
import useTitle from "../../hooks/useTitle";

const Menu = () => {
  const [data] = useFetch("http://localhost:5000/menu");
  const desserts = data.filter((item) => item.category === "dessert").slice(0, 6);
  const salads = data.filter((item) => item.category === "salad").slice(0, 6);
  const soups = data.filter((item) => item.category === "soup").slice(0, 6);
  const pizzas = data.filter((item) => item.category === "pizza").slice(0, 6);
  const offereds = data.filter((item) => item.category === "offered")

  useTitle("Menu");
 
  return (
    <div className="">
      <Cover
        img={menuimg}
        title={"Our Menu"}
        subtitle={"Curated with care, crafted with passion"}
      />
      <SectionTitle subHeading={"Don't miss"} heading={"Today's offer"} />
      <MenuCategory items={offereds} />
      <MenuCategory
        items={desserts}
        title={"dessert"}
        subtitle={"Indulge in sweetness beyond imagination."}
        coverimg={dessertimg}
      />

      <MenuCategory
        items={salads}
        title={"salad"}
        subtitle={"Freshness in every leaf, crafted for light delight."}
        coverimg={saladimg}
      />

      <MenuCategory
        items={soups}
        title={"soup"}
        subtitle={"Warm your soul with every spoonful."}
        coverimg={soupimg}
      />

      <MenuCategory
        items={pizzas}
        title={"pizza"}
        subtitle={"Oven-kissed crusts topped with perfection."}
        coverimg={pizzaimg}
      />
    </div>
  );
};
export default Menu;
