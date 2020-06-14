import React from "react"
import { Layout, Menu } from 'antd';
import {
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons';
import RHeader from "@/components/Header/index";
import RInfo from "../Info/index";
import "./index.scss"

const { Sider, Content } = Layout;

class RLayout extends React.Component {
  state = {
    collapsed: false,
  };
  changeState() {
    this.setState({
      collapsed: !this.state.collapsed
    })
  }
  render() {
    return (
      <Layout className="base-layout">
        <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1" icon={<UserOutlined />}>
              个人中心
            </Menu.Item>
            <Menu.Item key="2" icon={<VideoCameraOutlined />}>
              班级管理
            </Menu.Item>
            <Menu.Item key="3" icon={<UploadOutlined />}>
              学生管理
            </Menu.Item>
            <Menu.Item key="4" icon={<UploadOutlined />}>
              成绩管理
            </Menu.Item>
            <Menu.Item key="5" icon={<UploadOutlined />}>
              学校管理
            </Menu.Item>
            <Menu.Item key="6" icon={<UploadOutlined />}>
              教师管理
            </Menu.Item>
            <Menu.Item key="7" icon={<UploadOutlined />}>
              系统管理
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <RHeader collapsed={this.state.collapsed} toggle={() => {this.changeState()}}/>
          <Content
            className="site-layout-background"
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 280,
            }}
          >
            <RInfo></RInfo>
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default RLayout;

// export default (props: object) => {

// }