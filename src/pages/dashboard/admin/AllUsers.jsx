import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import toast from "react-hot-toast";
import useCart from "../../../hooks/useCart";
import { FaTrash, FaUsers } from "react-icons/fa";

const AllUsers = () => {
  const axiosSecure = useAxiosSecure();
  const [, refetch] = useCart();

  const { data: users = [] } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });

  const handleMakeAdmin = (id) => {
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
                Admin Confirmation
              </p>
              <p className="mt-1 text-sm text-gray-500">
                Are you sure you want to Make this person Admin? This action
                cannot be undone.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col border-l border-gray-200">
          <button
            onClick={() => {
              axiosSecure.patch(`/users/admin/${id}`).then((res) => {
                if (res.data.modifiedCount > 0) {
                  toast.dismiss(t.id);
                  toast.success("Make Admin successful");
                  refetch();
                }
              });
            }}
            className="w-full border-b border-transparent px-4 py-3 flex items-center justify-center text-sm font-medium text-red-600 hover:text-red-500"
          >
            Yes
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
              axiosSecure.delete(`/users/${id}`).then((res) => {
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
      <div className="flex justify-evenly mt-4">
        <h2 className="text-3xl">Total Users : {users?.length}</h2>
      </div>
      {/* table */}

      <div className="overflow-x-auto w-full mt-12">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users?.map((item, idx) => (
              <tr key={item._id}>
                <th>{idx + 1}</th>

                <td>{item?.name}</td>
                <td>{item?.email}</td>
                <td>
                  {item?.role === "admin" ? (
                    <h2 className="font-bold">Admin</h2>
                  ) : (
                    <button
                      onClick={() => handleMakeAdmin(item._id)}
                      className="btn btn-md bg-orange-500 "
                    >
                      <FaUsers className="text-white text-xl" />
                    </button>
                  )}
                </td>
                <th>
                  <button
                    onClick={() => handleDelete(item._id)}
                    className="btn btn-ghost btn-md"
                  >
                    <FaTrash className="text-red-500 text-xl" />
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
export default AllUsers;
