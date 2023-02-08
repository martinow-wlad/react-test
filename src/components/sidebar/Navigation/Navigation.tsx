import { FC } from "react";
import { useLocation } from "react-router-dom";
import NavItem from "./NavItem";
import { navigation } from "../config";
import { INavItem } from "../Sidebar.models";

import './Navigation.scss'

const Navigation: FC = () => {
    const location = useLocation();

    const navList = navigation.map((navItem: INavItem) => {
        const isActive = location.pathname.includes(navItem.path);

        return <NavItem item={navItem} isActive={isActive} key={navItem.path} />;
    })

    return (
        <nav className="navigation">
            <ul>
                {navList}
            </ul>
        </nav>
    )
}

export default Navigation;