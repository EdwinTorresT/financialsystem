import React from "react";
import { Table, Tag } from 'antd';
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
            render: function (text, record, index) {
                if (list[index].extra && list[index].extra == true) {
                    return (<Tag color={'green'} key={text}>{text}</Tag>)
                } else {
                    return text
                }
            }
        },
        {
            title: 'Capital',
            dataIndex: 'capital',
            key: 'capital',
            render: function (text, record, index) {
                if (list[index].extra && list[index].extra == true) {
                    return (<Tag color={'green'} key={text}>{fm.from(text, { symbol: '$' })}</Tag>)
                } else {
                    return fm.from(text, { symbol: '$' })
                }
            }
        },
        {
            title: 'Interes',
            dataIndex: 'interest',
            key: 'interest',
            render: function (text, record, index) {
                if (list[index].extra && list[index].extra == true) {
                    return (<Tag color={'green'} key={text}>{fm.from(text, { symbol: '$' })}</Tag>)
                } else {
                    return fm.from(text, { symbol: '$' })
                }
            }
        },
        {
            title: 'Amortización',
            dataIndex: 'amortization',
            key: 'amortization',
            render: function (text, record, index) {
                if (list[index].extra && list[index].extra == true) {
                    return (<Tag color={'green'} key={text}>{fm.from(text, { symbol: '$' })}</Tag>)
                } else {
                    return fm.from(text, { symbol: '$' })
                }
            }
        },
        {
            title: 'Cuota',
            dataIndex: 'a',
            key: 'a',
            render: function (text, record, index) {
                if (text === list[index].cextra) {
                    return (<Tag color={'red'} key={text}>{fm.from(text, { symbol: '$' })}</Tag>)
                } else if (list[index].extra && list[index].extra == true) {
                    return (<Tag color={'green'} key={text}>{fm.from(text, { symbol: '$' })}</Tag>)
                } else {
                    return fm.from(text, { symbol: '$' });
                }
            }
        },
        {
            title: 'Saldo',
            dataIndex: 'balance',
            key: 'balance',
            render: function (text, record, index) {
                if (list[index].extra && list[index].extra == true) {
                    return (<Tag color={'green'} key={text}>{fm.from(text, { symbol: '$' })}</Tag>)
                } else {
                    return fm.from(text, { symbol: '$' })
                }
            }
        }
    ]

    return (
        <Table dataSource={list} columns={columns} key="table-list" />
    )

}