import { FC, useState } from "react";
import { IProcess } from "../../pages/process/ProcessPage.models";
import CardMenu from "./cardMenu";

import './ProcessCard.scss';

interface IProcessCard {
    process: IProcess;
}

const ProcessCard: FC<IProcessCard> = ({process}) => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className="process-card">
            <h3>{process.name}</h3>
            <span>{process.description}</span>
            <div className="process-card__icon">
                <img src={process.iconUrl} alt={process.name}/>
            </div>
            <button onClick={() => setMenuOpen(true)} className="process-card__btn"></button>
            <CardMenu open={menuOpen}/>
        </div>
    )
}

export default ProcessCard;