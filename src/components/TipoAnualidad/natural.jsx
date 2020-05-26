import React, { useState, useEffect } from "react";
import { Form, Button, InputNumber, Switch, notification } from "antd";
import "assets/styles/index.scss";
import axios from "axios";
import siteConfig from 'config/site.config';
// Components
import TableAmortization from "../TableAmortization";
import ExtraPayments from "./extraPayments";

export default function Natural() {
    const [list, setList] = useState([]);
    const [fields, setFields] = useState([
        {
            name: ['capital'],
            value: undefined
        },
        {
            name: ['deadline'],
            value: undefined
        },
        {
            name: ['interest'],
            value: undefined
        },
        {
            name: ['enable'],
            value: false
        }
    ]);
    const [payments, setPayments] = useState([]);
    const [enable, setEnable] = useState(false);
    const [disabled, setDisabled] = useState(false);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (fields[3].value) {
            setEnable(true);
            setPayments([]);
        } else {
            setPayments(undefined);
            setEnable(false);
            setDisabled(false);
        }
    }, [fields])

    const validate = () => {
        if (payments) {
            payments.map((item, index) => {
                if (item.period < 2) {
                    notification.error({
                        message: 'Error en los abonos',
                        description: `No puede hacer abonos en el periodo ${item.period}, revise el pago N° ${index + 1}`,
                        duration: 4
                    });
                    return false;
                } else if (item.period > fields[2].value) {
                    notification.error({
                        message: 'Error en los abonos',
                        description: `No puede hacer abonos en un periodo mayor al plazo estipulado: (${fields[2].value}), revise el pago N° ${index + 1}`,
                        duration: 4
                    });
                    return false;
                }
            });
        }
        return true;
    }

    const onFinish = () => {
        setLoading(true);
        let message;
        let data;
        let extra;
        let add = undefined;
        if (validate()) {
            payments ? extra = true : extra = false;
            if (extra) {
                add = payments;
            }
            data = {
                value: fields[0].value,
                interest: fields[1].value,
                deadline: fields[2].value
            };
            console.log(data);
            axios.post(`${siteConfig.apiUrl}/annuity`, data).then(result => {
                let annuity = result.data.rest;
                const body = {
                    value: data.value,
                    interest: data.interest,
                    deadline: data.deadline,
                    annuity,
                    extra,
                    payments: add
                }
                console.log(body);
                axios.post(`${siteConfig.apiUrl}/annuity/getamortization`, body).then(result => {
                    setList(result.data.rest);
                    setLoading(false);
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
        }
    };

    const onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
    };

    return (
        <div>
            <div className="tipo">
                <div className="container-form">
                    <Form
                        className="form"
                        name="natural"
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                        onFieldsChange={(changedFields, allFields) => { setFields(allFields) }}
                        fields={fields}
                    >
                        <div className="basic-fields">
                            <div className="inputs">
                                <Form.Item
                                    label="Capital:"
                                    name="capital"
                                    rules={[{ required: true, message: 'Ingrese el capital', type: 'number' }]}
                                >
                                    <InputNumber
                                        formatter={value => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                                        parser={value => value.replace(/\$\s?|(,*)/g, '')} />
                                </Form.Item>

                                <Form.Item
                                    label="Interes:"
                                    name="interest"
                                    rules={[{ required: true, message: 'Ingrese el interes', type: 'number' }]}
                                >
                                    <InputNumber placeholder="Ej: 1.2" />
                                </Form.Item>

                                <Form.Item
                                    label="Plazo:"
                                    name="deadline"
                                    rules={[{ required: true, message: 'Ingrese el Plazo', type: 'number' }]}
                                >
                                    <InputNumber placeholder="Ej: 48" />
                                </Form.Item>
                            </div>

                            <div className="conditional">
                                <Form.Item label="Existen Pagos extraordinarios" name="enable" valuePropName="checked">
                                    <Switch />
                                </Form.Item>
                            </div>

                            <div className="extra">
                                {enable === true &&
                                    <ExtraPayments payments={payments} setPayments={setPayments} setDisabled={setDisabled} />
                                }
                            </div>

                            <div className="button-ok">
                                <Button type="primary" htmlType="submit" loading={loading} disabled={disabled}>
                                    Calcular
                                </Button>
                            </div>
                        </div>
                    </Form>
                </div>
            </div>
            <div className="table-responsive">
                <div>
                    <TableAmortization list={list} />
                </div>
            </div>
        </div>
    )
}
