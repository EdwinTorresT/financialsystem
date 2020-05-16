import React from "react";
import { Layout } from 'antd';
import "assets/styles/index.scss";
import siteConfig from 'config/site.config';

const { Footer } = Layout;

export default function FooterComponent() {
    return (
        <Footer className="footer">
            {siteConfig.footerText}
            <a href="https://github.com/danielmillan" target="_blank" rel="noopener noreferrer">
                {siteConfig.autor}
            </a>
        </Footer>
    )
}