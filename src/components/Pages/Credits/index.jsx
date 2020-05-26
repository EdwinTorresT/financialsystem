import React from 'react';
import { Card, Typography } from "antd";
import { Helmet } from "react-helmet";
import AntLogo from "assets/images/icons-credits/ant.png";
import FlatIconLogo from "assets/images/icons-credits/flaticon_negative.png";
import FirebaseLogo from "assets/images/icons-credits/firebase.png";
import ReactLogo from "assets/images/icons-credits/react.png";
import BootstrapLogo from "assets/images/icons-credits/bootstrap.png";
import ScrollToTop from 'react-scroll-up';
import { FiArrowUpCircle } from "react-icons/fi";
import "assets/styles/index.scss";

export default function Credits() {
    return (
        <div className="d-flex flex-column credits">
            <Helmet>
                <title>Creditos de la aplicación</title>
            </Helmet>
            <div>
                <Card title={<h3 className="title-card">Creditos de la Aplicación</h3>}>
                    <div className="list-credits">
                        <Typography.Text>
                            <img src={AntLogo}
                                alt="antd_icon"
                                className="icon"
                            />
                        </Typography.Text>
                        <p className="description">Ant Design -
                        <a href="https://ant.design/"
                        target="_blank"
                        rel="noreferrer" 
                        > A design system for enterprise-level products</a>
                        </p>
                    </div>
                    <div className="list-credits">
                        <Typography.Text>
                            <img src={FlatIconLogo}
                                alt="flaticon_icon"
                                className="icon"
                            />
                        </Typography.Text>
                        <p className="description">Flaticon -
                        <a href="https://www.flaticon.com/"
                        target="_blank"
                        rel="noreferrer" 
                        > Iconos vectoriales gratis.</a>
                        </p>
                    </div>
                    <div className="list-credits">
                        <Typography.Text>
                            <img src={FirebaseLogo}
                                alt="firebase_icon"
                                className="icon"
                            />
                        </Typography.Text>
                        <p className="description">Firebase -
                        <a href="https://firebase.google.com/?hl=es-419&gclid=CjwKCAjw5Ij2BRBdEiwA0Frc9dSZBdSZh09No-GF6bTFkWkcgFJF2fdzWvf7xZpUrIxcG9V0460kPBoC0FoQAvD_BwE"
                        target="_blank"
                        rel="noreferrer" 
                        > Una plataforma gratuita para desarrollar y hacer crecer tus apps.</a>
                        </p>
                    </div>
                    <div className="list-credits">
                        <Typography.Text>
                            <img src={ReactLogo}
                                alt="react_icon"
                                className="icon"
                            />
                        </Typography.Text>
                        <p className="description">React -
                        <a href="https://es.reactjs.org/"
                        target="_blank"
                        rel="noreferrer" 
                        > Una biblioteca de JavaScript para construir interfaces de usuario.</a>
                        </p>
                    </div>
                    <div className="list-credits">
                        <Typography.Text>
                            <img src={BootstrapLogo}
                                alt="react_icon"
                                className="icon"
                            />
                        </Typography.Text>
                        <p className="description">Bootstrap -
                        <a href="https://getbootstrap.com/"
                        target="_blank"
                        rel="noreferrer" 
                        > The most popular HTML, CSS, and JS library in the world.</a>
                        </p>
                    </div>
                </Card>
            </div>
            <ScrollToTop showUnder={160}>
                <FiArrowUpCircle className="back-icon" />
            </ScrollToTop>
        </div>
    )
}