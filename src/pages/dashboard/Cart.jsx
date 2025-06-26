import { FaTrash } from "react-icons/fa";
import useCart from "../../hooks/useCart";
import toast from "react-hot-toast";
import useAxios from "../../hooks/useAxios";

const Cart = () => {
  const [cart, refetch] = useCart();
  const total = cart.reduce((sum, item) => sum + item.price, 0);
  const axiosSecure = useAxios();

  const handleDelete = (id) => {
    toast.custom((t) => (
      <div
        className={`${
          t.visible ? "animate-enter" : "animate-leave"
        } max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
      >
        <div className="flex-1 w-0 p-4">
          <div className="flex items-start">
            <div className="ml-3 flex-1">
              <p className="text-sm font-medium text-gray-900">
                Delete Confirmation
              </p>
              <p className="mt-1 text-sm text-gray-500">
                Are you sure you want to delete this item? This action cannot be
                undone.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col border-l border-gray-200">
          <button
            onClick={() => {
              // ✅ put delete logic here
              axiosSecure.delete(`/carts/${id}`).then((res) => {
                if (res.data.deletedCount > 0) {
                  toast.dismiss(t.id);
                  toast.success("Deleted successfully");
                  refetch();
                }
              });
            }}
            className="w-full border-b border-transparent px-4 py-3 flex items-center justify-center text-sm font-medium text-red-600 hover:text-red-500"
          >
            Delete
          </button>
          <button
            onClick={() => toast.dismiss(t.id)}
            className="w-full px-4 py-3 flex items-center justify-center text-sm font-medium text-gray-600 hover:text-gray-500"
          >
            Cancel
          </button>
        </div>
      </div>
    ));
  };

  return (
    <div className="">
      <div className="flex items-center justify-around">
        <h2 className="text-2xl">Total Orders : {cart?.length}</h2>
        <h2 className="text-2xl">Total price : ${total}</h2>
        <button className="btn btn-primary">Pay</button>
      </div>
      {/* table */}
      <div className="overflow-x-auto w-full mt-12">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Image</th>
              <th>Name</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {cart?.map((item, idx) => (
              <tr key={item._id}>
                <th>{idx + 1}</th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img src={item?.image} alt={item?.name} />
                      </div>
                    </div>
                  </div>
                </td>
                <td>{item?.name}</td>
                <td>${item?.price}</td>
                <th>
                  <button
                    onClick={() => handleDelete(item._id)}
                    className="btn btn-ghost btn-md"
                  >
                    <FaTrash className="text-red-500" />
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default Cart;
