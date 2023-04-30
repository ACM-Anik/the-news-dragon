import { Navigate, createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home/Home";
import Category from "../pages/Home/Category/Category";
import News from "../pages/News/News";
import NewsLayout from "../layout/NewsLayout";
import LoginLayout from "../layout/LoginLayout";
import Login from "../pages/Login/Login";
import Register from "../pages/Login/Register";
import PrivateRoute from "./PrivateRoute";
import Terms from "../pages/Shared/Terms";


const router = createBrowserRouter([
    {

        path: '/',
        element: <LoginLayout></LoginLayout>,
        children: [
            {

                path: '/',
                element: <Navigate to="/category/0"></Navigate>,

            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/terms',
                element: <Terms></Terms>
            }
        ]

    },
    {
        path: '/category',
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: ':id',
                element: <Category></Category>,
                loader: ({ params }) => fetch(`https://the-dragon-news-server-acm-anik.vercel.app/categories/${params.id}`)
            }
        ]
    },

    {
        path: 'news',
        element: <NewsLayout></NewsLayout>,
        children: [
            {
                path: ':id',
                element: <PrivateRoute>
                    <News></News>
                </PrivateRoute>,
                loader: ({ params }) => fetch(`https://the-dragon-news-server-acm-anik.vercel.app/news/${params.id}`)
            }
        ]
    }
])

export default router;