import React from 'react'
import { Row, Col, Button } from 'antd'
import styled from 'styled-components'
import LayoutMain from '../layout/main'
import SectionHeader from '../core/SectionHeader'

const customerData = {
    id: 'KH012-CS1',
    birthday: '1/1/1974',
    gender: 'nam',
    phone: '098776232',
    mail: 'nguyen.a@gmail.com',
    branch: 'TP Hồ Chí Minh',
    identity: '0123456789',
}

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

const CustomerList = () => (
    <LayoutMain>
        <SectionHeader
            main="Quản lý khách hàng"
            secondary="Thông tin chi tiết khách hàng"
        />
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
                    <Item title="Mã KH" content={customerData.id} />
                    <Item title="Ngày sinh" content={customerData.birthday} />
                    <Item title="Giới tính" content={customerData.gender} />
                    <Item title="Điện thoại" content={customerData.phone} />
                    <Item title="Email" content={customerData.mail} />
                    <Item title="Chi nhánh" content={customerData.branch} />
                    <Item title="Căn cước" content={customerData.identity} />
                </Row>
            </Col>
            <Col span={24}>
                <Row type="flex" justify="center" style={{ marginTop: '2rem' }}>
                    <Button
                        icon="edit"
                        style={{ marginRight: '5rem' }}
                        type="primary"
                        size="large"
                    >
                        Sửa
                    </Button>
                    <Button icon="delete" type="danger" size="large">
                        Xoá
                    </Button>
                </Row>
            </Col>
        </Row>
    </LayoutMain>
)

export default CustomerList
