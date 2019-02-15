import React from 'react';
import Demo from './List'
import { Row, Col } from 'antd';
import { Avatar } from 'antd';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import {  Dropdown, Button,  message } from 'antd';
function handleButtonClick(e) {
  message.info('Click on left button.');
  console.log('click left button', e);
}

function handleMenuClick(e) {
  message.info('Click on menu item.');
  console.log('click', e);
}

const menu = (
  <Menu onClick={handleMenuClick}>
    <Menu.Item key="1"><Icon type="user" />1st menu item</Menu.Item>
    <Menu.Item key="2"><Icon type="user" />2nd menu item</Menu.Item>
    <Menu.Item key="3"><Icon type="user" />3rd item</Menu.Item>
  </Menu>
);
const { Header, Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;

class App extends React.Component {
  state = {
    collapsed: false,
  };

  onCollapse = (collapsed) => {
    console.log(collapsed);
    this.setState({ collapsed });
  }

  render() {
    return (
      <Layout style={{ minHeight: '100vh' }}>
      <div className="login">
      <Avatar shape="square" size="large" icon="user" />管理员
      <Icon type="caret-down" />
      </div>
        <Sider
          collapsible
          collapsed={this.state.collapsed}
          onCollapse={this.onCollapse}
        >
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1">
           
              <span className="logo">LOGO</span>
            </Menu.Item>
          
            <SubMenu
              key="sub1"
              title={<span><Icon type="user" /><span>后台管理</span></span>}
            >
              <Menu.Item key="3">角色列表</Menu.Item>
              <Menu.Item key="4">菜单列表</Menu.Item>
              <Menu.Item key="5">用户管理</Menu.Item>
            </SubMenu>
          
            
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }} />
          <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
            <Row>
      <Col span={8}>选择菜单
      <Dropdown overlay={menu}>
      <Button style={{ marginLeft: 8 }}>
        Button <Icon type="down" />
      </Button>
    </Dropdown>




      </Col>
  
    </Row>
            </Breadcrumb>
            <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
             <Demo/>
            </div>
          </Content>
          <span className="fontqq">LOGO</span>
          <Footer style={{ textAlign: 'center' }}>
            Ant Design ©2018 Created by Ant UED
          </Footer>
        </Layout>
      </Layout>
    );
  }

}


export default App