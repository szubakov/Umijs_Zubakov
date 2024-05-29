import ModalEditCriteria from '@/components/modals/bFStabilityEvaluation/ModalEditCriteria';
import ICriteria from '@/models/interfaces/ICriteria';
import { useModel } from '@umijs/max';
import { Button } from 'antd';
import { useForm } from 'antd/es/form/Form';
import { useState } from 'react';
import { AiFillDelete } from 'react-icons/ai';
import { MdEditSquare } from 'react-icons/md';

export default () => {
  const { handleDelete } = useModel('useBFStabilityCriteriaModel');
  const [deleteLoading, setDeleteLoading] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [form] = useForm();

  const handleEditModalOpen = async (record: ICriteria) => {
    form.setFieldsValue({
      indicatorName: record.indicatorName,
      parameterName: record.parameterName,
      rang: record.rang,
      acceptableDelta: record.acceptableDelta,
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
      title: 'Наименование показателя',
      dataIndex: 'indicatorName',
      align: 'center' as 'center',
    },
    {
      title: 'Наименование параметра',
      dataIndex: 'parameterName',
      align: 'center' as 'center',
      render: (text: any) => text.replace(/<sup>|<\/sup>/g, ''),
    },
    {
      title: 'Ранг',
      dataIndex: 'rang',
      align: 'center' as 'center',
    },
    {
      title: 'Возможное отклонение',
      dataIndex: 'acceptableDelta',
      align: 'center' as 'center',
    },
    {
      title: '',
      dataIndex: 'action',
      align: 'center' as 'center',
      render: (_: any, record: ICriteria) => (
        <div>
          <Button
            type="text"
            onClick={() => handleEditModalOpen(record)}
            icon={<MdEditSquare style={{ marginBottom: -2 }} />}
          >
            Редактировать
          </Button>
          <ModalEditCriteria
            form={form}
            open={editModalOpen}
            setOpen={setEditModalOpen}
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
