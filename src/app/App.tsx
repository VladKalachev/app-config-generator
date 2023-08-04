import { Layout, Tabs, Badge } from 'antd';
import { useState } from 'react';
import { CreateConfigPage } from '../pages/CreateConfigPage';
import { ImportConfigPage } from '../pages/ImportConfigPage';
import './app.css';

const { Header, Content } = Layout;

enum ActivePage {
  CREATE = "1",
  IMPORT = "2"
}

const items = [
  {
    label: "Создать конфиг",
    key: ActivePage.CREATE,
  },
  // {
  //   label: "Импортировать конфиг",
  //   key: ActivePage.IMPORT,
  // }
]

export const App = () => {
  const [activePage, setActivePage] = useState(ActivePage.CREATE);
  const checkActivePage = activePage === ActivePage.CREATE;

  const handleChangePage = (activeKey: ActivePage) => {
    setActivePage(activeKey);
  };

  return (
    <Layout>
       <Header>
          <div className='header-text'>
            {/* logo */}
            <Badge.Ribbon text="v 0.0.1">
              <h2>Генератор конфигов</h2>
            </Badge.Ribbon>
          </div>
       </Header>
       <Content className='content-wrapper'>
        {/* Tabs */}
        <Tabs activeKey={activePage} onChange={handleChangePage} items={items}/>
        
        {/* Pages */}
        {checkActivePage ? <CreateConfigPage /> : <ImportConfigPage />}
       </Content>
    </Layout>
  )
}
