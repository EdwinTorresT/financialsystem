import React, { useState } from "react";
import { Table, Tag, Tooltip, notification } from 'antd';
import { FormatMoney } from 'format-money-js';
import { FileExcelOutlined } from "@ant-design/icons";
import download from 'js-file-download';
import axios from "axios";
import siteConfig from 'config/site.config';

const fm = new FormatMoney({
    decimals: 2
});

export default function TableTasasInteres(props) {
    const { list } = props;
    const [loading, setLoading] = useState(false);

    const columns = [
        {
            title: 'Numero Periodo',
            dataIndex: 'period',
            key: 'period',
            fixed: 'left',
            width: 80,
            render: function (text, record, index) {
                if (list[index].extra && list[index].extra === true) {
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
                if (list[index].extra && list[index].extra === true) {
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
                if (list[index].extra && list[index].extra === true) {
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
                if (list[index].extra && list[index].extra === true) {
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
                } else if (list[index].extra && list[index].extra === true) {
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
                if (list[index].extra && list[index].extra === true) {
                    return (<Tag color={'green'} key={text}>{fm.from(text, { symbol: '$' })}</Tag>)
                } else {
                    return fm.from(text, { symbol: '$' })
                }
            }
        }
    ];

    const downloadFile = () => {
        if (list.length > 0) {
            setLoading(true);
            const data = {
                data: list
            };
            axios.post(`${siteConfig.apiUrl}/getcsv`, data, { headers: { 'Access-Control-Allow-Origin': 'origin-list' } }).then(result => {
                download(result.data, 'report.csv');
                setLoading(false);
            }).catch(error => {
                setLoading(false);
                console.log(error.response);
                notification.error({
                    message: 'Error al descargar reporte',
                    description: error.response,
                    duration: 4
                });
            });
        } else {
            notification.error({
                message: 'Error al descargar reporte',
                description: 'No hay aún datos que pueda descargar',
                duration: 4
            });
        }
    }

    return (
        <div className="download">
            <div className="button">
                <Tooltip title="descargar tabla">
                    <button className="btn btn-success" onClick={downloadFile} loading={loading}>
                        <FileExcelOutlined />
                    </button>
                </Tooltip>
            </div>
            <Table dataSource={list} columns={columns} key="table-list" />
        </div>
    )

}