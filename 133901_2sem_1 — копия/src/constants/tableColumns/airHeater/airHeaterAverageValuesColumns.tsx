import ModalEditAirHeaterAverageValue from '@/components/modals/airHeater/ModalEditAirHeaterAverageValue';
import IAirHeaterAverageValue from '@/models/interfaces/IAirHeaterAverageValue';
import { useModel } from '@umijs/max';
import { Button } from 'antd';
import { useForm } from 'antd/es/form/Form';
import moment from 'moment';
import { useState } from 'react';
import { AiFillDelete } from 'react-icons/ai';
import { MdEditSquare } from 'react-icons/md';

export default () => {
  const { handleDelete, handleEdit } = useModel('useAirHeaterValuesModel');
  const [deleteLoading, setDeleteLoading] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [form] = useForm();

  const handleEditModalOpen = async (record: IAirHeaterAverageValue) => {
    form.setFieldsValue({
      value: record.value,
      date: record.date,
      id: record.id,
      furnaceName: record.furnaceName,
      parameterName: record.parameterName,
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
      title: 'Значение',
      dataIndex: 'value',
      align: 'center' as 'center',
    },
    {
      title: 'Печь',
      dataIndex: 'furnaceName',
      align: 'center' as 'center',
    },

    {
      title: 'Параметр',
      dataIndex: 'parameterName',
      align: 'center' as 'center',
    },
    {
      title: '',
      dataIndex: 'action',
      align: 'center' as 'center',
      render: (_: any, record: IAirHeaterAverageValue) => (
        <div>
          <Button
            type="text"
            onClick={() => handleEditModalOpen(record)}
            icon={<MdEditSquare style={{ marginBottom: -2 }} />}
          >
            Редактировать
          </Button>
          <ModalEditAirHeaterAverageValue
            updateData={handleEdit}
            form={form}
            open={editModalOpen}
            setOpen={setEditModalOpen}
            id={record.id}
            furnaceName={record.furnaceName}
            parameterName={record.parameterName}
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
