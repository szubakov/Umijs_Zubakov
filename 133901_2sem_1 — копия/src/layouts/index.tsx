import  './index.less';
import { Link, Outlet, history } from 'umi';
import authTheme from '@/constants/themes/authTheme';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import { Content, Footer, Header } from 'antd/es/layout/layout';
import '../styles/main.css';


export default function () {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

 

const items = [{
key: '',
label: 'Главная'
},
{
  key: 'models',
label: 'Модели'
}

];
  return (
    <Layout >
      
        <Header style={{ display: 'flex', alignItems: 'center' }}>
          <div className="demo-logo" />
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['2']}
            items={items}
            style={{ flex: 1, minWidth: 0 }}
            onClick={({item, key, keyPath, domEvent}) => {
              history.push(`/${key}`)


              
            }}
          />
        </Header>
        <Content style={{ padding: '0 48px' }}>
         
          <div
            style={{
              background: colorBgContainer,
              minHeight: 280,
              padding: 24,
              borderRadius: borderRadiusLG,
            }}
          >
            <Outlet />
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
         ©{new Date().getFullYear()} Created by Zubakov and Ko
        </Footer>
      </Layout>

  
  );
}
