import React from "react";
import { Table } from 'antd';
import { FormatMoney } from 'format-money-js';

const fm = new FormatMoney({
    decimals: 2
});

export default function TableTasasInteres(props) {
    const { list } = props;

    const columns = [
        {
            title: 'Numero Periodo',
            dataIndex: 'period',
            key: 'period',
            fixed: 'left',
            width: 80,
        },
        {
            title: 'Capital',
            dataIndex: 'capital',
            key: 'capital',
            render: function (text, record, index) {
                return fm.from(text, { symbol: '$' })
            }
        },
        {
            title: 'Interes',
            dataIndex: 'interest',
            key: 'interest',
            render: function (text, record, index) {
                return fm.from(text, { symbol: '$' })
            }
        },
        {
            title: 'Amortización',
            dataIndex: 'amortization',
            key: 'amortization',
            render: function (text, record, index) {
                return fm.from(text, { symbol: '$' })
            }
        },
        {
            title: 'Cuota',
            dataIndex: 'a',
            key: 'a',
            render: function (text, record, index) {
                return fm.from(text, { symbol: '$' })
            }
        },
        {
            title: 'Saldo',
            dataIndex: 'balance',
            key: 'balance',
            render: function (text, record, index) {
                return fm.from(text, { symbol: '$' })
            }
        }
    ]

    return (
        <Table dataSource={list} columns={columns} key="table-list" />
    )

}