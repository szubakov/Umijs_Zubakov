import './HomePage.less'; // Убедитесь, что путь к файлу стилей правильный
import TableModel from '@/components/tables/TableModel';
import { request } from '@umijs/max';
import { Breadcrumb, Form, Input, Button, Layout, Menu, theme } from 'antd';
import { Content, Footer, Header } from 'antd/es/layout/layout';
import { useState, useEffect } from 'react'; // Добавлено useEffect для загрузки состояния при монтировании

export default function HomePage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Добавлено состояние для отслеживания авторизации
  const [username, setUsername] = useState(''); // Добавлено состояние для хранения имени пользователя

  useEffect(() => {
    // Загружаем состояние авторизации и имя пользователя при монтировании компонента
    const storedUsername = localStorage.getItem('username');
    if (storedUsername) {
      setIsAuthenticated(true);
      setUsername(storedUsername);
    }
  }, []);

  const loginHandler = async (data: any) => {
    console.log(data);

    try {
      const result = await request('/api/auth', { method: 'POST', data });
      console.log(result);
      localStorage.setItem('username', result?.email);
      localStorage.setItem('password', result?.password);
      setUsername(result?.email || ''); // Сохраняем имя пользователя
      setIsAuthenticated(true); // Установка флага авторизации в true
    } catch (error) {
      console.error(error);
      setIsAuthenticated(false); // Обработка ошибок авторизации
    }
  };

  const logoutHandler = () => {
    console.log("Logout");
    localStorage.removeItem('username');
    localStorage.removeItem('password');
    setUsername('');
    setIsAuthenticated(false);
    // Перенаправление пользователя на начальную страницу
    window.location.href = '/';
  };

  if (!isAuthenticated) {
    return (
      <div className="container">
        <Form layout="vertical" onFinish={loginHandler}>
          <Form.Item name="email" label="Имя пользователя" rules={[{ required: true, message: 'Введите ваше имя' }]}>
            <Input />
          </Form.Item>

          <Form.Item name="password" label="Пароль" rules={[{ required: true, message: 'Введите пароль' }]}>
            <Input.Password />
          </Form.Item>

          <Button htmlType="submit" type="primary">Войти</Button>
        </Form>
      </div>
    );
  }

  return (
    <div className="container">
      <h1>Вы авторизованы</h1>
      <p>Добро пожаловать, {username}!</p>
      <Button onClick={logoutHandler}>Выйти</Button>
    </div>
  );
}
