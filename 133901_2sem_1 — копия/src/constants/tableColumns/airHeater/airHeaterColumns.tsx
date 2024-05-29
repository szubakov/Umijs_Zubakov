import ModalEditAirHeater from '@/components/modals/airHeater/ModalEditAirHeater';
import IAirHeater from '@/models/interfaces/IAirHeater';
import { useModel } from '@umijs/max';
import { Button } from 'antd';
import { useForm } from 'antd/es/form/Form';
import dayjs from 'dayjs';
import moment from 'moment';
import { useState } from 'react';
import { AiFillDelete } from 'react-icons/ai';
import { MdEditSquare } from 'react-icons/md';

export default () => {
  const { handleDelete } = useModel('useAirHeaterModel');
  const [deleteLoading, setDeleteLoading] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [form] = useForm();

  const handleEditModalOpen = async (record: IAirHeater) => {
    const formattedDate = dayjs(record.date);
    form.setFieldsValue({
      name: record.name,
      date: formattedDate,
      id: record.id,
      furnaceName: record.furnaceName,
    });
    setEditModalOpen(true);
  };

  const deleteValueById = async (id: number) => {
    setDeleteLoading(true);
    handleDelete(id);
    setDeleteLoading(false);
  };

  return [
    {
      title: 'Дата',
      dataIndex: 'date',
      align: 'center' as 'center',
      render: (record: any) => moment(record).format('DD.MM.YY'),
    },
    {
      title: 'Название',
      dataIndex: 'name',
      align: 'center' as 'center',
    },
    {
      title: 'Печь',
      dataIndex: 'furnaceName',
      align: 'center' as 'center',
    },
    {
      title: '',
      dataIndex: 'action',
      align: 'center' as 'center',
      render: (_: any, record: IAirHeater) => (
        <div>
          <Button
            type="text"
            onClick={() => handleEditModalOpen(record)}
            icon={<MdEditSquare style={{ marginBottom: -2 }} />}
          >
            Редактировать
          </Button>
          <ModalEditAirHeater
            form={form}
            open={editModalOpen}
            setOpen={setEditModalOpen}
          />
          <Button
            loading={deleteLoading}
            type="text"
            onClick={() => deleteValueById(record.id)}
            icon={<AiFillDelete style={{ marginBottom: -2 }} />}
          >
            Удалить
          </Button>
        </div>
      ),
    },
  ];
};
