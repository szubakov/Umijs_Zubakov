import { FastForwardFilled } from "@ant-design/icons";
import { request } from "@umijs/max";
import React from "react";

export default function useMarkModel() {
    const [marks, setMarks] = React.useState<any>();
  
        const getMark = () => {
          request('/api/mark/GetAll', {method: 'POST', data: { } }).then(data => {
            const marks = data.map((x: any) => ({value: x.id, label: x.name}))
            setMarks(marks)
            console.log(marks)
             
            })
        }
      

    return {
        marks,
        getMark
    }
}

