import ModalEditStopReason from '@/components/modals/airHeater/ModalEditStopReason';
import IShortData from '@/models/interfaces/IShortData';
import { useModel } from '@umijs/max';
import { Button } from 'antd';
import { useForm } from 'antd/es/form/Form';
import { useState } from 'react';
import { AiFillDelete } from 'react-icons/ai';
import { MdEditSquare } from 'react-icons/md';

export default () => {
  const { handleDelete } = useModel(
    'useAirHeaterReasonsForStopModel',
  );
  const [deleteLoading, setDeleteLoading] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [form] = useForm();

  const handleEditModalOpen = async (record: IShortData) => {
    form.setFieldsValue({ name: record.name, id: record.id });
    setEditModalOpen(true);
  };

  const deleteById = async (id: number) => {
    setDeleteLoading(true);
    handleDelete(id);
    setDeleteLoading(false);
  };

  return [
    {
      title: 'Причина',
      dataIndex: 'name',
      align: 'center' as 'center',
    },
    {
      title: '',
      dataIndex: 'action',
      align: 'center' as 'center',
      render: (_: any, record: IShortData) => (
        <div>
          <Button
            type="text"
            onClick={() => handleEditModalOpen(record)}
            icon={<MdEditSquare style={{ marginBottom: -2 }} />}
          >
            Редактировать
          </Button>
          <ModalEditStopReason
            form={form}
            open={editModalOpen}
            setOpen={setEditModalOpen}
            id={record.id}
          />
          <Button
            loading={deleteLoading}
            type="text"
            onClick={() => deleteById(record.id)}
            icon={<AiFillDelete style={{ marginBottom: -2 }} />}
          >
            Удалить
          </Button>
        </div>
      ),
    },
  ];
};
