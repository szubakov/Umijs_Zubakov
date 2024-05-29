
import { request } from "@umijs/max";
import { Form } from "antd";
import React from "react";

export default function useModModel() {
  const [form] = Form.useForm();
    const [data, setData] = React.useState<any>();
    const [loading, setLoading] = React.useState<boolean>(true);
    const [isModalOpen, setIsModalOpen] = React.useState(false);

    const fillData = (data: any) => {
        setData(data);

    }

    const setIsModalState = (state: boolean) => {
        setIsModalOpen(state)
    }
  
    const updateModels = () => {
        setLoading(true)
        request('/api/model/GetAll', {method: 'POST', data: { } }).then(data => {
          fillData(data)
          
            }).finally(() => setLoading(false))
       }
       
       const searchHandler = ( data: any) =>{
        setLoading(true)
        request('/api/model/GetAll', {method: 'POST', data}).then(data => {
          console.log(data)
          fillData(data)
          setLoading(false)
            })
        
      }

      const addHandler = ( data: any) =>{
        request('/api/Model', {method: 'PUT', data}).then(data => {
          setIsModalOpen(false);
          updateModels();
         
            })
        
      }
      
      const showModal = () => {
        setIsModalOpen(true);
        form.resetFields();
      };
      
    return {
        data,
        form,
        loading,
        isModalOpen,
        addHandler,
        fillData,
        setIsModalOpen,
        searchHandler,
        showModal,
        updateModels,
        setIsModalState
    }
}

