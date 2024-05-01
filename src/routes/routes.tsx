import { createBrowserRouter } from "react-router-dom";
import { CreateListPage, IndexPage, Layout, ProfilePage } from "./index";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: '/',
                element: <IndexPage />
            },
            {
                path: 'create',
                element: <CreateListPage />
            },
            {
                path: '/profile',
                element: <ProfilePage />
            }
        ]
    },
    {
        path: 'auth/login',
        element: <p>Login Page</p>
    },
    {
        path: 'auth/register',
        element: <p>Register Page</p>
    }
]);