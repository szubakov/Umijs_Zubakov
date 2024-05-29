import moment from 'moment';

export default [
  {
    title: 'Номер выпуска',
    dataIndex: 'nvipusk',
    align: 'center' as 'center',
  },
  {
    title: 'Дата начала',
    dataIndex: 'dateBeg',
    align: 'center' as 'center',
    render: (record: any) => moment(record, 'DD.MM.YYYY HH:mm').format('DD.MM.YY HH:mm'),
  },
  {
    title: 'Дата конца',
    dataIndex: 'dateEnd',
    align: 'center' as 'center',
    render: (record: any) => moment(record, 'DD.MM.YYYY HH:mm').format('DD.MM.YY HH:mm'),
  },
  {
    title: '%',
    children: [
      {
        title: '[Si]',
        dataIndex: 'si',
        align: 'center' as 'center',
      },
      {
        title: '[Ti]',
        dataIndex: 'ti',
        align: 'center' as 'center',
      },
      {
        title: '[P]',
        dataIndex: 'p',
        align: 'center' as 'center',
      },
      {
        title: '[Mn]',
        dataIndex: 'mn',
        align: 'center' as 'center',
      },
      {
        title: '[S]',
        dataIndex: 'chunugS',
        align: 'center' as 'center',
      },
      {
        title: '(SiO2)',
        dataIndex: 'siO2',
        align: 'center' as 'center',
      },
      {
        title: '(S)',
        dataIndex: 'slagS',
        align: 'center' as 'center',
      },
      {
        title: '(TiO2)',
        dataIndex: 'tiO2',
        align: 'center' as 'center',
      },
      {
        title: '(FeO)',
        dataIndex: 'feO',
        align: 'center' as 'center',
      },
      {
        title: '(CaO)',
        dataIndex: 'caO',
        align: 'center' as 'center',
      },
      {
        title: '(MgO)',
        dataIndex: 'mgO',
        align: 'center' as 'center',
      },
      {
        title: '(Al2O3)',
        dataIndex: 'al2O3',
        align: 'center' as 'center',
      },
    ],
  },
];
