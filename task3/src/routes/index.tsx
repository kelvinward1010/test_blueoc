import { createBrowserRouter } from "react-router-dom";
import { Home } from "../pages";
import { homeUrl } from "./url";



export const routerConfig = createBrowserRouter([
    {
        path: homeUrl,
        element: <Home />
    }
])