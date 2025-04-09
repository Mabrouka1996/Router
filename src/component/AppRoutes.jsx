import React, { Children } from 'react'
import Accuiel from './Accuiel'
import Blog from './Blog'
import Article from './Article'
import Profile from './Profile'
import NotFound from './NotFound'

import { useRoutes } from 'react-router-dom'
import Update from './Update'


function AppRoutes() {
    const routes = useRoutes([
        {path:"/" , element:<Accuiel/>},
        {path:"/blog", element:<Blog/>},
        {path:"/articles/:id" , element:<Article/>},
        {path:"/profile" , 
        element:<Profile/>,
            children: [
                {

                    path: "/profile/settings",
                    element: <Update/>,
                }
            ]
        },
        {path:"/*", element:<NotFound/>}

    ]);
  return routes;
}

export default AppRoutes