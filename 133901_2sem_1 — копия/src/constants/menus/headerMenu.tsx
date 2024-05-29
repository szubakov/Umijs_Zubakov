import { useModel } from '@umijs/max';
import { Button } from 'antd';
import { AiOutlineLogout } from 'react-icons/ai';
import { ImUser } from 'react-icons/im';
import { Link } from 'react-router-dom';

export default () => {
  const { initialState, setInitialState, refresh } = useModel('@@initialState');

  const logoutHandler = async () => {
    localStorage.removeItem('token');
    setInitialState({});
  };

  return [
    {
      label: <Link to="cabinet">Личный кабинет</Link>,
      icon: <ImUser />,
      key: 'cabinet',
    },
    {
      label: (
        <Button type="text" onClick={logoutHandler}>
          Выход
        </Button>
      ),
      icon: <AiOutlineLogout />,
      key: 'logout',
    },
  ];
};
