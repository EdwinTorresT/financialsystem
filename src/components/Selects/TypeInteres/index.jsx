import React, { useState } from "react";
import { Select } from "antd";
import "assets/styles/index.scss";

const { Option } = Select;

const TypeInteres = ({ value = {}, onChange }) => {
    const [type, setType] = useState();

    const triggerChange = changedValue => {
        if (onChange) {
            onChange({ type, ...value, ...changedValue });
        }
    };

    const onTypeChange = newType => {
        if (!('currency' in value)) {
            setType(newType);
        }
        triggerChange({ type: newType });
    };

    return (
        <Select placeholder="Tipo de Tasa" className="option" value={value.type || type} onChange={onTypeChange}>
            <Option value="Nominal">Nominal</Option>
            <Option value="Efectiva">Efectiva</Option>
        </Select>

    )
}

export default TypeInteres;