import React from "react";
import { Card, Tabs } from "antd";
import Logo from "assets/images/heads/ano.png";
import HeadCard from "components/HeadCard";
import "assets/styles/index.scss";
// components
import Natural from "../TipoAnualidad/natural";
import Juridica from "../TipoAnualidad/juridico";

const { TabPane } = Tabs;

export default function Anualidades() {
    return (
        <div className="anualidades">
            <Card title={
                <HeadCard title="Calculadora de Anualidades" image={Logo} />
            } className="card">
                <div>
                    <Tabs type="card">
                        <TabPane tab="Persona Natural" key="1">
                            <Natural />
                        </TabPane>
                        <TabPane tab="Persona Juridica" key="2">
                            <Juridica />
                        </TabPane>
                    </Tabs>
                </div>
            </Card>
        </div>
    )
}
