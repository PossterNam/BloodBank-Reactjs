import "./App.css";
import "antd/dist/antd.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Siderbar from "./Component/Layout/Sidebar";
import BloodGroupIndex from "./Component/BloodGroup/BloodGroupIndex";
import Create from "./Component/BloodGroup/Create";
import Edit from "./Component/BloodGroup/Edit";
import { Layout } from "antd";
import Nav from "./Component/Layout/Nav";
import { Content, Header } from "antd/lib/layout/layout";
import Sider from "antd/lib/layout/Sider";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Layout>
          <Header className="header" style={{backgroundColor: 'white'}}>
            <Nav />
          </Header>
          <Layout>
            <Sider style={{ backgroundColor: "white" , height: '100vh'}}>
              <Siderbar />
            </Sider>
            <Layout style={{ padding: "0 24px 24px" ,backgroundColor: "white"}}>
              <Content>
                <Routes>
                  <Route path="/" element={<BloodGroupIndex />} />
                  <Route path="/BloodGroup" element={<BloodGroupIndex />} />
                  <Route path="/BloodGroup/Add" element={<Create />} />
                  <Route path="/BloodGroup/edit/:id" element={<Edit />} />
                </Routes>
              </Content>
            </Layout>
          </Layout>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
