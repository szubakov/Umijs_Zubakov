import { AsuPeriod } from '@/enums/AsuPeriod';
import IParameter from '@/models/interfaces/IParameter';
import { ColumnType } from 'antd/es/table';
import moment from 'moment';

export const parameterColumns: ColumnType<IParameter>[] = [
  {
    title: 'Дата и время',
    dataIndex: 'timeStampStart',
    align: 'center' as 'center',
    render: (text: string) => {
      var time = moment(text).format('DD.MM.YYYY HH:mm');
      if (time == '01.01.0001 00:00') {
        return 'Не указано';
      }
      return time;
    },
  },
  {
    title: 'Период',
    dataIndex: 'period',
    align: 'center' as 'center',
    render: (text: number) => AsuPeriod[text],
  },
  {
    title: 'Параметр',
    dataIndex: 'parameterName',
    align: 'center',
  },
  {
    title: 'Номер печи',
    dataIndex: 'furnaceNumber',
    align: 'center' as 'center',
  },
  {
    title: 'Значение',
    dataIndex: 'value',
    align: 'center' as 'center',
  },
];
