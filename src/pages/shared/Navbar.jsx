import { Link } from "react-router-dom";

const Navbar = () => {
  const navOpt = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/menu">Menu</Link>
      </li>
      <li>
        <Link to="/order/salad">Order</Link>
      </li>
      <li>
        <a>Contacts</a>
      </li>
    </>
  );

  return (
    <>
      <div className="navbar bg-black/30 fixed text-white z-10 bg-opacity-30 max-w-screen-xl mx-auto ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {navOpt}
            </ul>
          </div>
          <Link to="/" className="btn btn-ghost text-xl">
            DinePro
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navOpt}</ul>
        </div>
        <div className="navbar-end">
          <Link to='/login' className="btn">Login</Link>
        </div>
      </div>
    </>
  );
};
export default Navbar;
