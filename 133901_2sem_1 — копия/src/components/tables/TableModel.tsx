import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { useModel } from "@umijs/max";
import { history } from "@umijs/max";
import { request } from "@umijs/max";
import { Popconfirm, Space, Table, message } from "antd";
import dayjs from 'dayjs';

export default function () {
    const {data, loading, fillData} = useModel('useModModel');
    
    const date_format = (value: string | null) => {

        if (!value) return "";
        const date =  dayjs(value);
        if (date.format('YYYY' ) == '1901' && date.format('DD' ) == '01' && date.format('MM' ) == '01' ) return "";
      
      
        return dayjs(value).format('DD.MM.YYYY');
        }
        const deleteHandler = (id: number) => {
            request('/api/model', {method: 'DELETE',params: {id} }).then(() => {
              message.success("Модель удалена")
        
              const newmodels = data?.models.filter((x:any) => x.id != id)
              const newData = {...data,models: newmodels}
              fillData(newData)
          })
        }
    

      
    const columns =  [{
        title: 'ID',
        dataIndex: 'id',
      },
      {
        title: 'Марка',
        dataIndex: 'markID',
        render: (value: number) => data.marks.find((x: any) => x.id == value)?.name
      
      },
      {
        title: 'Модель',
        dataIndex: 'name',
       
      },
      {
        title: 'Привод',
        dataIndex: 'privod',
      },
      {
        title: 'Кузов',
        dataIndex: 'kuzov',
      },
      {
        title: 'Двигатель',
        dataIndex: 'dvs',
      },
      {
        title: 'Лошадки',
        dataIndex: 'ls',
      },
      {
        title: 'Объем двигателя',
        dataIndex: 'engine_capacity',
      }
      ,
      {
        title: 'Дата добавления',
        dataIndex: 'createdAt',
        render: (value: any) => date_format(value)
        
      },
      {
        title: 'Дата Обновления',
        dataIndex: 'updatedAt',
        render: (value: any) => date_format(value)
        
      },
      {
        title: 'Действия',
        key: 'action',
        render: (row: any) => {

return <Space>
          <a onClick={() => history.push(`/cars/edit/${row.id}`)}><EditOutlined/></a>
      
          <a>
          <Popconfirm
            title="Вы точно хотите удалить модель?"
            description="Подтверждение удаления модели"
            onConfirm={() => deleteHandler(row.id)}
            onOpenChange={() => console.log('open change')}
            okText="Да"
            cancelText="Нет"
          >
            <DeleteOutlined/>
          </Popconfirm>
          </a>
          
        </Space>}
      }
      ]

    return (
            <>
         <Table
            rowKey="id"
            loading ={loading}
            columns = {columns}
            dataSource={loading ? [] : data?.models} />

          </>  
    );
    
}



