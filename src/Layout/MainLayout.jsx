import { Outlet } from "react-router-dom";

const MainLayout = () => {
    return (
        <div className="container mx-auto font-popins">
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;