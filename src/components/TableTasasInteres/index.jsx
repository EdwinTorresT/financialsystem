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
            title: 'Tipo de Tasa',
            dataIndex: 'title',
            key: 'title',
        },
        {
            title: 'Periodicidad',
            dataIndex: 'frequency',
            key: 'frequency',
        },
        {
            title: 'Tasa',
            dataIndex: 'rate',
            key: 'rate',
            render: function (text, record, index) {
                return fm.from(text, { symbol: '%', append: true })
            }
        }
    ]

    return (
        <Table dataSource={list} columns={columns} key="table-list" />
    )

}