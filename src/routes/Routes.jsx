import { Navigate, createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Category from "../pages/home/Category/Category";
import NewsPage from "../layouts/NewsPage";
import News from "../pages/News/News/News";
import LoginLayout from "../layouts/LoginLayout";
import Login from "../pages/Login/Login/Login";
import Register from "../pages/Login/Register/Register";
import PrivetRoutes from "./PrivetRoutes";
import Terms from "../pages/shared/Terms/Terms";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginLayout></LoginLayout>,
    children: [
      {
        path: "/",
        element: <Navigate to="category/0"></Navigate>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
      {
        path: "terms",
        element: <Terms></Terms>,
      },
    ],
  },
  {
    path: "category",
    element: <Main></Main>,
    children: [
      {
        path: ":id",
        element: <Category></Category>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/category/${params.id}`),
      },
    ],
  },
  {
    path: "news",
    element: <NewsPage></NewsPage>,
    children: [
      {
        path: ":id",
        element: (
          <PrivetRoutes>
            <News></News>
          </PrivetRoutes>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/news/${params.id}`),
      },
    ],
  },
]);

export default router;
