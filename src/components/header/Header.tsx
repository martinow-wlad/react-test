import { FC } from "react";
import { useLocation } from "react-router-dom";
import { HEADER_TITLES } from "./consts";

import './Header.scss';

const Header: FC = () => {
    const { pathname } = useLocation();

    const title: string = HEADER_TITLES[pathname];

    return (
        <header className="header">
            <h1>{title}</h1>
        </header>
    )
}

export default Header;