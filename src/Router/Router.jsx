import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import HomePage from "../Pages/HomePage";
import LoginPage from "../Pages/LoginPage";
import RegisterPage from "../Pages/RegisterPage";
import NewsCard from "../Pages/NewsCard";
import NewsPage from "../Pages/NewsPage";
import PrivateComponent from "../components/PrivateComponent/PrivateComponent";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: "/",
                loader: ()=> fetch('/news.json'),
                element: <HomePage> </HomePage>
            },
            {
                path: "/news/:id",
                loader: ()=> fetch('/news.json'),
                element: <PrivateComponent> <NewsPage></NewsPage> </PrivateComponent>
            },
            {
                path: "/login",
                element: <LoginPage></LoginPage>
            },
            {
                path: "/register",
                element: <RegisterPage></RegisterPage>
            }
        ]
    }
])

export default router;