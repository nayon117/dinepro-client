import { useEffect } from "react";
import Cover from "../shared/Cover";
import menuimg from '../../assets/menu/banner3.jpg'
import PopularMenu from "../home/PopularMenu";

const Menu = () => {
  useEffect(() => {
    document.title = "DinePro | Menu";
  }, []);
  return (
    <div className=''>
        <Cover 
        img={menuimg}
        title={"Our Menu"}
        subtitle={"Curated with care, crafted with passion"}
        />
        <PopularMenu />
    </div>
  )
}
export default Menu;
