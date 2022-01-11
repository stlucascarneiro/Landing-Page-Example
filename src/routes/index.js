import React from 'react';
import { Route } from "react-router-dom";

import Page404 from "pages/404";

const routes = [
    { id: 4, path: '/404', component: Page404 },
]

const Index = () => {
    return (
        <>
            {routes.map((elem, index) => {
                const Component = elem.component
                return (
                    <Route key={index} exact path={elem.path}>
                        <Component />
                    </Route>)
            })}
        </>
    )
}

export default Index;