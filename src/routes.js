import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { Layout } from 'antd';
import Loader from 'components/Loader';
import Header from 'components/Header';
import Footer from "components/Footer";
import { PUBLIC_ROUTE } from "./routesConstants";
import 'assets/styles/index.scss';

const { Content } = Layout;

const publicRoutes = [
    {
        path: PUBLIC_ROUTE.HOME,
        component: lazy(() => import('components/Pages/Home'))
    },
    {
        path: PUBLIC_ROUTE.API,
        component: lazy(() => import('components/Pages/API'))
    },
    {
        path: PUBLIC_ROUTE.CREDITS,
        component: lazy(() => import('components/Pages/Credits'))
    },
    {
        path: PUBLIC_ROUTE.CONTACT,
        component: lazy(() => import('components/Pages/Contact'))
    }
];

export default function Routes() {
    return (
        <Router>
            <Layout className="layout">
                <Header />
                <Suspense fallback={<Loader />}>
                    <Content style={{ margin: '16px 0' }}>
                        <div className="site-layout-content">
                            <Switch>
                                {publicRoutes.map((route, index) => (
                                    <Route key={index} path={route.path} exact={true}>
                                        <route.component />
                                    </Route>
                                ))}
                                <Route path="/" >
                                    <Redirect to={"/home"} />
                                </Route>
                            </Switch>
                        </div>
                    </Content>

                </Suspense>
                <Footer />
            </Layout>
        </Router>
    )
}