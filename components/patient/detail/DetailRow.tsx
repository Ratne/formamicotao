import React from 'react';
import InfoClient from "./InfoClient";
import DetailClient from "./DetailClient";
import Card from "../../../shared/ui/card/Card";
import {ClientModel} from "../../../models/Client.model";
import Label from "../../../shared/bootstrap/form/label/Label";

const DetailRow = ({client, editPatientHandler, showEdit}: { client: ClientModel, showEdit: boolean, editPatientHandler: () => void }) => {
    return (
        <div className={"row detail-client"}>
            <div className={"col-md-12 col-lg-4 col-xl-3"} style={{minHeight: '200px'}}>
                <InfoClient info={client}/>
            </div>
            <div className={"col-md-12 col-lg-4 col-xl-6 left"} style={{minHeight: '200px'}}>
                <DetailClient showEdit={showEdit} info={client} editPatientHandler={editPatientHandler}/>
            </div>
            <div className={"col-md-12 col-lg-4 col-xl-3 right"} style={{minHeight: '200px'}}>
                <Card>
                    <Label>Note del cliente</Label>
                    <div>
                        {client?.data?.note}
                    </div>
                </Card>
            </div>
        </div>
    );
};

export default DetailRow;
