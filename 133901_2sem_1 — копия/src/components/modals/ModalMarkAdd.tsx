import { useModel } from "@umijs/max";
import { Button, Form, Input, Modal, Select } from "antd";
import React from "react";

export default function HomePage() {
   const {form, addHandler, isModalOpen, setIsModalOpen} = useModel('useModModel');
   const { marks } = useModel('useMarkModel');
    
  
    return (
        <Modal 
        title ="Новая модель"
         open={isModalOpen} 
         onOk={() => setIsModalOpen(false)} 
         footer={null} 
         onCancel={() => setIsModalOpen(false)}>
            <Form layout="vertical" onFinish={addHandler} form={form}>
         
         <Form.Item name = "markid" label="Марка" >
            <Select options ={marks} allowClear />
          </Form.Item>
  
          <Form.Item name = "name" label="Модель" >
            <Input />
          </Form.Item>
          <Form.Item name = "privod" label="Привод" >
            <Input  />
          </Form.Item>
          <Form.Item name = "kuzov" label="Кузов" >
            <Input  />
          </Form.Item>
          <Form.Item name = "dvs" label="Двигатель" >
            <Input  />
          </Form.Item>
          <Form.Item name = "ls" label="Лошадиные силы" >
            <Input  />
          </Form.Item>
          <Form.Item name = "engine_capacity" label="Объем двигателя" >
            <Input  />
          </Form.Item>
          <Button type="primary" htmlType="submit">Добавить</Button>
        </Form>
        </Modal>
    );
}