import MainLayout from "./pages/layout";
import Home from "./pages/home";
import Search from "./pages/search";
import Library from "./pages/library";
import LikedSongs from "./pages/liked_songs";
import CreatePlaylist from "./pages/create_playlist";

const routes = [
    {
        path: "/",
        element: <MainLayout/>,
        auth: true,
        children: [
            {
                index: true,
                element: <Home/>
            },
            {
                path: "search",
                element: <Search/>
            },
            {
                path: "library",
                element: <Library/>
            },
            {
                path: "liked_songs",
                element: <LikedSongs/>
            },
            {
                path: "create_playlist",
                element: <CreatePlaylist/>
            }
        ]
    }
]

const authCheck = routes => routes.map(route => {
    
    // eğer kontrol zorunluysa elementi PrivateRoute ile sarmalıyor
    // PrivateRoute içerisinde de user'in olup olmadığı kontrol ediliyor
    /*if (route?.auth) {
        route.element = <PrivateRoute>{route.element}</PrivateRoute>
    }*/
    if (route?.children) {
        route.children = authCheck(route.children)
    }

    return route
})

export default authCheck(routes)