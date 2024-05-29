import { request, useParams, useRouteData, history } from "@umijs/max";
import { Button, Form, Input, Select } from "antd";
import React from "react";



const DocsPage = () => {
  const [form] = Form.useForm();
  const [data, setData] = React.useState<any>();
  const [marks, setMarks] = React.useState<any>();
  const params = useParams();

  React.useEffect(() => {

    request('/api/Model/GetOne', { method: 'GET', params }).then(data => {
      form.setFieldsValue(data)
      console.log(data)
    })

    request('/api/mark/GetAll', { method: 'POST', data: {} }).then(data => {
      const marks = data.map((x: { id: any; name: any; }) => ({ value: x.id, label: x.name }))
      setMarks(marks)
  

    })
  }, []);


  const editHandler = (data: any) => {
  
    request('/api/Model', { method: 'POST', data }).then(data => {
      history.push('/models')
   });

  }

  return (
    <div>
      <Form layout="horizontal" onFinish={editHandler} form={form}>
      <Form.Item name = "id" hidden noStyle > </Form.Item>

      <Form.Item name = "markID" label="Марка" >
          <Select style={{ width: '1650px', float: 'right'}}  options ={marks} allowClear />
        </Form.Item>
        
        <Form.Item name="name" label="Модель">
        <Input style={{ width: '1650px', float: 'right'}} />
        </Form.Item>
        <Form.Item name="privod" label="Привод">
          <Input style={{ width: '1650px', float: 'right'}}  />
        </Form.Item>
        <Form.Item name="kuzov" label="Кузов">
          <Input style={{ width: '1650px', float: 'right'}}  />
        </Form.Item>
        <Form.Item name="dvs" label="Двигатель">
          <Input style={{ width: '1650px', float: 'right'}}  />
        </Form.Item>
        <Form.Item name="ls" label="Лошадиные силы">
          <Input style={{ width: '1650px', float: 'right'}} />
        </Form.Item>
        <Form.Item name="engine_capacity" label="Объем двигателя">
          <Input style={{ width: '1650px', float: 'right'}} />
        </Form.Item>
        <Button type="primary" htmlType="submit">Сохранить</Button>
      </Form>
    </div>
  );
};


export default DocsPage;



