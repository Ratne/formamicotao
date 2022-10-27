import React from 'react';
import {PharmacyModel} from "../../../models/Pharmacy.model";
import UserAvatar from "../../../shared/ui/userAvatar/UserAvatar";
import Card from "../../../shared/ui/card/Card";
import Label from "../../../shared/bootstrap/form/label/Label";

const DetailPharma = ({info}: { info?: PharmacyModel }) => {
    return (
        <Card>
            <div className={'row'}>
                <div className={'col-md-12 mb-3'}>
                    <Label>Indirizzo</Label>
                    <div>
                        {info?.address || '-'}{info?.house_number ? ',' : ''} {info?.house_number} {info?.city} {info?.cap} {info?.province}
                    </div>
                </div>
                <div className={'col-md-12 col-lg-4 mb-3'}>
                    <Label>Email</Label>
                    <div>
                        {info?.email || '-'}
                    </div>
                </div>
                <div className={'col-md-12 col-lg-4 mb-3'}>
                    <Label>Telefono</Label>
                    <div>
                        {info?.phone || '-'}
                    </div>
                </div>
            </div>
        </Card>
    );
};

export default DetailPharma;
