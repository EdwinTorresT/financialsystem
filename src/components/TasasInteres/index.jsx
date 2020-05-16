import React, { useState } from "react";
import { Card, Button, Input, Form } from "antd";
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

    const onFinish = values => {
        const data = {
            type: values.converter.type,
            frequency: values.converter.frequency,
            method: values.converter.method,
            rate: values.rate
        }
        axios.post(`${siteConfig.apiUrl}/rateconverter`, data, { headers: { 'Access-Control-Allow-Origin': 'origin-list' } }).then(result => {
            setList(result.data.rest);
        }).catch(error => {
            console.log(error.response);
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
                <div className="tipo">
                    <Form
                        className="form"
                        {...layout}
                        name="converter"
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                        initialValues={{
                            converter: {
                                type: '',
                                frequency: '',
                                method: ''
                            },
                        }}
                    >

                        <Form.Item
                            label="Tipo de Tasa:"
                            name="converter"
                            rules={[{ required: true, message: 'Ingrese el tipo de tasa' }]}
                        >
                            <TypeInteres />
                        </Form.Item>

                        <Form.Item
                            label="Periodicidad:"
                            name="converter"
                            rules={[{ required: true, message: 'Ingrese la periodicidad' }]}
                        >
                            <Frequency />
                        </Form.Item>

                        <Form.Item
                            label="Forma de Pago:"
                            name="converter"
                            rules={[{ required: true, message: 'Ingrese la forma de pago' }]}
                        >
                            <MethodPayment />
                        </Form.Item>

                        <Form.Item
                            label="Tasa:"
                            name="rate"
                            rules={[{ required: true, message: 'Ingrese la tasa' }]}
                        >
                            <Input placeholder="%" />
                        </Form.Item>

                        <Form.Item {...tailLayout}>
                            <Button type="primary" htmlType="submit">Calcular</Button>
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