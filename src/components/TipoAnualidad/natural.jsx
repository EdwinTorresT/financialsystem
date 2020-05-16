import React, { useState } from "react";
import { Form, Input, Button, InputNumber } from "antd";
import "assets/styles/index.scss";
import axios from "axios";
import siteConfig from 'config/site.config';
// Components
import TableAmortization from "../TableAmortization";

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};

const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
};

export default function Natural() {
    const [list, setList] = useState([]);

    const onFinish = values => {
        const data = {
            value: values.capital,
            deadline: values.deadline,
            interest: values.interest
        };
        axios.post(`${siteConfig.apiUrl}/annuity`, data).then(result => {
            let annuity = result.data.rest;
            const body = {
                value: values.capital,
                deadline: values.deadline,
                interest: values.interest,
                annuity
            }
            axios.post(`${siteConfig.apiUrl}/annuity/getamortization`, body).then(result => {
                setList(result.data.rest);
            }).catch(error => {
                console.log(error.response);
            });
        }).catch(error => {
            console.log(error.response);
        });
    };

    const onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
    };

    return (
        <div>
            <div className="tipo">
                <Form
                    className="form"
                    {...layout}
                    name="natural"
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                >
                    <Form.Item
                        label="Capital:"
                        name="capital"
                        rules={[{ required: true, message: 'Ingrese el capital' }]}
                    >
                        <InputNumber
                            formatter={value => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                            parser={value => value.replace(/\$\s?|(,*)/g, '')}

                        />
                    </Form.Item>

                    <Form.Item
                        label="Interes:"
                        name="interest"
                        rules={[{ required: true, message: 'Ingrese el interes' }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Plazo:"
                        name="deadline"
                        rules={[{ required: true, message: 'Ingrese el Plazo' }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item {...tailLayout}>
                        <Button type="primary" htmlType="submit">
                            Calcular
                    </Button>
                    </Form.Item>
                </Form>

            </div>
            <div className="table-responsive">
                <div>
                    <TableAmortization list={list} />
                </div>
            </div>
        </div>
    )
}
