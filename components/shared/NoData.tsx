import React from 'react';
import Card from "../../shared/ui/card/Card";
import {IconSVG} from "../../shared/ui/icon/IconSVG";
import BtnPrimary from "../../shared/bootstrap/button/primary/BtnPrimary";
import {useRouter} from "next/router";

const NoData = () => {
    const router = useRouter();

    return (
        <Card classCard={'v-auto'}>
            <div className={'text-center p-5'}>
                <IconSVG icon={'error-data'} size={'200px'}/>

                <h2 className={`title-text mt-5`}>Ops! Qualcosa è andato storto...</h2>

                <h3 className={"subtitle-text mt-3"}>
                    Nessuna informazione disponibile per la pagina selezionata
                </h3>
            </div>
            <div className={'d-flex justify-content-center p-5'}>
                <BtnPrimary onClick={() => router.push('/')}>Torna alla home</BtnPrimary>
            </div>
        </Card>
    );
};

export default NoData;
