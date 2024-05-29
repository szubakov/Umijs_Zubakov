import ModalEditReplacement from '@/components/modals/airHeater/ModalEditReplacement';
import IAirHeaterReplacement from '@/models/interfaces/IAirHeaterReplacement';
import { useModel } from '@umijs/max';
import { Button } from 'antd';
import { useForm } from 'antd/es/form/Form';
import dayjs from 'dayjs';
import moment from 'moment';
import { useState } from 'react';
import { AiFillDelete } from 'react-icons/ai';
import { MdEditSquare } from 'react-icons/md';

export default () => {
  const { handleDelete } = useModel('useReplacementModel');
  const [deleteLoading, setDeleteLoading] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [form] = useForm();

  const handleEditModalOpen = async (record: IAirHeaterReplacement) => {
    const formattedDate = dayjs(record.date);
    form.setFieldsValue({
      durability: record.durability,
      date: formattedDate,
      id: record.id,
      furnaceName: record.furnaceName,
      reasonForReplacement: record.reason,
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
      title: 'Стойкость',
      dataIndex: 'durability',
      align: 'center' as 'center',
    },
    {
      title: 'Печь',
      dataIndex: 'furnaceName',
      align: 'center' as 'center',
    },

    {
      title: 'Причина замены',
      dataIndex: 'reason',
      align: 'center' as 'center',
    },
    {
      title: '',
      dataIndex: 'action',
      align: 'center' as 'center',
      render: (_: any, record: IAirHeaterReplacement) => (
        <div>
          <Button
            type="text"
            onClick={() => handleEditModalOpen(record)}
            icon={<MdEditSquare style={{ marginBottom: -2 }} />}
          >
            Редактировать
          </Button>
          <ModalEditReplacement
            form={form}
            open={editModalOpen}
            setOpen={setEditModalOpen}
            reason={record.reason}
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
