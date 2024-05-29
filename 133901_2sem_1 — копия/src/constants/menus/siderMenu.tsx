import { FaFire } from 'react-icons/fa6';
import { GiMetalBar, GiOpenBook, GiSettingsKnobs } from 'react-icons/gi';
import { HiChartBar, HiDocumentSearch } from 'react-icons/hi';
import { SlChemistry } from 'react-icons/sl';
import { Link } from 'react-router-dom';

export default [
  {
    label: <Link to="stability">Стабильность раб.</Link>,
    icon: <GiSettingsKnobs style={{ marginLeft: -5 }} />,
    key: 'stability',
  },
  {
    label: 'Параметры',
    icon: <HiDocumentSearch style={{ marginLeft: -5 }} />,
    key: 'parameters',
    children: [
      {
        label: <Link to="/parameters/asutp">АСУ ТП</Link>,
        icon: '',
        key: 'asutp',
      },
      {
        label: <Link to="/parameters/values">Значения</Link>,
        icon: '',
        key: 'parameterValues',
      },
      {
        label: <Link to="/parameters/integralParameters">Интегральные</Link>,
        icon: '',
        key: 'integralParameters',
      },
      {
        label: <Link to="/parameters/airHeater">Фурмы</Link>,
        icon: '',
        key: 'airHeather',
      },
    ],
  },
  {
    label: <Link to="criteria">Критерии</Link>,
    icon: <HiChartBar style={{ marginLeft: -5 }} />,
    key: 'criteria',
  },
  {
    label: <Link to="outputs">Выпуски</Link>,
    icon: <GiMetalBar style={{ marginLeft: -5 }} />,
    key: 'outputs',
  },
  {
    label: <Link to="chemistry">Химия кол. газа</Link>,
    icon: <SlChemistry style={{ marginLeft: -5 }} />,
    key: 'chemistry',
  },
  {
    label: 'Фурмы',
    icon: <FaFire style={{ marginLeft: -5 }} />,
    key: 'airHeater',
    children: [
      {
        label: <Link to="/airHeater/types">Типы</Link>,
        icon: '',
        key: 'types',
      },
      {
        label: <Link to="/airHeater/values">Значения</Link>,
        icon: '',
        key: 'airHeaterValues',
      },
      {
        label: <Link to="/airHeater/replacements">Стойкость</Link>,
        icon: '',
        key: 'replacements',
      },
      {
        label: <Link to="/airHeater/stopsWork">Остановки</Link>,
        icon: '',
        key: 'stopsWork',
      },
    ]
  },
  {
    label: 'Справочники',
    icon: <GiOpenBook style={{ marginLeft: -5 }} />,
    key: 'guides',
    children: [
      {
        label: <Link to="/guides/reasonsForReplacements">Причины замены</Link>,
        icon: '',
        key: 'reasonsForReplacements',
      },
      {
        label: <Link to="/guides/reasonsForStop">Причины ост.</Link>,
        icon: '',
        key: 'reasonsForStop',
      },
    ],
  },
];
