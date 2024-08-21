import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";

//#region layout
const HomePage = lazy(() => import("../pages/home/home.page"));
const ErrorPage = lazy(() => import("../pages/error-page/error-page"));
//#endregion 

//#region pages
const PizzaChefPage = lazy(() => import("../pages/pizza-chef/pizza-chef.page"));
const Customers = lazy(() => import("../pages/customers/customers.page"));
//#endregion

const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <HomePage />,
            errorElement: <ErrorPage />
        },
        {
            path: "/pizza-chef",
            element: <PizzaChefPage />
        },
        {
            path: "/customers",
            element: <Customers />
        }
    ]
);

export default router;
