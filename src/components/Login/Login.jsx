import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { toast } from "react-toastify";

const Login = () => {
const {loginUser}= useContext(AuthContext)
const location = useLocation()
const navigate = useNavigate()

  const handleLogin = (e) => {
    e.preventDefault()
    const form = new FormData(e.currentTarget)

    
    const email = form.get("email")
    const password = form.get("password")

    console.log(email);
    loginUser(email, password )
    .then(res => {
      console.log(res.user);
      toast.success("Wowowo!! Login Success")
      navigate(location?.state ? location.state : '/')
    })
    .catch(error => {
      toast(`Oppps Sorry Year! ${error.message}`)
    })

  };
 
  return (
    <div>
      <form
        onSubmit={handleLogin}
        className="card-body w-2/4 mx-auto p-20 border rounded-lg"
      >
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            name="email"
            type="email"
            placeholder="email"
            className="input input-bordered bg-slate-200  border-none  outline-none"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            name="password"
            type="password"
            placeholder="password"
            className="input input-bordered bg-slate-200  border-none  outline-none" 
          />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">
              Forgot password?
            </a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button type="submit" className="btn btn-primary">
            Login
          </button>
        </div>
      </form>
      <h3 className="text-center ">
        Dont have an Account?{" "}
        <span className="text-blue-500  font-extrabold">
          <Link to={"/register"}>Register</Link>
        </span>
      </h3>
    </div>
  );
};

export default Login;
