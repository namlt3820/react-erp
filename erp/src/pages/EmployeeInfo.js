/* eslint-disable react/no-array-index-key */
import React from 'react'
import { Typography, Button, Tabs, Row, Col } from 'antd'
import styled from 'styled-components'
import LayoutMain from '../layout/main'

const { Title } = Typography
const { TabPane } = Tabs

const employeesData = [
    {
        title: 'Mã KH',
        content: 'KH012-CS1',
    },
    {
        title: 'Ngày sinh',
        content: '1/1/1974',
    },
    {
        title: 'Giới tính',
        content: 'Nam',
    },
    {
        title: 'Điện thoại',
        content: '098776232',
    },
    {
        title: 'Email',
        content: 'demo@gmail.com',
    },
    {
        title: 'Chi nhánh',
        content: 'TP Hồ Chí Minh',
    },
    {
        title: 'Địa chỉ',
        content: 'TP Hà Nội',
    },
    {
        title: 'CMT/CCCD',
        content: '0123456789',
    },
]

const contractData = [
    {
        title: ' Mã KH',
        content: 'KH012-CS1',
    },
    {
        title: 'Lương',
        content: '20.000.000',
    },
    {
        title: 'Ngày áp dụng',
        content: '20/09/9029',
    },
    {
        title: 'Loại hợp đồng',
        content: 'Trainning',
    },
    {
        title: 'Trực thuộc cơ sở',
        content: 'CS1',
    },
    {
        title: 'Lương cơ bản',
        content: '15.000.000',
    },
    {
        title: 'Địa chỉ',
        content: 'Nam Định',
    },
]

const Dot = styled.span`
    height: 1rem;
    width: 1rem;
    background-color: #0acdc4;
    border-radius: 50%;
    margin-right: 0.5rem;
    display: inline-block;
`

const Item = ({ title, content }) => (
    <>
        <Col
            span={6}
            style={{ fontWeight: 'bold', fontSize: '16px', lineHeight: '28px' }}
        >
            {title}
        </Col>
        <Col span={18} style={{ fontSize: '16px' }}>
            {content}
        </Col>
    </>
)

const Info = props => (
    <>
        <Row justify="space-between" type="flex">
            <Col span={12}>
                <Row type="flex" align="top" justify="center">
                    <div style={{ textAlign: 'center' }}>
                        <img
                            src="https://www.dermabrightclinic.com/wp-content/uploads/2019/02/men-facial.jpeg"
                            style={{
                                width: '110px',
                                height: '110px',
                                borderRadius: '50%',
                                marginBottom: '1rem',
                            }}
                            alt=""
                        />
                        <p>Nguyễn Văn An</p>
                        <Row type="flex" justify="center" align="middle">
                            <Dot /> <span>Active</span>
                        </Row>
                    </div>
                </Row>
            </Col>
            <Col span={12}>
                <Row type="flex">
                    {props.data.map((value, index) => (
                        <Item
                            key={index}
                            title={value.title}
                            content={value.content}
                        />
                    ))}
                </Row>
            </Col>
        </Row>
    </>
)

const EmployeeInfo = () => (
    <LayoutMain>
        <Tabs type="card" style={{ width: '100%' }}>
            <TabPane
                className="ant-row"
                tab="Thông tin cá nhân"
                key="1"
                style={{ width: '100%' }}
            >
                <Title
                    className="ant-col ant-col-6"
                    level={2}
                    style={{ marginBottom: '1rem', width: ' 50%' }}
                >
                    Thông tin cá nhân
                </Title>
                <Row
                    className="ant-col ant-col-6"
                    type="flex"
                    style={{
                        margin: '0px 0px 6px 94px',
                        float: 'right',
                    }}
                >
                    <Button
                        icon="edit"
                        style={{ marginRight: '1rem' }}
                        type="primary"
                    >
                        Sửa
                    </Button>
                    <Button icon="delete" type="danger">
                        Xoá
                    </Button>
                </Row>
                <hr style={{ clear: 'both', marginBottom: '50px' }} />
                <Info data={employeesData} />
            </TabPane>
            <TabPane
                className="ant-row"
                tab="Thông tin hợp đồng"
                key="2"
                style={{ width: '100%' }}
            >
                <Title
                    className="ant-col ant-col-6"
                    level={2}
                    style={{ marginBottom: '1rem', width: '50%' }}
                >
                    Thông tin hợp đồng
                </Title>
                <Row
                    className="ant-col ant-col-6"
                    type="flex"
                    style={{
                        margin: '0px 0px 6px 94px',
                        float: 'right',
                    }}
                >
                    <Button
                        icon="edit"
                        style={{ marginRight: '1rem' }}
                        type="primary"
                    >
                        Sửa
                    </Button>
                    <Button icon="delete" type="danger">
                        Xoá
                    </Button>
                </Row>
                <hr style={{ clear: 'both', marginBottom: '50px' }} />
                <Info data={contractData} />
            </TabPane>
        </Tabs>
    </LayoutMain>
)

export default EmployeeInfo
