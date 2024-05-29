import ModalEditAirHeaterWorkStop from '@/components/modals/airHeater/ModalEditAirHeaterWorkStop';
import IAirHeaterWorkStop from '@/models/interfaces/IAirHeaterWorkStop';
import { useModel } from '@umijs/max';
import { Button } from 'antd';
import { useForm } from 'antd/es/form/Form';
import dayjs from 'dayjs';
import moment from 'moment';
import { useState } from 'react';
import { AiFillDelete } from 'react-icons/ai';
import { MdEditSquare } from 'react-icons/md';

export default () => {
  const { handleDelete } = useModel('useAirHeaterWorkStopModel');
  const [deleteLoading, setDeleteLoading] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [form] = useForm();

  const handleEditModalOpen = async (record: IAirHeaterWorkStop) => {
    const formattedDateEnd = dayjs(record.dateEnd);
    const formattedDateStart = dayjs(record.dateStart);
    form.setFieldsValue({
      reasonForStopName: record.reasonForStopName,
      airHeaterName: record.airHeaterName,
      dateEnd: formattedDateEnd,
      dateStart: formattedDateStart,
      comment: record.comment,
      id: record.id,
    });
    setEditModalOpen(true);
  };

  const deleteById = async (id: number) => {
    setDeleteLoading(true);
    handleDelete(id);
    setDeleteLoading(false);
  };

  return [
    {
      title: 'Дата начала',
      dataIndex: 'dateStart',
      align: 'center' as 'center',
      render: (record: any) => moment(record).format('DD.MM.YY'),
    },
    {
      title: 'Дата конца',
      dataIndex: 'dateEnd',
      align: 'center' as 'center',
      render: (record: any) => moment(record).format('DD.MM.YY'),
    },
    {
      title: 'Комментарий',
      dataIndex: 'comment',
      align: 'center' as 'center',
    },
    {
      title: 'Причина остановки',
      dataIndex: 'reasonForStopName',
      align: 'center' as 'center',
    },
    {
      title: 'Название фурмы',
      dataIndex: 'airHeaterName',
      align: 'center' as 'center',
    },
    {
      title: '',
      dataIndex: 'action',
      align: 'center' as 'center',
      render: (_: any, record: IAirHeaterWorkStop) => (
        <div>
          <Button
            type="text"
            onClick={() => handleEditModalOpen(record)}
            icon={<MdEditSquare style={{ marginBottom: -2 }} />}
          >
            Редактировать
          </Button>
          <ModalEditAirHeaterWorkStop
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
