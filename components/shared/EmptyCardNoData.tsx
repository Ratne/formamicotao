import React from 'react';
import Card from "../../shared/ui/card/Card";
import Image from "next/image";
import bgList from "/public/assets/data_transfer.svg";

const EmptyCardNoData = ({}: {}) => {
    return (
        <Card vHeight classCard={'mt-3 d-flex text-center pt-5'}>
            <h3 className={'pt-5'}>Caricamento dei dati in corso</h3>
            <Image src={bgList} width={"220px"} height={'220px'} style={{opacity: '0.3'}}/>
        </Card>
    );
};

export default EmptyCardNoData;
