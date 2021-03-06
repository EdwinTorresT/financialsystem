import React, { useState } from "react";
import { Card, Button, Form, notification, InputNumber } from "antd";
import Logo from "assets/images/heads/interes.png";
import HeadCard from "components/HeadCard";
import axios from "axios";
import siteConfig from 'config/site.config';
import "assets/styles/index.scss";
// Components
import TypeInteres from "../Selects/TypeInteres";
import Frequency from "../Selects/Frequency";
import MethodPayment from "../Selects/MethodPayment";
import TableTasasInteres from "components/TableTasasInteres";

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};

const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
};

export default function TasasInteres() {
    const [list, setList] = useState([]);
    const [loading, setLoading] = useState(false);

    const onFinish = values => {
        setLoading(true);
        let message;
        const data = {
            type: values.type.type,
            frequency: values.period.frequency,
            method: values.method.method,
            rate: values.rate
        }
        console.log(data);
        axios.post(`${siteConfig.apiUrl}/rateconverter`, data, { headers: { 'Access-Control-Allow-Origin': 'origin-list' } }).then(result => {
            console.log(result);
            if (result.data.status === 'success') {
                setList(result.data.rest);
                setLoading(false);
            } else {
                setLoading(false);
                notification.error({
                    message: 'Error en la peticion',
                    description: result.data.error,
                    duration: 4
                });
            }
        }).catch(error => {
            setLoading(false);
            console.log(error.response);
            if (error.response === undefined) message = 'El servidor no está disponible';
            else message = `el servidor ha devuelto: ${error.response}`
            notification.error({
                message: 'Error en la peticion',
                description: message,
                duration: 4
            });
        });
    };

    const onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
    };

    return (
        <div className="tasasInteres">
            <Card title={
                <HeadCard title="Calculadora de Interés" image={Logo} />
            } className="card">
                <div className="tipo-int">
                    <Form
                        className="form"
                        {...layout}
                        name="converter"
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                        initialValues={{
                            converter: {
                                type: undefined,
                                frequency: undefined,
                                method: undefined
                            },
                        }}
                    >

                        <Form.Item
                            label="Tipo de Tasa:"
                            name="type"
                            rules={[{ required: true, message: 'Ingrese el tipo de tasa' }]}
                        >
                            <TypeInteres />
                        </Form.Item>

                        <Form.Item
                            label="Periodicidad:"
                            name="period"
                            rules={[{ required: true, message: 'Ingrese la periodicidad' }]}
                        >
                            <Frequency />
                        </Form.Item>

                        <Form.Item
                            label="Forma de Pago:"
                            name="method"
                            rules={[{ required: true, message: 'Ingrese la forma de pago' }]}
                        >
                            <MethodPayment />
                        </Form.Item>

                        <Form.Item
                            label="Tasa:"
                            name="rate"
                            rules={[{ required: true, message: 'Ingrese la tasa', type: 'number' }]}
                        >
                            <InputNumber placeholder="%" className="rate" />
                        </Form.Item>

                        <Form.Item {...tailLayout}>
                            <Button type="primary" htmlType="submit" loading={loading}>Calcular</Button>
                        </Form.Item>

                    </Form>
                </div>

                <div className="table-responsive">
                    <TableTasasInteres list={list} />
                </div>
            </Card>
        </div>
    )
}
