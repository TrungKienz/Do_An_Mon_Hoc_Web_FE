import React from 'react';
import {
  Button,
  Cascader,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Mentions,
  Select,
  TreeSelect,
  List,
  Col, 
  Descriptions,
  Row,
} from 'antd';
import { Space, Table, Tag } from 'antd';

const { Column, ColumnGroup } = Table;

interface DataType {
  key: React.Key;
  DoctorName: string;
  Menthod: string;
  TreatmentPhase: string;
}

const data: DataType[] = [];

const { RangePicker } = DatePicker;

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 6 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 14 },
  },
};

const ExpertComments: React.FC = () => (
    <>
        <Row>
            <Col span={24} style={{backgroundColor: "#fff", padding: "20px", borderRadius: "5px", border: "1px solid #fafafa"}}>
                <h1>Thông tin bệnh nhân</h1>
                <Descriptions>
                    <Descriptions.Item label="Mã bệnh án"></Descriptions.Item>
                    <Descriptions.Item label="Tên bệnh nhân"></Descriptions.Item>
                    <Descriptions.Item label="Ngày sinh"></Descriptions.Item>                    
                </Descriptions>
            </Col>
        </Row>
        <Row>
            <Col span={12} style={{backgroundColor: "#fff", padding: "20px", borderRadius: "5px", border: "1px solid #fafafa"}}>
                <h1>Thông tin bác sĩ</h1>
                <Form {...formItemLayout} variant="filled" style={{ maxWidth: 600 }}>
                    <Form.Item label="Mã số bác sĩ" name="DoctorID" rules={[{ required: true, message: 'Please input!' }]}>
                    <Input />
                    </Form.Item>

                    <Form.Item
                    label="Tên bác sĩ"
                    name="DoctorName"
                    rules={[{ required: true, message: 'Please input!' }]}
                    >
                    <InputNumber style={{ width: '100%' }} />
                    </Form.Item>

                    <Form.Item
                    label="Ngày đánh giá"
                    name="DateComment"
                    >
                    <RangePicker />
                    </Form.Item>
                    
                    <Form.Item label="Giai đoạn điều trị" name="TreatmentPhase">
                    <Select />
                    </Form.Item>

                    <Form.Item
                    label="Phương pháp điều trị"
                    name="Menthod"
                    >
                    <Input.TextArea />
                    </Form.Item>


                    <Form.Item
                    label="Nhận xét của bác sĩ"
                    name="DoctorComment"
                    >
                    <Input.TextArea />
                    </Form.Item>

                    <Form.Item wrapperCol={{ offset: 6, span: 16 }}>
                    <Button type="primary" htmlType="submit">
                        Lưu nhận xét
                    </Button>
                    </Form.Item>
                </Form>
            </Col>
            <Col span={12} style={{backgroundColor: "#fff", padding: "20px", borderRadius: "5px", border: "1px solid #fafafa"}}>
                <h1>Các đánh giá đã có</h1>
                <Table dataSource={data}>
                    <Column title="Tên bác sĩ" dataIndex="DoctorName" key="DoctorName" />
                    <Column title="Phương pháp điều trị" dataIndex="Menthod" key="Menthod" />
                    <Column title="Giai đoạn điều trị" dataIndex="TreatmentPhase" key="TreatmentPhase" />
                    <Column title="Thao tác" dataIndex="DoctorComment" key="DoctorComment" />
                </Table>
            </Col>
        </Row>
    </>
);

export default ExpertComments;