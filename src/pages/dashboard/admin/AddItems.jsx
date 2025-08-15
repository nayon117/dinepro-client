import SectionTitle from "../../../components/SectionTitle";
import { useForm } from "react-hook-form";
import { FaUtensils } from "react-icons/fa";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import toast from "react-hot-toast";

//image related
const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const AddItems = () => {
  const { register, handleSubmit, reset } = useForm();
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();

  // onsubmit handler
  const onSubmit = async (data) => {
    const imageFile = { image: data.image[0] };
    const res = await axiosPublic.post(image_hosting_api, imageFile, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });

    if (res.data.success) {
      const menuItem = {
        name: data.name,
        category: data.category,
        price: parseFloat(data.price),
        recipe: data.recipe,
        image: res.data.data.display_url,
      };

      const menuRes = await axiosSecure.post("/menu", menuItem);
      if(menuRes.data.insertedId) {
        reset();
        toast.success("Menu added successfully")
      }   
    }

  };

  return (
    <div className="">
      <SectionTitle heading="Add an Item" subHeading="What's new" />
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label className="w-full">
            Recipe Name *
            <input
              {...register("name")}
              placeholder="Recipe Name"
              type="text"
              className="input w-full"
            />
          </label>

          <div className="flex gap-6 my-6">
            {/* category  */}
            <label className="w-full">
              Category*
              <select
                defaultValue=""
                {...register("category", { required: true })}
                className="select select-neutral w-full"
              >
                <option disabled={true} value="">
                  Select...
                </option>
                <option value="salad">salad</option>
                <option value="pizza">pizza</option>
                <option value="soup">soup</option>
                <option value="dessert">dessert</option>
                <option value="drinks">drinks</option>
              </select>
            </label>
            {/* price */}
            <label className="w-full">
              Price*
              <input
                {...register("price")}
                placeholder="price"
                type="text"
                className="input w-full "
              />
            </label>
          </div>
          <label className="w-full">
            Details*
            <textarea
              {...register("recipe")}
              placeholder="Recipe details"
              className="w-full h-24 textarea"
            />
          </label>

          <div className="my-6">
            <input
              {...register("image", { required: true })}
              type="file"
              className="file-input file-input-warning"
            />
          </div>

          <button type="submit" className="btn w-full bg-[#f0ba6f] text-black">
            Add Item <FaUtensils />
          </button>
        </form>
      </div>
    </div>
  );
};
export default AddItems;
