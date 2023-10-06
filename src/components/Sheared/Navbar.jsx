import { Link, NavLink } from "react-router-dom";
import UserImage from "../../assets/user.png";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { toast } from "react-toastify";
const Navbar = () => {
  const { user , logOut } = useContext(AuthContext);
  // console.log(user?.email);
  const navLink = (
    <>
      <NavLink to={"/"}>Home</NavLink>
      <NavLink to={"/about"}>About</NavLink>
      <NavLink to={"/career"}>Career</NavLink>
    </>
  );

  const handleLogOut =()=>{
    logOut()
    .then(()=>{
      toast.done("log Out Successfull")
    })
    .catch(error =>{
      toast.error(error.message)
    })
  }

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 space-x-5"
          >
            {navLink}
          </ul>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 space-x-5">{navLink}</ul>
      </div>
      <div className="navbar-end flex">
        <h3 className="text-sm font-bold mr-5">{user?.email} </h3>
        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
          <div className="w-10 rounded-full">
            <img src={user?.photoURL? user?.photoURL : UserImage}  />
          </div>
        </label>
        {!user ? (
          <Link className=" p-2 bg-slate-800 text-white rounded-sm" to={"/register"}>
            Register
          </Link>
        ) : (
          <Link className=" p-2 bg-slate-800 text-white rounded-sm" onClick={handleLogOut}>
            Log Out
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
