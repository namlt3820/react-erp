import React from 'react'
import {
    Typography,
    Row,
    Col,
    Select,
    Input,
    Icon,
    // Divider,
    Table,
    Button,
} from 'antd'
import LayoutMain from '../layout/main'

const { Title, Text } = Typography
const { Option } = Select
const { Search } = Input

const tableData = [
    {
        key: '1',
        name: 'Lê Văn An',
        date: '25/08/1995',
        sex: 'Nam',
        phone: '0974782395',
        email: 'demo@gmail.com',
        branch: 'Hà Nội',
        idCard: '16028378434',
        address: 'Nam Định',
    },
    {
        key: '2',
        name: 'Lê Văn An',
        date: '25/08/1995',
        sex: 'Nam',
        phone: '0974782395',
        email: 'demo@gmail.com',
        branch: 'Hà Nội',
        idCard: '16028378434',
        address: 'Nam Định',
    },
    {
        key: '3',
        name: 'Lê Văn An',
        date: '25/08/1995',
        sex: 'Nam',
        phone: '0974782395',
        email: 'demo@gmail.com',
        branch: 'Hà Nội',
        idCard: '16028378434',
        address: 'Nam Định',
    },
    {
        key: '5',
        name: 'Lê Văn An',
        date: '25/08/1995',
        sex: 'Nam',
        phone: '0974782395',
        email: 'demo@gmail.com',
        branch: 'Hà Nội',
        idCard: '16028378434',
        address: 'Nam Định',
    },
    {
        key: '6',
        name: 'Lê Văn An',
        date: '25/08/1995',
        sex: 'Nam',
        phone: '0974782395',
        email: 'demo@gmail.com',
        branch: 'Hà Nội',
        idCard: '16028378434',
        address: 'Nam Định',
    },
    {
        key: '7',
        name: 'Lê Văn An',
        date: '25/08/1995',
        sex: 'Nam',
        phone: '0974782395',
        email: 'demo@gmail.com',
        branch: 'Hà Nội',
        idCard: '16028378434',
        address: 'Nam Định',
    },
    {
        key: '8',
        name: 'Lê Văn An',
        date: '25/08/1995',
        sex: 'Nam',
        phone: '0974782395',
        email: 'demo@gmail.com',
        branch: 'Hà Nội',
        idCard: '16028378434',
        address: 'Hà Nam',
    },
    {
        key: '9',
        name: 'Lê Văn An',
        date: '25/08/1995',
        sex: 'Nam',
        phone: '0974782395',
        email: 'demo@gmail.com',
        branch: 'Hà Nội',
        idCard: '16028378434',
        address: 'Nam Định',
    },
    {
        key: '10',
        name: 'Lê Văn An',
        date: '25/08/1995',
        sex: 'Nam',
        phone: '0974782395',
        email: 'demo@gmail.com',
        branch: 'Hà Nội',
        idCard: '16028378434',
        address: 'Nam Định',
    },
]

const tableColumn = [
    {
        title: 'STT',
        dataIndex: 'key',
    },
    {
        title: 'Tên',
        dataIndex: 'name',
        sorter: true,
    },
    {
        title: 'Ngày sinh',
        dataIndex: 'date',
        sorter: true,
    },
    {
        title: 'Giới tính',
        dataIndex: 'sex',
        sorter: true,
    },
    {
        title: 'Số điện thoại',
        dataIndex: 'phone',
        sorter: true,
    },
    {
        title: 'Email',
        dataIndex: 'email',
        sorter: true,
    },
    {
        title: 'Cơ sở',
        dataIndex: 'branch',
        sorter: true,
    },
    {
        title: 'CMT/CCCD',
        dataIndex: 'idCard',
        sorter: true,
    },
    {
        title: 'Địa điểm',
        dataIndex: 'address',
        sorter: true,
    },
    {
        title: 'Hành động',
        render: () => (
            <span style={{}}>
                <Icon type="edit" />
                &nbsp;&nbsp;&nbsp;&nbsp;
                {/* <Divider type="vertical" /> */}
                <Icon type="delete" />
            </span>
        ),
    },
]

const BranchList = () => (
    <LayoutMain>
        <Title level={2} style={{ marginBottom: '2rem' }}>
            Quản lý nhân viên
        </Title>
        <Text type="secondary" style={{ fontSize: '20px' }}>
            Tổng hợp thông tin các cơ sở
        </Text>
        <Row style={{ margin: '2rem 0 1rem 0' }} justify="space-between">
            <Col span={6} style={{ padding: '32px 1rem 0 0' }}>
                <div style={{ display: 'flex' }}>
                    <h3 level={3} style={{ width: '30%', paddingTop: '4px' }}>
                        Cơ sở:{' '}
                    </h3>
                    <Select defaultValue="hn" style={{ width: '100%' }}>
                        <Option value="hn">Hà Nội</Option>
                        <Option value="hcm">TP HCM</Option>
                        <Option value="hp">Hải Phòng</Option>
                    </Select>
                </div>
            </Col>
            {/* //Search input */}
            <Col span={6} style={{ padding: '0 0 0 1rem', float: 'right' }}>
                <Button style={{ margin: '0px 0px 6px 94px' }}>
                    <Icon type="plus" />
                    Tạo mới
                </Button>
                <Search
                    placeholder="Tìm kiếm nhân viên"
                    onSearch={value => console.log(value)}
                    style={{ width: 200 }}
                />
            </Col>
        </Row>
        <Table
            columns={tableColumn}
            dataSource={tableData}
            pagination={{ total: 200, current: 10 }}
        />
    </LayoutMain>
)

export default BranchList
