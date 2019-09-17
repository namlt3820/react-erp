import React from 'react'
import { Row, Col, Select, Button, Typography } from 'antd'
import LayoutMain from '../layout/main'
import SectionHeader from '../core/SectionHeader'

const { Title } = Typography
const { Option } = Select

const CardItem = ({ title, content }) => (
    <>
        <Col span={12} style={{ fontWeight: 'bold', lineHeight: '24px' }}>
            {title}
        </Col>
        <Col span={12}>{content}</Col>
    </>
)

const Card = ({
    type,
    content: {
        position = '',
        name = '',
        code = '',
        id = '',
        address = '',
        phone = '',
        email = '',
        userCreate = '',
        userUpdate = '',
        status = '',
        image = '',
    },
}) => (
    <Col span={12} style={{ padding: '2rem' }}>
        <Row type="flex">
            <Col span={6}>
                <img
                    src={image}
                    style={{
                        width: '110px',
                        height: '110px',
                        borderRadius: '50%',
                    }}
                    alt=""
                />
            </Col>
            <Col span={17} offset={1}>
                {type === 'person' ? (
                    <>
                        <Title level={3}>{position}</Title>
                        <Row type="flex">
                            <CardItem title="Họ tên" content={name} />
                            <CardItem title="Mã nhân viên" content={code} />
                            <CardItem title="CMT" content={id} />
                            <CardItem title="Địa chỉ" content={address} />
                            <CardItem title="Số điện thoại" content={phone} />
                            <CardItem title="Email" content={email} />
                        </Row>
                    </>
                ) : (
                    <>
                        <Title level={3}>Thông tin chung</Title>
                        <Row type="flex">
                            <CardItem title="Địa chỉ" content={address} />
                            <CardItem title="Số điện thoại" content={phone} />
                            <CardItem title="Email" content={email} />
                            <CardItem title="Người tạo" content={userCreate} />
                            <CardItem title="Người sửa" content={userUpdate} />
                            <CardItem title="Tình trạng" content={status} />
                        </Row>
                    </>
                )}
            </Col>
        </Row>
    </Col>
)
const BranchDetail = () => (
    <LayoutMain>
        <SectionHeader
            main="Quản lý cơ sở"
            secondary="Thông tin chi tiết cơ sở"
        />
        <Row justify="space-between" type="flex" align="bottom">
            <Col span={4}>
                <Title level={3}>Cơ sở</Title>
                <Select defaultValue="hn" style={{ width: '100%' }}>
                    <Option value="hn">Hà Nội</Option>
                    <Option value="hcm">TP HCM</Option>
                    <Option value="hp">Hải Phòng</Option>
                </Select>
            </Col>
            <Col span={4}>
                <Button
                    icon="edit"
                    style={{ marginRight: '1rem' }}
                    type="primary"
                    size="large"
                >
                    Sửa
                </Button>
                <Button icon="delete" type="danger" size="large">
                    Xoá
                </Button>
            </Col>
        </Row>
        <Row style={{ marginLeft: '-2rem' }}>
            <Card
                type="person"
                content={{
                    position: 'Chủ cơ sở',
                    name: 'Trần Văn Kiên',
                    code: 'CS1#001',
                    id: '2534676654',
                    address: 'Hà Nội',
                    phone: '0975634452',
                    email: 'kien.87@gmail.com',
                    image:
                        'https://www.dermabrightclinic.com/wp-content/uploads/2019/02/men-facial.jpeg',
                }}
            />
            <Card
                type="person"
                content={{
                    position: 'Quản lý cơ sở',
                    name: 'Trần Văn Kiên',
                    code: 'CS1#001',
                    id: '2534676654',
                    address: 'Hà Nội',
                    phone: '0975634452',
                    email: 'kien.87@gmail.com',
                    image:
                        'https://www.dermabrightclinic.com/wp-content/uploads/2019/02/men-facial.jpeg',
                }}
            />
            <Card
                type="person"
                content={{
                    position: 'Lễ tân',
                    name: 'Trần Văn Kiên',
                    code: 'CS1#001',
                    id: '2534676654',
                    address: 'Hà Nội',
                    phone: '0975634452',
                    email: 'kien.87@gmail.com',
                    image:
                        'https://www.dermabrightclinic.com/wp-content/uploads/2019/02/men-facial.jpeg',
                }}
            />
            <Card
                type="branch"
                content={{
                    address: 'Hà Nội',
                    phone: '0975634452',
                    email: 'kien.87@gmail.com',
                    userCreate: 'sysadmin 2019-01-02',
                    userUpdate: 'sysadmin 2019-01-02',
                    status: 'Bình thường',
                    image:
                        'https://www.mayoclinic.org/-/media/kcms/gbs/patient-consumer/images/2018/04/23/16/35/healthsystem2x.jpg',
                }}
            />
        </Row>
    </LayoutMain>
)

export default BranchDetail
