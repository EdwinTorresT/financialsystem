import React, { useState, useEffect } from 'react';
import { InputNumber, Button, Select } from "antd";
import { CloseOutlined } from "@ant-design/icons";
import "assets/styles/index.scss";

const { Option } = Select;

export default function ExtraPayments(props) {
    const { payments, setPayments, setDisabled } = props;
    const [error, setError] = useState(false);
    const [arrow, setArrow] = useState();
    const [fields, setFields] = useState([{ period: undefined, value: undefined, type: undefined }]);

    const add = () => {
        setFields(fields => fields.concat({ period: undefined, value: undefined, type: undefined }));
    }

    const drop = (index) => {
        setFields(fields.filter((payment, index) => 1 !== index))
    }

    const onChangePeriod = (index, value) => {
        let old = [...fields];
        old[index].period = value;
        setFields(old);
    }

    const onChangeValue = (index, value) => {
        let old = [...fields];
        old[index].value = value;
        setFields(old);
    }

    const onChangeSelect = (index, value) => {
        let old = [...fields];
        old[index].type = value;
        setFields(old);
    }

    const didUpdate = () => {
        let change = [...payments];
        change = fields;
        setPayments(change);
    }

    useEffect(() => {
        didUpdate();
        fields.map((item, n) => {
            if (item.period !== undefined && item.value !== undefined && item.type !== undefined) {
                setError(false);
                setDisabled(false);
            } else {
                setError(true);
                setArrow(n);
                setDisabled(true);
            }
        });
    }, [fields, error]);

    return (
        <div className="container">
            <div className="table-responsive">
                <div className="add-button">
                    <Button type="primary" onClick={add}>
                        Adicionar Pago
                    </Button>
                </div>

                {fields.map((input, index) => (
                    <div className="payments" key={index}>
                        <div className="label">
                            <h4>Pago #{index + 1}</h4>
                        </div>
                        <div className="fields-extra">
                            <div className="inputs">
                                <div className="form-inputs">
                                    <label>Periodo:</label>
                                    <InputNumber
                                        value={input.period}
                                        onChange={(e) => onChangePeriod(index, e)}
                                        placeholder="Ej: 48" id="period" />
                                </div>

                                <div className="form-inputs">
                                    <label>Valor del abono:</label>
                                    <InputNumber
                                        value={input.value}
                                        onChange={(e) => onChangeValue(index, e)}
                                        formatter={value => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                                        parser={value => value.replace(/\$\s?|(,*)/g, '')} id="value" />
                                </div>

                                <div className="form-inputs">
                                    <label>Afectación:</label>
                                    <Select
                                        onChange={(e) => onChangeSelect(index, e)}
                                        value={input.type}
                                    >
                                        <Option key={1} value={1}>Disminución Cuota</Option>
                                        <Option key={2} value={2}>Disminución Tiempo</Option>
                                    </Select>
                                </div>

                                <div className="drop-button">
                                    <Button type="danger" onClick={() => drop(index)} icon={<CloseOutlined />}>
                                    </Button>
                                </div>
                            </div>
                        </div>
                        {(error === true && arrow === index) &&
                            <div className="error">
                                <p>Debe diligenciar todos los campos</p>
                            </div>
                        }
                    </div>
                ))}
            </div>
        </div>
    )
}