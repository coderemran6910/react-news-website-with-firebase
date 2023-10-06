import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { toast } from "react-toastify";

const Register = () => {
  const { createUser } = useContext(AuthContext);

  const handleRegister = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);

    // const name = form.get('name')
    // const imageUrl = form.get('imageUrl')
    const email = form.get("email");
    const password = form.get("password");

    // Create User
    console.log(email, password);
    createUser(email,password)
      .then((res) => {
        console.log(res.user);
        toast.success("Thanks!! Login successfuly");
      })
      .catch((error) => {
        console.log(error);
        toast.error(`Ooops: ${error.message}`);
      });
  };
  return (
    <div>
      <form
        onSubmit={handleRegister}
        className="card-body w-2/4 mx-auto px-10 py-10 border rounded-lg"
      >
       
       <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            name="name"
            type="text"
            placeholder="name"
            className="input input-bordered bg-slate-200  border-none  outline-none"
          />
        </div>

        

        <div className="form-control">
          <label className="label">
            <span className="label-text">Image Url</span>
          </label>
          <input
            name="imageUrl"
            type="text"
            placeholder="ImageUrl"
            className="input input-bordered bg-slate-200  border-none  outline-none"
          />
         
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            name="email"
            type="email"
            placeholder="name"
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
          
        </div>
        <div className="form-control mt-6">
          <button type="submit" className="btn btn-primary">
            Register
          </button>
        </div>
        <h3 className="text-center ">
        Already have an Account ?{" "}
        <span className="text-blue-500  font-extrabold">
          <Link to={"/login"}>Login</Link>
        </span>
      </h3>
      </form>
      
    </div>
  );
};

export default Register;
