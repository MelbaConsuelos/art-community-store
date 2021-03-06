/* eslint-disable no-alert */
/* eslint-disable max-len */
/* eslint-disable no-underscore-dangle */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import 'antd/dist/antd.css';
import {
  Button, Typography, Form, Input, Space, Select,
} from 'antd';
import { addUser, getUser } from '../../../actions/userActions';
import './AddressForm.scss';

const { Option } = Select;

const states = ['Aguascalientes',
  'Baja California',
  'Baja California Sur',
  'Campeche',
  'Chiapas',
  'Chihuahua',
  'Coahuila de Zaragoza',
  'Ciudad de México',
  'Coahuila',
  'Colima',
  'Durango',
  'Estado de México',
  'Guanajuato',
  'Guerrero',
  'Hidalgo',
  'Jalisco',
  'Michoacán',
  'Morelos',
  'Nayarit',
  'Nuevo León',
  'Oaxaca',
  'Puebla',
  'Querétaro',
  'Quintana Roo',
  'San Luis Potosí',
  'Sinaloa',
  'Sonora',
  'Tabasco',
  'Tamaulipas',
  'Tlaxcala',
  'Veracruz',
  'Yucatán',
  'Zacatecas'];

const shortid = require('shortid');

const AddressForm = (props) => {
  const [form] = Form.useForm();
  const [, forceUpdate] = useState({});
  const newUserId = shortid.generate();
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
    const newUser = {
      userId: newUserId,
      shipping_address: values.shipping_address,
      client_name: values.client_name,
      client_lastname: values.client_lastname,
      client_email: values.client_email,
    };
    props.addUser(newUser);
    props.handleUserUpdate(newUser);
    alert('Información de envío guardada exitosamente');
  };

  useEffect(() => {
    forceUpdate({});
  }, []);

  return (
    <div className="address-container">
      <Form form={form} className="address-form" name="complex-form" onFinish={onFinish} labelCol={{ span: 3 }} wrapperCol={{ span: 16 }}>
        <Form.Item className="address-label" label="Nombre(s)">
          <Space>
            <Form.Item
              name="client_name"
              noStyle
              rules={[{ required: true, message: 'El nombre es requerido' }]}
            >
              <Input style={{ width: 160 }} placeholder="Nombre(s)" />
            </Form.Item>
          </Space>
        </Form.Item>
        <Form.Item label="Apellido(s)">
          <Space>
            <Form.Item
              name="client_lastname"
              noStyle
              rules={[{ required: true, message: 'El apellido es requerido' }]}
            >
              <Input style={{ width: 160 }} placeholder="Apellido(s)" />
            </Form.Item>
          </Space>
        </Form.Item>
        <Form.Item label="Correo">
          <Space>
            <Form.Item
              name="client_email"
              noStyle
              rules={[{ required: true, message: 'El correo es requerido' }]}
            >
              <Input style={{ width: 160 }} placeholder="Email de contacto:" />
            </Form.Item>
          </Space>
        </Form.Item>
        <Form.Item label="Address">
          <Input.Group compact>
            <Form.Item
              name={['shipping_address', 'state']}
              noStyle
              rules={[{ required: true, message: 'El estado es requerido' }]}
            >
              <Select placeholder="Seleciona el estado">
                {states.map((state) => (
                  <Option value={state}>{state}</Option>
                ))}
              </Select>
            </Form.Item>
            <Form.Item
              name={['shipping_address', 'city']}
              noStyle
              rules={[{ required: true, message: 'La ciudad es requerida' }]}
            >
              <Input style={{ width: '50%' }} placeholder="Ciudad" />
            </Form.Item>
            <Form.Item
              name={['shipping_address', 'street']}
              noStyle
              rules={[{ required: true, message: 'La calle es requerida' }]}
            >
              <Input style={{ width: '50%' }} placeholder="Calle" />
            </Form.Item>
            <Form.Item
              name={['shipping_address', 'neighborhood']}
              noStyle
              rules={[{ required: true, message: 'La colonia es requerida' }]}
            >
              <Input style={{ width: '50%' }} placeholder="Colonia" />
            </Form.Item>
            <Form.Item
              name={['shipping_address', 'zip_code']}
              noStyle
              rules={[{ required: true, message: 'El código postal es requerido' }]}
            >
              <Input style={{ width: '50%' }} placeholder="Código Postal" />
            </Form.Item>
          </Input.Group>
        </Form.Item>
        <Form.Item shouldUpdate>
          {() => (
            <Button
              type="primary"
              htmlType="submit"
              disabled={
              !form.isFieldsTouched(true)
              || !!form.getFieldsError().filter(({ errors }) => errors.length).length
            }
            >
              Continuar
            </Button>
          )}
        </Form.Item>
      </Form>
    </div>
  );
};

const mapStateToProps = (state) => ({
  user: state.user,
});
export default connect(mapStateToProps, { addUser })(AddressForm);
