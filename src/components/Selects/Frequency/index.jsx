import React, { useState } from "react";
import { Select } from "antd";
import "assets/styles/index.scss";

const { Option } = Select;

const Frequency = ({ value = {}, onChange }) => {
    const [frequency, setFrequency] = useState();

    const triggerChange = changedValue => {
        if (onChange) {
            onChange({ frequency, ...value, ...changedValue });
        }
    };

    const onFrequencyChange = newFrequency => {
        if (!('period' in value)) {
            setFrequency(newFrequency);
        }
        triggerChange({ frequency: newFrequency });
    };

    return (
        <Select placeholder="Frecuencia" className="option" value={value.frequency || frequency} onChange={onFrequencyChange}>
            <Option value="12">Mensual</Option>
            <Option value="6">Bimestral</Option>
            <Option value="4">Trimestral</Option>
            <Option value="2">Semestral</Option>
            <Option value="1">Anual</Option>
        </Select>

    )

}

export default Frequency;