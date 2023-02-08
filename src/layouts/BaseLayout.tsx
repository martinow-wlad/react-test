import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "../components/header";
import Sidebar from "../components/sidebar";
import ProcessPage from "../pages/process";

import './BaseLayout.scss'

const BaseLayout: FC = () => {
    return (
        <div className="base-layout">
            <Sidebar/>
            <Header/>
            <div className="base-layout__content">
                <Routes>
                    <Route path="/catalog" element={<h1>catalog</h1>}/>
                    <Route path="/process" element={<ProcessPage />}/>
                    <Route path="/incidents" element={<h1>incidents</h1>}/>
                </Routes>
            </div>
        </div>
    )
}

export default BaseLayout;