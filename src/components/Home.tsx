import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import discordContext from "../context/discordContext";
import { FixedNavBar } from "./FixedNavBar";
import { ListGameAds } from "./ListGameAds";
import { Page404 } from "./Page404";

export function Home() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <App />,
            errorElement: <Page404/>
        },
        {
            path: 'ads/:gameTitle',
            element: <ListGameAds />,
        },
    ]);

const {user, isLogged,discordApiInfo} = useContext(discordContext)

    return (
        <discordContext.Provider value={{ isLogged, user, discordApiInfo }}>
            <FixedNavBar />
            <RouterProvider router={router} />
        </discordContext.Provider>
    )
}