import React from 'react'
import {
    Typography,
    // Row,
    // Col,
    // Select,
    // Input,
    Icon,
    // Divider,
    // Table,
    Button,
    Tabs,
} from 'antd'
import LayoutMain from '../layout/main'

const { Title } = Typography
const { TabPane } = Tabs

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
                    style={{ marginBottom: '0rem' }}
                >
                    Thông tin cá nhân
                </Title>
                <Button
                    className="ant-col ant-col-6"
                    style={{ margin: '0px 0px 6px 94px', float: 'right' }}
                >
                    <Icon style={{ cursor: 'pointer' }} type="edit" />
                    Chỉnh sửa
                </Button>
                <hr style={{ clear: 'both' }} />
            </TabPane>
            <TabPane className="ant-row" tab="Thông tin hợp đồng" key="2">
                <Title
                    className="ant-col ant-col-6"
                    level={2}
                    style={{ marginBottom: '0rem' }}
                >
                    Thông tin hợp đồng
                </Title>
                <Button
                    className="ant-col ant-col-6"
                    style={{ margin: '0px 0px 6px 94px', float: 'right' }}
                >
                    <Icon style={{ cursor: 'pointer' }} type="edit" />
                    Chỉnh sửa
                </Button>
                <hr style={{ clear: 'both' }} />
            </TabPane>
        </Tabs>
    </LayoutMain>
)

export default EmployeeInfo
