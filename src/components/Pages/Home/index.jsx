import React from 'react';
import { Collapse } from "antd";
import "assets/styles/index.scss";
import { Helmet } from "react-helmet";
//Components
import TasasInteres from "components/TasasInteres";
import Anualidades from "components/Anualidades";

const { Panel } = Collapse;

export default function Home() {
    return (
        <div className="home">
            <Helmet>
                <title>Sistema Financiero</title>
            </Helmet>
            <div className="accordion">
                <Collapse bordered={false} defaultActiveKey={['2']}>
                    <Panel header="Conversión Tasas de Interés" key="1">
                        <TasasInteres />
                    </Panel>

                    <Panel header="Anualidades" key="2">
                        <Anualidades />
                    </Panel>
                </Collapse>
            </div>
        </div>
    )
}