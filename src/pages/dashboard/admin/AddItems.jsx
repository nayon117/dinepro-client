import { useState } from "react";
import SectionTitle from "../../../components/SectionTitle";
import { useForm } from "react-hook-form";
import { FaUtensils } from "react-icons/fa";

const AddItems = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = data =>{
    console.log(data)
  }
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
                {...register("category", { required: true })}
                className="select select-neutral w-full"
              >
                <option disabled={true} selected>
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
            type="file" className="file-input file-input-warning" />
          </div>

          <button type="submit" className="btn w-full bg-[#f0ba6f] text-black" >Add Item <FaUtensils/></button>
        </form>
      </div>
    </div>
  );
};
export default AddItems;
