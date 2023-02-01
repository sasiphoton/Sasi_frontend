import React from 'react'
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

const Routes = () => {
    const router = createBrowserRouter([
        {
            path: "/",
        },
    ]);
    return (
        <>
        <RouterProvider router={router} />
        </>
    )
}

export default Routes;
