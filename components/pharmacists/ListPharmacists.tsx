import React from 'react';
import Table from "../../shared/bootstrap/table/table/Table";
import {TemplateTable} from "../../shared/bootstrap/table/models/TableProps";
import {useRouter} from "next/router";
import IconBtn from "../../shared/ui/icon/IconBtn";
import {usePharmacistsList} from "./usePharmacistsList";
import {UserLoggedModel} from "../../models/UserLogged.model";
import {getPharmacies} from "../../shared/utils/getPharmacy";

const ListPharmacists = ({
                             list,
                             editPharmacistHandler,
                             deletePharmacistHandler,
                             noAction
                         }: {
    list: any[],
    editPharmacistHandler?: (idPharma: string) => void
    deletePharmacistHandler?: (idPharma: string) => void
    noAction?: boolean
}) => {
    const router = useRouter();
    const {tableStructurePharmacist} = usePharmacistsList(noAction);

    const templates: TemplateTable = {
        name: (value, row) => (
            <div>
                {row.data.name} {row.data.surname}
            </div>
        ),
        pharmacies: (value, row) => (
            <div>
                {getPharmacies(row.data.pharmacies).map(ele => ele.name).join(', ')}
            </div>
        ),
        ...(!noAction ? {
            action: (value, row) => (
                <div className={"d-flex justify-content-end gap-2 "}>
                    <IconBtn clickHandler={() => editPharmacistHandler && editPharmacistHandler(row.id)} icon={'edit'}
                             size={'18px'}
                             tintColor={"#fff"}/>
                    <IconBtn variant="danger"
                             clickHandler={() => deletePharmacistHandler && deletePharmacistHandler(row.id)}
                             icon={'trash'}
                             size={'18px'}
                             tintColor={"#fff"}/>
                </div>
            )
        } : {})
    };


    return (
        <Table columns={tableStructurePharmacist} data={list} templates={templates} styleTable={'action-sticky'}
            /*  clickRow={(event: React.MouseEvent, row: any, index: number) => goToPharma(row.idDocument)}*//>
    );
};

export default ListPharmacists
