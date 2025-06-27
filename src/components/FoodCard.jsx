import toast from "react-hot-toast";
import useAuth from "../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";

import useCart from "../hooks/useCart";
import useAxiosSecure from "../hooks/useAxiosSecure";

const FoodCard = ({ item }) => {
  const { name, image, recipe, price, _id } = item;
  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const axiosSecure = useAxiosSecure();
  const [, refetch] = useCart();

  const handleAddToCart = () => {
    if (user && user?.email) {
      const cartItem = {
        menuId: _id,
        email: user?.email,
        name,
        image,
        price,
      };
      axiosSecure.post("/carts", cartItem).then((res) => {
        console.log(res.data);
        if (res.data.insertedId) {
          toast.success(`${name} added to cart`);
          refetch();
        }
      });
    } else {
      toast.error("Login First !");
      navigate("/login", { state: { from: location } });
    }
  };
  return (
    <div className="card bg-base-100 w-96 shadow-sm">
      <figure>
        <img src={image} alt={name} />
      </figure>
      <div className="card-body">
        <div className="flex justify-between items-center">
          <h2 className="card-title">{name}</h2>
          <h3 className="text-orange-400">${price}</h3>
        </div>
        <p>{recipe}</p>
        <div className="card-actions justify-center">
          <button
            onClick={handleAddToCart}
            className="btn btn-outline border-0 border-b-4 mt-4 rounded-xl"
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};
export default FoodCard;
