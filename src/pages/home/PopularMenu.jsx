import { useEffect, useState } from "react";
import SectionTitle from "../../components/SectionTitle";
import MenuItem from "../../components/MenuItem";

const PopularMenu = () => {
  const [menu, setMenu] = useState([]);
  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) =>
        setMenu(data.filter((item) => item.category === "popular"))
      );
  }, []);
  return (
    <section className="mb-12">
      <SectionTitle heading={"From our menu"} subHeading={"Popular Items"} />

      <div className="grid md:grid-cols-2 gap-10">
        {menu?.map((item) => (
          <MenuItem key={item._id} item={item} />
        ))}
      </div>
    </section>
  );
};
export default PopularMenu;
