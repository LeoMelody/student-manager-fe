import React from "react"
import { Layout } from "antd"
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons"
import { Avatar } from 'antd';
const { Header } = Layout

type Props = {
  collapsed: boolean
  toggle: any
}

export default class RHeader extends React.Component<Props, {}> {
  render() {
    const { collapsed, toggle } = this.props
    return (
      <Header className="site-layout-background">
        {React.createElement(
          collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
          {
            className: "trigger",
            onClick: toggle,
          }
        )}
        <Avatar></Avatar>
      </Header>
    )
  }
}
