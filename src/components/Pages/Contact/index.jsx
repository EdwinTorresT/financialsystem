import React from 'react';
import Banner from "assets/images/contact-me.jpg";
import { Tag, Descriptions } from 'antd';
import "assets/styles/index.scss";

export default function Contact() {
    return (
        <div className="contact">
            <div className="contact-container">
                <img
                    alt="Contact Banner"
                    src={Banner}
                    className="contact-banner"
                />
                <div className="contact-text">
                    <Tag color="#108ee9">Obten Información</Tag>
                </div>
            </div>
            <div className="contact-info">
                <Descriptions title="Contacta al Desarrollador">
                    <Descriptions.Item label="Repositorio" span={3}>
                        <a href="https://github.com/danielmillan/financial-system" target="_blank" rel="noopener noreferrer">
                            https://github.com/danielmillan/financial-system
                        </a>
                    </Descriptions.Item>
                    <Descriptions.Item label="Correo">danielf.millanp@ecci.edu.co</Descriptions.Item>
                    <Descriptions.Item label="Ciudad">Bogotá, Distrito Capital</Descriptions.Item>
                </Descriptions>
            </div>
        </div>
    )
}