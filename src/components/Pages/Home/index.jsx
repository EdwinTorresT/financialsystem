import React from 'react';
import { Collapse } from "antd";
import "assets/styles/index.scss";
//Components
import TasasInteres from "components/TasasInteres";
import Anualidades from "components/Anualidades";

const { Panel } = Collapse;

export default function Home() {
    return (
        <div className="home">
            <div className="accordion">
                <Collapse bordered={false}>
                    <Panel header="Conversión Tasas de Interés" key="1">
                        <TasasInteres />
                    </Panel>

                    <Panel header="Anualidades" key="3">
                        <Anualidades />
                    </Panel>
                </Collapse>
            </div>
        </div>
    )
}