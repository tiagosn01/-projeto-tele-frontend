/* eslint-disable prefer-const */
/* eslint-disable jsx-a11y/label-has-associated-control */
import {
  Menu,
  PageHeader,
  Button,
  Form,
  Input,
  Row,
  Col,
  Divider,
  Select,
} from 'antd';

import { useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { ModalForm } from '../../components/Modal/ModalForm';
import api from '../../services/api';
import { MySwal } from '../../utils/SweetAlert';
import { TableCustomer } from './components/TableCustomer';

export function Customer() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const [customers, setCustomers] = useState([]);

  function toggle() {
    setModalIsOpen(!modalIsOpen);
  }

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data: any) => {
    let formattedData = data;
    formattedData.technical_course = data.technical_course === 1;

    console.log(JSON.stringify(formattedData, null, 2));

    try {
      await api.post('/customers', formattedData);
      toggle();
      MySwal.fire({
        icon: 'success',
        title: 'Sucesso!',
        text: 'Cadastro realizado com êxito!',
        // footer: '<a href="">Why do I have this issue?</a>',
      });
    } catch (error) {
      MySwal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Dados incorretos!',
        // footer: '<a href="">Why do I have this issue?</a>',
      });
    }
  };

  async function loadCustomers() {
    try {
      const response = await api.get('/customers');

      setCustomers(response.data);
    } catch (error) {
      MySwal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Erro ao buscar clientes!',
        // footer: '<a href="">Why do I have this issue?</a>',
      });
    }
  }

  useEffect(() => {
    loadCustomers();
  }, []);

  const FormModal = (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* register your input into the hook by invoking the "register" function */}
      <Row gutter={20}>
        <Col span={6}>
          <label htmlFor="name">Nome</label>
          <Controller
            rules={{ required: true }}
            name="name"
            control={control}
            render={({ field }) => <Input {...field} className="my-2" />}
          />
          {errors.name && <span>This field is required</span>}
        </Col>
        <Col span={6}>
          <label htmlFor="email">Email</label>
          <Controller
            rules={{ required: true }}
            name="email"
            control={control}
            render={({ field }) => <Input {...field} className="my-2" />}
          />
          {errors.email && <span>This field is required</span>}
        </Col>
        <Col span={6}>
          <label htmlFor="phone">Fone</label>
          <Controller
            rules={{ required: true }}
            name="phone"
            control={control}
            render={({ field }) => <Input {...field} className="my-2" />}
          />
          {errors.phone && <span>This field is required</span>}
        </Col>
        <Col span={6}>
          <label htmlFor="document">CPF</label>
          <Controller
            rules={{ required: true }}
            name="document"
            control={control}
            render={({ field }) => <Input {...field} className="my-2" />}
          />
          {errors.document && <span>This field is required</span>}
        </Col>
        <Col span={6}>
          <label htmlFor="profession">Profissão</label>
          <Controller
            rules={{ required: true }}
            name="profession"
            control={control}
            render={({ field }) => <Input {...field} className="my-2" />}
          />
          {errors.profession && <span>This field is required</span>}
        </Col>
        <Col span={4}>
          <label htmlFor="occupation">Área de atuação</label>
          <Controller
            rules={{ required: true }}
            name="occupation"
            control={control}
            render={({ field }) => <Input {...field} className="my-2" />}
          />
          {errors.occupation && <span>This field is required</span>}
        </Col>
        <Col span={3}>
          <label htmlFor="technical_course">Possui curso técnico?</label>
          <Controller
            rules={{ required: true }}
            name="technical_course"
            control={control}
            render={({ field }) => (
              <Select {...field} className="my-2 w-full">
                <option value={0}>Não</option>
                <option value={1}>Sim</option>
              </Select>
            )}
          />
          {errors.technical_course && <span>This field is required</span>}
        </Col>
        <Col span={3}>
          <label htmlFor="age">Idade</label>
          <Controller
            rules={{ required: true }}
            name="age"
            control={control}
            render={({ field }) => <Input {...field} className="my-2" />}
          />
          {errors.age && <span>This field is required</span>}
        </Col>
      </Row>
      <Divider orientation="left">Endereço</Divider>
      <Row gutter={20}>
        <Col span={6}>
          <label htmlFor="zip_code">CEP</label>
          <Controller
            rules={{ required: true }}
            name="zip_code"
            control={control}
            render={({ field }) => <Input {...field} className="my-2" />}
          />
          {errors.zip_code && <span>This field is required</span>}
        </Col>
        <Col span={6}>
          <label htmlFor="street">Rua</label>
          <Controller
            rules={{ required: true }}
            name="street"
            control={control}
            render={({ field }) => <Input {...field} className="my-2" />}
          />
          {errors.street && <span>This field is required</span>}
        </Col>
        <Col span={6}>
          <label htmlFor="state">Estado</label>
          <Controller
            rules={{ required: true }}
            name="state"
            control={control}
            render={({ field }) => <Input {...field} className="my-2" />}
          />
          {errors.state && <span>This field is required</span>}
        </Col>
        <Col span={6}>
          <label htmlFor="city">Cidade</label>
          <Controller
            rules={{ required: true }}
            name="city"
            control={control}
            render={({ field }) => <Input {...field} className="my-2" />}
          />
          {errors.city && <span>This field is required</span>}
        </Col>
        <Col span={6}>
          <label htmlFor="neighborhood">Bairro</label>
          <Controller
            rules={{ required: true }}
            name="neighborhood"
            control={control}
            render={({ field }) => <Input {...field} className="my-2" />}
          />
          {errors.neighborhood && <span>This field is required</span>}
        </Col>
      </Row>
      <Row className="justify-end">
        <Col>
          <Button type="primary" className="mt-10" htmlType="submit">
            Salvar
          </Button>
        </Col>
      </Row>
    </form>
  );

  return (
    <>
      <ModalForm
        content={FormModal}
        isOpen={modalIsOpen}
        toggle={toggle}
        title="Novo cliente"
      />

      <PageHeader
        title="Clientes"
        subTitle="Cadastro de clientes"
        className="mb-6"
        onBack={() => {
          console.log('teste');
        }}
      />
      <Menu mode="horizontal">
        <Button type="primary" className="mb-2" onClick={toggle}>
          Novo
        </Button>
      </Menu>

      <TableCustomer />
    </>
  );
}
