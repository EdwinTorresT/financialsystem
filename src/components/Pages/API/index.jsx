import React from 'react';
import { List, Typography } from 'antd';

const { Item } = List;

export default function API() {

    return (
        <div className="d-flex flex-column api">
            <List
                header={<div>Documentación de la API</div>}
                bordered
            >
                <Item className="documentation">
                    <Typography.Text>
                        Esta API es un proyecto abierto y está disponible su repositorio para descargar en
                        <a href="https://github.com/danielmillan/financial-system-backend"
                            rel="noopener noreferrer"
                            target="_blank"> GitHub
                        </a><br className="mb-2" />
                        Sin embargo si desea probar rapidamente los endpoints, puede acceder a esta
                        <a href="https://financial-system-backend-ecci.herokuapp.com"
                            rel="noopener noreferrer"
                            target="_blank"> API
                        </a><br className="mb-2" />
                    </Typography.Text>
                    <Typography.Title level={4} className="title">{`{{API}}/rateconverter`}</Typography.Title>
                    <Typography.Text>
                        Este endpoint permite convertir una tasa de interes determinada a todas las demás, según su
                        periodicidad, metodo de pago y el tipo de la tasa, los parametros que debe recibir son:
                    </Typography.Text>
                </Item>
            </List>
        </div>
    )
}