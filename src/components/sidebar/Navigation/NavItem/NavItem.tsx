import { FC } from "react";
import { Link } from "react-router-dom";
import { INavItem } from "../../Sidebar.models";

interface INavItemProps {
    item: INavItem
    isActive: boolean;
}

const NavItem: FC<INavItemProps> = ({item, isActive}) => {
    const {path, icon, title} = item;

    return (
        <li>
            <Link to={path} className={`navigation__link ${isActive ? 'active' : ''}`} data-testid="nav-link">
                <img
                    className="navigation__icon"
                    src={`/img/icon-${icon}.svg`}
                    alt={title}
                />
                <span>{title}</span>
            </Link>
        </li>
    )
}

export default NavItem;