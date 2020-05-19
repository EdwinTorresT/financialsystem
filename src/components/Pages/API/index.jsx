import React from 'react';
import { Card, Typography } from 'antd';
import { Helmet } from "react-helmet";

export default function API() {

    return (
        <div className="d-flex flex-column api">
            <Helmet>
                <title>Documentación de la API</title>
            </Helmet>
            <Card title={<h3>Documentación de la API</h3>}>
                <p>
                    Esta API es un proyecto abierto y está disponible su repositorio para descargar en
                        <a href="https://github.com/danielmillan/financial-system-backend"
                        rel="noopener noreferrer"
                        target="_blank"> GitHub
                        </a>, Sin embargo si desea probar rapidamente los endpoints, puede acceder a esta
                        <a href="https://financial-system-backend-ecci.herokuapp.com"
                        rel="noopener noreferrer"
                        target="_blank"> API.
                        </a><br />
                </p>
                <Typography.Title level={2} type="danger">{`Metodos Disponibles`}</Typography.Title>
                <Typography.Text>
                    La API cuenta con diversos metodos que son accesibles mediante su url y que poseen
                    distintos parametros que son especificados a continuación.
                    </Typography.Text>
                <Typography.Title level={3} className="title">
                    {`Conversión de tasas`}
                    <Typography.Title level={4} className="mt-2">{`{{API}}/rateconverter`}</Typography.Title>
                </Typography.Title>
                <Typography.Text>
                    Este endpoint permite convertir una tasa de interes determinada a todas las demás, según su
                    periodicidad, metodo de pago y el tipo de la tasa, los parametros que debe recibir son:
                </Typography.Text>
                <Typography.Paragraph className="mt-3">
                    <ul>
                        <li>
                            <b>type: </b> Define el tipo de tasa que será evaluada para el dato de entrada,
                             los valores permitidos son:
                             <ul className="mt-2">
                                <li>Efectiva</li>
                                <li>Nominal</li>
                            </ul>
                        </li>
                        <li>
                            <b>frequency: </b> Es la frecuencia en meses equivalente a un año  especificado de
                            la siguiente manera:
                            <ul className="mt-2">
                                <li>Anual (1 año)</li>
                                <li>Semestral (2 meses)</li>
                                <li>Trimestral (4 meses)</li>
                                <li>Bimensual (6 meses)</li>
                                <li>mensual (12 meses)</li>
                            </ul>
                        </li>
                        <li>
                            <b>method: </b> El tipo de pago con el que será cancelada la tasa de interes, los valores
                            permitidos son:
                            <ul className="mt-2">
                                <li>Vencida</li>
                                <li>Anticipada</li>
                            </ul>
                        </li>
                        <li>
                            <b>rate: </b>El valor numerico de la tasa que se desea convertir, sin decimales, el sistema
                            convierte automaticamente estos valores, por ejemplo para una tasa del 2% digite 2 en vez
                            de 0.2 ó 0,2.
                        </li>
                    </ul>
                    <h4>Response:</h4>
                    <p>El endpoint devolvera en formato JSON el objeto con la información de cada una de las tasas
                    convertidas, así como la periodicidad y tipo, el resultado debe ser algo como esto:
                    </p>
                    <pre>
                        <code>
                            {`{
    "status": "success",
    "rest": [
        {
            "title": "Efectiva Vencida",
            "frequency": "Mensual",
            "rate": 1.6396356814853519
        },
        {
            "title": "Efectiva Vencida",
            "frequency": "Bimestral",
            "rate": 3.306155414650691
        }]
}`}
                        </code>
                    </pre>
                </Typography.Paragraph>
                <Typography.Title level={3} className="title">
                    {`Calcular Valor de Anualidad`}
                    <Typography.Title level={4} className="mt-2">{`{{API}}/annuity`}</Typography.Title>
                </Typography.Title>
                <Typography.Text>
                    Este endpoint permite calcular el valor de la anualidad dado un valor presente y sus respectivos
                    parametros:
                </Typography.Text>
                <Typography.Paragraph className="mt-3">
                    <ul>
                        <li className="mt-2">
                            <b>value: </b> Es el valor presente con el que se desea calcular la anualidad, expresado
                            sin comas ni puntos, por ejemplo para un monto de $ 12'000.000, debe ser 12000000.
                        </li>
                        <li className="mt-2">
                            <b>interest: </b> Es la tasa de interes con la que será marcada la anualidad, digite el valor
                            numerico sin puntos o comas, por ejemplo para una tasa del 2% digite 2 en vez
                            de 0.2 ó 0,2.
                        </li>
                        <li className="mt-2">
                            <b>deadline: </b> Será el plazo estipulado para la anualidad, es decir su duración, por ejemplo 48 meses.
                        </li>
                    </ul>
                    <h4>Response:</h4>
                    <p>El endpoint devolvera en formato JSON el objeto con la información de la anualidad calculada
                    el resultado debe ser algo como esto:
                    </p>
                    <pre>
                        <code>
                            {`{
    "status": "success",
    "rest": "328266.96"
}`}
                        </code>
                    </pre>
                </Typography.Paragraph>
                <Typography.Title level={3} className="title">
                    {`Construir tabla de amortización`}
                    <Typography.Title level={4} className="mt-2">{`{{API}}/annuity/getamortization`}</Typography.Title>
                </Typography.Title>
                <Typography.Text>
                    Este endpoint permite construir la tabla de amortización de acuerdo a unos datos de entrada,
                    los parametros que recibe son:
                </Typography.Text>
                <Typography.Paragraph className="mt-3">
                    <ul>
                        <li className="mt-2">
                            <b>deadline: </b> Será el plazo estipulado para la anualidad, es decir su duración, por ejemplo 48 meses.
                        </li>
                        <li className="mt-2">
                            <b>value: </b> Es el valor presente con el que se desea calcular la anualidad, expresado
                            sin comas ni puntos, por ejemplo para un monto de $ 12'000.000, debe ser 12000000.
                        </li>
                        <li className="mt-2">
                            <b>annuity: </b> La anualidad con la que desea construir la tabla de amortización, expresada
                            sin comas ni puntos, por ejemplo para una anualiadd de $ 340.650, debe ser 340650.
                        </li>
                        <li className="mt-2">
                            <b>interest: </b> Es la tasa de interes con la que será marcada la anualidad, digite el valor
                            numerico sin puntos o comas, por ejemplo para una tasa del 2% digite 2 en vez
                            de 0.2 ó 0,2.
                        </li>
                    </ul>
                    <h4>Response:</h4>
                    <p>El endpoint devolvera en formato JSON el objeto con la información de la anualidad calculada
                    en todos los periodos correspondientes de la anualidad, el resultado debe ser algo como esto:
                    </p>
                    <pre>
                        <code>
                            {`{
    "status": "success",
    "rest": [
        {
            "period": 1,
            "capital": "12000000",
            "interest": 140580,
            "amortization": "187686.96",
            "a": "328266.96",
            "balance": "11812313.04"
        },
        {
            "period": 2,
            "capital": 11812313.04,
            "interest": 138381.24726359997,
            "amortization": "189885.71",
            "a": "328266.96",
            "balance": "11622427.33"
        }]
}`}
                        </code>
                    </pre>
                </Typography.Paragraph>
            </Card>
        </div>
    )
}