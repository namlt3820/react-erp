import React from 'react'
import { Row, Col, Button, Input, Select, Upload, Icon } from 'antd'
import LayoutMain from '../layout/main'
import SectionHeader from '../core/SectionHeader'

const { Option } = Select

const Item = ({ title }) => (
    <>
        <Col
            span={6}
            style={{ fontWeight: 'bold', fontSize: '18px', textAlign: 'right' }}
        >
            {title}
        </Col>
        <Col span={16} offset={2} style={{ marginBottom: '1rem' }}>
            <Input style={{ width: '50%' }} />
        </Col>
    </>
)

const SelectItem = () => (
    <>
        <Col
            span={6}
            style={{ fontWeight: 'bold', fontSize: '18px', textAlign: 'right' }}
        >
            Trực thuộc cơ sở
        </Col>
        <Col span={16} offset={2} style={{ marginBottom: '1rem' }}>
            <Select defaultValue="hn" style={{ width: '50%' }}>
                <Option value="hn">Hà Nội</Option>
                <Option value="hcm">TP HCM</Option>
                <Option value="hp">Hải Phòng</Option>
            </Select>
        </Col>
    </>
)

const UploadItem = () => (
    <>
        <Col
            span={6}
            style={{ fontWeight: 'bold', fontSize: '18px', textAlign: 'right' }}
        >
            Ảnh
        </Col>
        <Col span={16} offset={2} style={{ marginBottom: '1rem' }}>
            <Row type="flex">
                <Upload>
                    <Button>
                        <Icon type="upload" /> Tải lên
                    </Button>
                </Upload>
                <span style={{ paddingLeft: 16 }}>
                    Chấp nhận files JPG, PNG, JPEG <br />
                    Dung lượng nhỏ hơn 3MB
                </span>
            </Row>
        </Col>
    </>
)

const CustomerAdd = () => (
    <LayoutMain>
        <SectionHeader main="Quản lý khách hàng" secondary="Thêm khách hàng" />
        <Row type="flex">
            <Item title="Tên:" />
            <Item title="Ngày sinh:" />
            <Item title="Giới tính:" />
            <Item title="Điện thoại:" />
            <Item title="Email:" />
            <SelectItem />
            <Item title="CMND:" />
            <Item title="Địa chỉ:" />
            <UploadItem />
            <Col span={24}>
                <Row type="flex" justify="center" style={{ marginTop: '1rem' }}>
                    <Button
                        icon="delete"
                        type="danger"
                        style={{ marginRight: '5rem' }}
                    >
                        Huỷ bỏ
                    </Button>
                    <Button icon="edit" type="primary">
                        Tạo mới
                    </Button>
                </Row>
            </Col>
        </Row>
    </LayoutMain>
)

export default CustomerAdd
