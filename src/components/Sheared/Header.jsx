import logo from "../../assets/logo.png";
import moment from "moment";
import Marquee from "react-fast-marquee";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <>
      <div className="text-center mx-auto w-96 my-6 mb-6 ">
        <img src={logo} alt="This is Logo" className="mb-5" />
        <p className="mb-3">Journalism Without Fear or Favour</p>
        <h3 className="mb-3 "> {moment().format("dddd,MMMM D, YYYY")} </h3>
      </div>

      {/* Marquee */}
      <div className=" mb-6 flex border py-5 px-5 bg-slate-100 rounded-lg text-2xl ">
        <button className="btn btn-secondary btn-lg"> Latest</button>
        <Marquee  speed={100}>
        Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...
        </Marquee>
      </div>
       
      <div className="mb-16">
      <Navbar></Navbar>
      </div>
    </>
  );
};

export default Header;
