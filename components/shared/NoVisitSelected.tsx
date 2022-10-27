import React from 'react';
import Image from "next/image";
import bgList from "/public/assets/bulleted_list.svg"

const NoVisitSelected = ({}: {}) => {
    return (
        <div className={'d-flex flex-column justify-content-center align-items-center w-100 h-100'}>
            <h3>
                Nessuna fase selezionata.
            </h3>
            <div>
                Seleziona la fase per visualizzare o aggiungere una nuova visita.
            </div>
            <div>
                <Image src={bgList} width={"220px"} height={'220px'} style={{opacity: '0.3'}}/>
            </div>
        </div>
    );
};

export default NoVisitSelected;
