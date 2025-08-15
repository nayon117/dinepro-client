import { FaEdit, FaTrash } from "react-icons/fa";
import SectionTitle from "../../../components/SectionTitle";
import useFetch from "../../../hooks/useFetch";
import toast from "react-hot-toast";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useCart from "../../../hooks/useCart";
import { Link } from "react-router-dom";

const ManageItems = () => {
  const [data] = useFetch("http://localhost:5000/menu");
  const axiosSecure = useAxiosSecure();
  const [, refetch] = useCart();

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
              axiosSecure.delete(`/menu/${id}`).then((res) => {
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
      <SectionTitle heading="Mangage All Item" subHeading="Hurry Up" />

      <div className="overflow-x-auto w-full mt-12">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Image</th>
              <th>Name</th>
              <th>Price</th>
              <th>Update</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((item, idx) => (
              <tr key={item._id}>
                <td>{idx + 1}</td>

               <td>
                 <div className="avatar">
                  <div className="mask mask-squircle h-12 w-12">
                    <img
                      src={item?.image}
                      alt="Avatar Tailwind CSS Component"
                    />
                  </div>
                </div>
               </td>
                <td>{item?.name}</td>
                <td>{item?.price}</td>
                <td>
                  <Link to={`/dashboard/updateItem/${item._id}`}>
                    <button className="btn btn-ghost btn-md">
                      <FaEdit className="text-red-300 text-xl" />
                    </button>
                  </Link>
                </td>

                <td>
                  <button
                    onClick={() => handleDelete(item._id)}
                    className="btn btn-ghost btn-md"
                  >
                    <FaTrash className="text-red-500 text-xl" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default ManageItems;
