import React, { useState, useEffect } from 'react'

export default function Tax(props) {
    const { tax } = props;
    const [rate, setRate] = useState(undefined);

    useEffect(() => {
        setRate(tax);
    }, [tax])

    return (
        <div className="tax-converted">
            <p>La tasa a manejar es: {rate === undefined ? 0 : rate}%</p>
        </div>
    )
}