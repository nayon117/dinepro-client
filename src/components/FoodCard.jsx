const FoodCard = ({ item }) => {
  const { name, image, recipe, price } = item;
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
          <button className="btn btn-outline">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};
export default FoodCard;
