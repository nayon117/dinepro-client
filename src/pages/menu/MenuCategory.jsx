import { Link } from "react-router-dom";
import Button from "../../components/Button";
import MenuItem from "../../components/MenuItem";
import Cover from "../shared/Cover";

const MenuCategory = ({items,title,coverimg,subtitle}) => {
  return (
    <div className="pt-8" >
      {title && <Cover img={coverimg} title={title} subtitle={subtitle} />}
       <div className="grid md:grid-cols-2 gap-10 mt-16">
        {items?.map((item) => (
          <MenuItem key={item._id} item={item} />
        ))}
      </div>
      <Link to={`/order/${title}`} className="flex items-center justify-center my-3"><Button title={"Order Now"} /></Link>
    </div>
  )
}
export default MenuCategory;
