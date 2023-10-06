import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
const PrivateComponent = ({children}) => {
const {user, loader} = useContext(AuthContext)
const location = useLocation()


if(loader){
  return <div className="max-h-screen flex justify-center items-center" ><span className="loading loading-dots loading-lg  mx-auto p-10 "></span></div>


}
if(user){
    return(
        children
    )
}
return (
        <div>
            <Navigate state={location.pathname} to={'/login'}></Navigate>
        </div>
    );
};

export default PrivateComponent;