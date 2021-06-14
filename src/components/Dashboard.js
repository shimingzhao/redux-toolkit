import React from "react";
import { SocketContext, socket } from "../context/socket";
import { Layout, Breadcrumb } from "antd";
import DataChart from "./DataChart";
import SocketChart from "./SocketChart";
import SiderBar from "./SiderBar";

const { Header, Content, Footer } = Layout;

export class Dashboard extends React.Component {
    state = {
        collapsed: false,
    };

    onCollapse = collapsed => {
        this.setState({ collapsed });
    };

    render() {
        const { collapsed } = this.state;
        return (
            <Layout style={{ minHeight: "100vh" }}>
                <SiderBar collapsed={collapsed} onCollapse={this.collapsed} />
                <Layout className="site-layout">
                    <Header className="site-layout-background" style={{ padding: 0 }} />
                    <Content style={{ margin: "0 16px" }}>
                        <Breadcrumb style={{ margin: "16px 0" }}>
                            <Breadcrumb.Item>User</Breadcrumb.Item>
                            <Breadcrumb.Item>Bill</Breadcrumb.Item>
                        </Breadcrumb>
                        <div>
                            <div className="site-layout-background" style={{ padding: 24, minHeight: 200, width: "100%", minWidth: 600, overflow: "auto" }}>
                                <DataChart />
                            </div>
                            <div className="site-layout-background" style={{ padding: 24, minHeight: 200, width: "100%", minWidth: 300, overflow: "auto", marginTop: 20 }}>
                                <SocketContext.Provider value={socket}>
                                    <SocketChart />
                                </SocketContext.Provider>
                            </div>
                        </div>
                    </Content>
                    <Footer style={{ textAlign: "center" }}>Ant Design ©2018 Created by Ant UED</Footer>
                </Layout>
            </Layout>
        );
    }
};

