import React from 'react';
import Link from "next/link";
import Table from "../../shared/bootstrap/table/table/Table";
import {TableData, TemplateTable} from "../../shared/bootstrap/table/models/TableProps";
import {PharmacyModel} from "../../models/Pharmacy.model";
import {useRouter} from "next/router";
import IconBtn from "../../shared/ui/icon/IconBtn";

const ListParmacies = ({list}: { list: PharmacyModel[] }) => {
    const router = useRouter();
    const goToPharma = (pharmaId: string) => {
        router.push('pharmacies/' + pharmaId)
    }
    const templates: TemplateTable = {
        address: (value, row) => (
            `${row?.address || ''}${row.house_number && ', ' + row.house_number || ''}  ${row.cap || ''} ${row.city || ''} ${row.province || ''}`
        ),
        action: (value, row) => (
            <div className={"d-flex justify-content-end "}>
                <IconBtn clickHandler={() => goToPharma(row.idDocument)} icon={'arrow-right'} size={'18px'}
                         tintColor={"#fff"}/>
            </div>
        ),
    };

    const tableStructurePharma: TableData[] = [
        {
            name: "name",
            label: "Nome",

        },
        {
            name: "address",
            label: "Indirizzo",
        },
        {
            name: "action",
            label: "",
            width: "10%"
        },

    ];


    return (
        <div className={"mt-4"}>
            <Table columns={tableStructurePharma} data={list} templates={templates}
                   clickRow={(event: React.MouseEvent, row: any, index: number) => goToPharma(row.idDocument)}/>
        </div>
    );
};

export default ListParmacies
