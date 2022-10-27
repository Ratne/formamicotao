import React from 'react';
import {PharmacyModel} from "../../../models/Pharmacy.model";
import UserAvatar from "../../../shared/ui/userAvatar/UserAvatar";
import Card from "../../../shared/ui/card/Card";

const InfoPharma = ({info}: { info?: PharmacyModel }) => {
    return (
        <Card>
            <div className={'d-flex justify-content-center flex-column text-center'}>
                <div className={'d-flex justify-content-center mb-3'}>
                    <UserAvatar user={info?.name} className={'big'}/>
                </div>
                <h3>
                    {info?.name?.toUpperCase()}
                </h3>
            </div>
        </Card>
    );
};

export default InfoPharma;
