import ModalEditIntegralParameter from '@/components/modals/bFStabilityEvaluation/ModalEditIntegralParameter';
import IIntegralParams from '@/models/interfaces/IIntegralParams';
import { useModel } from '@umijs/max';
import { Button } from 'antd';
import { useForm } from 'antd/es/form/Form';
import { useState } from 'react';
import { AiFillDelete } from 'react-icons/ai';
import { MdEditSquare } from 'react-icons/md';

export default () => {
  const { handleDelete } = useModel('useIntegralParametersModel');
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [deleteLoading, setDeleteLoading] = useState(false);
  const [form] = useForm();

  const handleEditModalOpen = async (record: IIntegralParams) => {
    form.setFieldsValue({
      alias: record.alias,
      limitDanger: record.limitDanger,
      limitWarning: record.limitWarning,
      name: record.name,
      type: record.type,
      id: record.id,
    });
    setEditModalOpen(true);
  };

  const deleteIntagralParameterById = async (id: number) => {
    setDeleteLoading(true);
    handleDelete(id);
    setDeleteLoading(false);
  };

  return [
    {
      title: 'Показатель, ед. измерения',
      dataIndex: 'name',
      align: 'center' as 'center',
    },
    {
      title: 'Код',
      dataIndex: 'alias',
      align: 'center' as 'center',
    },
    {
      title: '1 граница',
      dataIndex: 'limitWarning',
      align: 'center' as 'center',
    },
    {
      title: 'Предельное значение',
      dataIndex: 'limitDanger',
      align: 'center' as 'center',
    },
    {
      title: '',
      dataIndex: 'action',
      align: 'center' as 'center',
      render: (_: any, record: IIntegralParams) => (
        <div>
          <Button
            type="text"
            onClick={() => handleEditModalOpen(record)}
            icon={<MdEditSquare style={{ marginBottom: -2 }} />}
          >
            Редактировать
          </Button>
          <ModalEditIntegralParameter
            id={record.id}
            form={form}
            open={editModalOpen}
            setOpen={setEditModalOpen}
          />
          <Button
            loading={deleteLoading}
            type="text"
            onClick={() => deleteIntagralParameterById(record.id)}
            icon={<AiFillDelete style={{ marginBottom: -2 }} />}
          >
            Удалить
          </Button>
        </div>
      ),
    },
  ];
};
