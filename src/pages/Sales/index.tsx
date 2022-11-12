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
  InputNumber,
} from 'antd';

import { useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { ModalForm } from '../../components/Modal/ModalForm';
import api from '../../services/api';
import { MySwal } from '../../utils/SweetAlert';
import { TableSales } from './components/TableSales';

export function Sales() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const [sales, setSales] = useState([]);

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
      await api.post('/sales', formattedData);
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

  async function loadSales() {
    try {
      const response = await api.get('/sales');

      setSales(response.data);
    } catch (error) {
      MySwal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Erro ao buscar vendas!',
        // footer: '<a href="">Why do I have this issue?</a>',
      });
    }
  }

  useEffect(() => {
    loadSales();
  }, []);

  const FormModal = (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* register your input into the hook by invoking the "register" function */}
      <Row gutter={20}>
        <Col span={6}>
          <label htmlFor="course_name">Nome do curso</label>
          <Controller
            rules={{ required: true }}
            name="course_name"
            control={control}
            render={({ field }) => <Input {...field} className="my-2" />}
          />
          {errors.course_name && <span>This field is required</span>}
        </Col>
        <Col span={6}>
          <label htmlFor="description">Descrição</label>
          <Controller
            rules={{ required: true }}
            name="description"
            control={control}
            render={({ field }) => <Input {...field} className="my-2" />}
          />
          {errors.description && <span>This field is required</span>}
        </Col>
        <Col span={6}>
          <label htmlFor="seller">Vendedor</label>
          <Controller
            rules={{ required: true }}
            name="seller"
            control={control}
            render={({ field }) => <Input {...field} className="my-2" />}
          />
          {errors.seller && <span>This field is required</span>}
        </Col>
        <Col span={6}>
          <label htmlFor="value">Valor</label>
          <Controller
            rules={{ required: true }}
            name="value"
            control={control}
            render={({ field }) => (
              <InputNumber
                formatter={value =>
                  `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
                }
                parser={value => value!.replace(/\$\s?|(,*)/g, '')}
                {...field}
                style={{ width: '100%' }}
              />
            )}
          />
          {errors.value && <span>This field is required</span>}
        </Col>
        <Col span={6}>
          <label htmlFor="retained_value">Taxa/Retenção</label>
          <Controller
            rules={{ required: true }}
            name="retained_value"
            control={control}
            render={({ field }) => <Input {...field} className="my-2" />}
          />
          {errors.retained_value && <span>This field is required</span>}
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
        title="Nova venda"
      />

      <PageHeader
        title="Vendas"
        subTitle="Cadastro de vendas"
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

      <TableSales />
    </>
  );
}
