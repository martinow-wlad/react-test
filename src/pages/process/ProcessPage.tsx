import { FC, useEffect, useState } from "react";
import ProcessCard from "../../components/processCard";
import { baseRequest } from "../../helpers/baseRequest";
import { IProcess } from "./ProcessPage.models";

const ProcessPage: FC = () => {
    const [processes, setProcesses] = useState([]);

    useEffect(() => {
        (async() => {
            const data = await baseRequest('/process-metadata');
            console.log(data);

            if (data.error) {
                // handle error
            } else {
                // @ts-ignore
                setProcesses(data.data.mds)
            }

        })();
    }, []);

    const cardList = processes.map((process: IProcess) => <ProcessCard process={process} key={process.id}/>)

    return (
        <div>
            {cardList}
        </div>
    )
}

export default ProcessPage;