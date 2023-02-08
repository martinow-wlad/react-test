import { FC } from "react";
import Navigation from "./Navigation";

import './Sidebar.scss';

const Header: FC = () => {
    return (
        <aside className="sidebar">
            <img className="sidebar__logo" src="/img/logo.svg" alt="RecoLabs"/>
            <Navigation />
        </aside>
    )
}

export default Header;