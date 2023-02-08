import { FC } from "react";

interface ICardMenuProps {
    open: boolean;
}

const CardMenu: FC<ICardMenuProps> = ({open}) => {
    return (
        <div className={`process-card__menu ${open ? 'open' : ''}`}>
            menu
        </div>
    )
}

export default CardMenu;