import { InertiaLink } from '@inertiajs/inertia-react';
import { Button, Form, Input, Space } from 'antd';
import form, { FormInstance } from 'antd/lib/form';
import React from 'react';
import route from 'ziggy-js';

interface Props {
  form: FormInstance<any>;
  onFinish: (values: any) => any;
}

const PatientAddForm: React.FC<Props> = ({ form, onFinish }) => {
  return (
    <Form
      form={form}
      name="basic"
      className='tabel-appointment'
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      initialValues={{ remember: true }}
      autoComplete="off"
      onFinish={(values) => onFinish(values)}
    >
      <Form.Item
        label="Patient name"
        name="name"
        rules={[{ required: true, message: 'Enter the patient name' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Phone number"
        name="phone_number"
        rules={[{ required: true, message: 'Enter the Phone number' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Age"
        name="age"
        rules={[{ required: true, message: 'Enter the Age' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Weight"
        name="weight"
        rules={[{ required: true, message: 'Enter the Weight' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item className='button-item' {...tailLayout}>
        <Space size={18}>
          <Button className='button-add' type="primary" htmlType="submit">
            Save
          </Button>
          <InertiaLink  className='button-back' href={route('locations')}>Back</InertiaLink>
        </Space>
      </Form.Item>
    </Form>
  );
};
export default PatientAddForm;
const tailLayout = {
  wrapperCol: { offset: 4, span: 16 },
};
