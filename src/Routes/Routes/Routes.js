import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Home from "../../Pages/Home/Home/Home";
import Employees from "../../Pages/Employees/Employees/Employees";
// import Employees from "../../Pages/Employees/Employees/Employees";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/employees',
                element: <Employees></Employees>,
                // loader: () => fetch(`http://localhost:5000/employees`)
            }
        ]
    }
]);