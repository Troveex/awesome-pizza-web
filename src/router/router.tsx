import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";

const HomePage = lazy(() => import("../pages/home/home.page"));

const router = createBrowserRouter(
    [
        {
            path: "/",
            children: [
                {
                    path: "home",
                    element: <HomePage />
                },
            ]
        }
    ]
);

export default router;
