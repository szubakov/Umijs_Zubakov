
import { Button, Form, Input, Select} from "antd";
import React, { ChangeEvent } from "react";

import { useModel } from "@umijs/max";
import TableModel from "@/components/tables/TableModel";
import ModalMarkAdd from "@/components/modals/ModalMarkAdd";



const DocsPage = () => {
  
  const {data,updateModels, showModal, searchHandler} = useModel('useModModel');
  const {initialState, setInitialState, refresh} = useModel('@@initialState');
  const {getMark, marks} = useModel('useMarkModel');

 
  React.useEffect(() => {
    
    updateModels()
    getMark();

    
   }, []);

   
  return (
    <div>
      
      <Button type="primary" onClick={showModal} style={{marginBottom: '12px'}}>
        Добавить модель
      </Button>
      
       <Form layout="inline" onFinish={searchHandler}>
       
       <Form.Item name = "markid" label="Марка" style ={{marginBottom: '12px'}}>
          <Select style ={{width: '150px'}} options ={marks} allowClear />
        </Form.Item>

        <Form.Item name = "name" label="Модель" style ={{marginBottom: '12px'}}>
          <Input style ={{width: '150px'}} />
        </Form.Item>
        <Form.Item name = "privod" label="Привод" style ={{marginBottom: '12px'}}>
          <Input style ={{width: '150px'}} />
        </Form.Item>
        <Form.Item name = "kuzov" label="Кузов" style ={{marginBottom: '12px'}}>
          <Input style ={{width: '150px'}} />
        </Form.Item>

        <Button type="primary" htmlType="submit">Найти</Button>
        
      </Form>
     
     
     <TableModel />
     <ModalMarkAdd />


      
    </div>
  );
};

export default DocsPage;
