import React, { useState } from "react";
import { Select } from "antd";
import "assets/styles/index.scss";

const { Option } = Select;

const MethodPayment = ({ value = {}, onChange }) => {
    const [method, setMethod] = useState();

    const triggerChange = changedValue => {
        if (onChange) {
            onChange({ method, ...value, ...changedValue });
        }
    };

    const onMethodChange = newMethod => {
        if (!('method' in value)) {
            setMethod(newMethod);
        }
        triggerChange({ method: newMethod });
    };

    return (
        <Select placeholder="Forma de Pago" className="option" value={value.method || method} onChange={onMethodChange}>
            <Option value="Anticipada">Anticipada</Option>
            <Option value="Vencida">Vencida</Option>
        </Select>

    )
}

export default MethodPayment;