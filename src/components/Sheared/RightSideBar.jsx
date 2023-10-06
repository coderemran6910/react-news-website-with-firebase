import {
  FaFacebook,
  FaGithub,
  FaGoogle,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";
import Qzone1 from '../../assets/qZone1.png'
import Qzone2 from '../../assets/qZone2.png'
import Qzone3 from '../../assets/qZone3.png'



const RightSideBar = () => {
  return (
    <div>
      {/* Login with */}
      <div className="mb-10">
        <h2 className="text-left text-3xl font-extrabold mb-5">Login With </h2>

        <NavLink className="btn w-full px-2 my-2">
          <FaGoogle></FaGoogle>
          Login with google
        </NavLink>

        <NavLink className="btn w-full px-2 my-2">
          <FaGithub />
          login with Github
        </NavLink>
      </div>

      {/* Find Us  */}
      <div className="mb-10">
        <h2 className="text-left text-3xl font-extrabold mb-5">Find Us On </h2>
        <div className="flex flex-col justify-start">
          <NavLink className="btn w-36   px-2 my-2">
            <FaFacebook className="text-3xl"></FaFacebook>
            Facebook
          </NavLink>
          <NavLink className="btn w-36 px-2 my-2">
            <FaTwitter className="text-3xl"></FaTwitter>
            Facebook
          </NavLink>
          <NavLink className="btn w-36 px-2 my-2">
            <FaInstagram className="text-3xl"></FaInstagram>
            Facebook
          </NavLink>
        </div>
      </div>

      {/* Q -zoone */}
      <div className="py-5 px-2 bg-slate-100 rounded-lg">
        <h2 className="text-left text-3xl font-extrabold mb-5">Q - ZOONE</h2>
            <div className="grid grid-cols-1 gap-5 place-items-center">
                <img src={Qzone1} alt="" />
                <img src={Qzone2} alt="" />
                <img src={Qzone3} alt="" />
            </div>
      </div>
    </div>
  );
};

export default RightSideBar;
