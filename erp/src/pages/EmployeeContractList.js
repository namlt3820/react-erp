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
        salary: '10.000.000',
        date: '20/10/2018',
        classifyContract: 'Thực tập',
    },
    {
        key: '2',
        name: 'Lê Văn An',
        salary: '10.000.000',
        date: '20/10/2018',
        classifyContract: 'Thực tập',
    },
    {
        key: '3',
        name: 'Lê Văn An',
        salary: '10.000.000',
        date: '20/10/2018',
        classifyContract: 'Thực tập',
    },
    {
        key: '4',
        name: 'Lê Văn An',
        salary: '10.000.000',
        date: '20/10/2018',
        classifyContract: 'Thực tập',
    },
    {
        key: '5',
        name: 'Lê Văn An',
        salary: '10.000.000',
        date: '20/10/2018',
        classifyContract: 'Thực tập',
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
        title: 'Lương',
        dataIndex: 'salary',
        sorter: true,
    },
    {
        title: 'Ngày áp dụng',
        dataIndex: 'date',
        sorter: true,
    },
    {
        title: 'Loại hợp đồng',
        dataIndex: 'classifyContract',
        sorter: true,
    },
    {
        title: 'Hành động',
        render: () => (
            <span style={{}}>
                <Icon style={{ cursor: 'pointer' }} type="edit" />
                &nbsp;&nbsp;&nbsp;&nbsp;
                {/* <Divider type="vertical" /> */}
                <Icon style={{ cursor: 'pointer' }} type="delete" />
            </span>
        ),
    },
]

const EmployeeContractList = () => (
    <LayoutMain>
        <Title level={2} style={{ marginBottom: '2rem' }}>
            Quản lý hợp đồng
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
                    placeholder="Tìm kiếm hợp đồng"
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

export default EmployeeContractList
