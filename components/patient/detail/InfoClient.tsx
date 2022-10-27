import React from 'react';
import UserAvatar from "../../../shared/ui/userAvatar/UserAvatar";
import Card from "../../../shared/ui/card/Card";
import {ClientModel} from "../../../models/Client.model";
import {dateFormatGGmmmYYYY} from "../../../shared/utils/dateUtils";

const InfoClient = ({info}: { info?: ClientModel }) => {
    return (
        <Card>
            <div className={'d-flex justify-content-center flex-column text-center'}>
                <div className={'d-flex justify-content-center mb-3'}>
                    <UserAvatar user={`${info?.data?.name} ${info?.data?.surname}`} className={'big'}/>
                </div>
                <h3>
                    {info?.data?.name?.toUpperCase()} {info?.data?.surname.toUpperCase()}
                </h3>
                <div>
                    {info?.email}
                </div>
                <small>
                    {dateFormatGGmmmYYYY(info?.created_at || '')}
                </small>
            </div>
        </Card>
    );
};

export default InfoClient;
