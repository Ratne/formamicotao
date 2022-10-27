import React from 'react';
import Card from "../../../shared/ui/card/Card";
import Label from "../../../shared/bootstrap/form/label/Label";
import {ClientModel} from "../../../models/Client.model";
import IconBtn from "../../../shared/ui/icon/IconBtn";
import {dateFormatGGmmmYYYY} from "../../../shared/utils/dateUtils";

const DetailClient = ({info, editPatientHandler, showEdit}: { info?: ClientModel, showEdit: boolean, editPatientHandler: () => void }) => {

    const dataBirthday = dateFormatGGmmmYYYY(info?.data?.birthday || '')

    return (
        <Card>
            <div className={'row'}>
                <div className={'col-md-6 mb-3'}>
                    <Label>Nato a</Label>
                    <div className={'text-ellipsis'} title={info?.data?.birthplace}>

                        {info?.data?.birthplace}
                    </div>
                </div>
                <div className={'col-md-4 mb-3'}>
                    <Label>il</Label>
                    <div className={'text-ellipsis'} title={dataBirthday as string}>
                        {dataBirthday}
                    </div>
                </div>
                <div className={'col-md-2 mb-3'}>
                    {showEdit && <div className={'d-flex justify-content-end'}>
                        <IconBtn clickHandler={editPatientHandler} icon={'edit'} size={'18px'}
                                 tintColor={"#fff"}/>
                    </div>}
                </div>
                <div className={'col-md-12 mb-3'}>
                    <Label>Indirizzo</Label>
                    <div>
                        {info?.data?.address || '-'}{info?.data?.house_number ? ',' : ''} {info?.data?.house_number} {info?.data?.city} {info?.data?.cap} {info?.data?.province}
                    </div>
                </div>
                <div className={'col-md-12 col-lg-6 mb-3'}>
                    <Label>Email</Label>
                    <div className={'text-ellipsis'} title={info?.email}>
                        {info?.email || '-'}
                    </div>
                </div>
                <div className={'col-md-12 col-lg-6 mb-3'}>
                    <Label>Telefono</Label>
                    <div className={'text-ellipsis'} title={info?.data?.phone}>
                        {info?.data?.phone || '-'}
                    </div>
                </div>
            </div>
        </Card>
    );
};

export default DetailClient;
