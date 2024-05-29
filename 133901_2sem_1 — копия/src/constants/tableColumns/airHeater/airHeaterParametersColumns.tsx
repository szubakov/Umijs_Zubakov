import ModalEditAirHeaterParameter from '@/components/modals/airHeater/ModalEditAirHeaterParameter';
import IAirHeaterParameter from '@/models/interfaces/IAirHeaterParameter';
import { useModel } from '@umijs/max';
import { Button } from 'antd';
import { useForm } from 'antd/es/form/Form';
import { useState } from 'react';
import { AiFillDelete } from 'react-icons/ai';
import { MdEditSquare } from 'react-icons/md';

export default () => {
  const { handleDelete } = useModel('useAirHeaterParametersModel');
  const [deleteLoading, setDeleteLoading] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [form] = useForm();

  const handleEditModalOpen = async (record: IAirHeaterParameter) => {
    form.setFieldsValue({
      name: record.name,
      alias: record.alias,
      id: record.id,
    });
    setEditModalOpen(true);
  };

  const deleteCriteriaById = async (id: number) => {
    setDeleteLoading(true);
    handleDelete(id);
    setDeleteLoading(false);
  };

  return [
    {
      title: 'Название',
      dataIndex: 'name',
      align: 'center' as 'center',
    },
    {
      title: 'Код',
      dataIndex: 'alias',
      align: 'center' as 'center',
    },
    {
      title: '',
      dataIndex: 'action',
      align: 'center' as 'center',
      render: (_: any, record: IAirHeaterParameter) => (
        <div>
          <Button
            type="text"
            onClick={() => handleEditModalOpen(record)}
            icon={<MdEditSquare style={{ marginBottom: -2 }} />}
          >
            Редактировать
          </Button>
          <ModalEditAirHeaterParameter
            form={form}
            open={editModalOpen}
            setOpen={setEditModalOpen}
            id={record.id}
          />
          <Button
            loading={deleteLoading}
            type="text"
            onClick={() => deleteCriteriaById(record.id)}
            icon={<AiFillDelete style={{ marginBottom: -2 }} />}
          >
            Удалить
          </Button>
        </div>
      ),
    },
  ];
};
