import React from 'react';
import Link from "next/link";
import Table from "../../shared/bootstrap/table/table/Table";
import {TableData, TemplateTable} from "../../shared/bootstrap/table/models/TableProps";
import {PharmacyModel} from "../../models/Pharmacy.model";
import {useRouter} from "next/router";
import IconBtn from "../../shared/ui/icon/IconBtn";
import Tag from "../../shared/ui/tag/Tag";
import StateTemplate from "../core/StateTemplate";
import {dateFormatGGmmmYYYY} from "../../shared/utils/dateUtils";

const ListPatient = ({list, idTreatment}: { list: any[], idTreatment: string }) => {

    const router = useRouter();
    const goToPatient = (patientId: string) => {
        router.push(`/treatment/${idTreatment}/patient/${patientId}`)
    }
    const templates: TemplateTable = {
        name: (value, row) => (
            `${row?.name || '-'} ${row.surname || ''}`
        ),
        state: (value, row) => (
            <>
                {/*<StateTemplate state={row?.state.step} date={row.state.date}/>*/}
            </>
        ),
        created_at: (value, row) => (
            <>
                {dateFormatGGmmmYYYY(row.data.created_at)}
            </>
        ),
        action: (value, row) => (
            <div className={"d-flex justify-content-end "}>
                <IconBtn clickHandler={() => goToPatient(row.data.idDocument)} icon={'arrow-right'} size={'20px'}
                         tintColor={"#fff"}
                /></div>
        ),
    };

    const tableStructurePharma: TableData[] = [
        {
            name: "name",
            label: "Nome",

        },
        {
            name: "created_at",
            label: "Data registrazione",
        },
        {
            name: "state",
            label: "Stato",
        },
        {
            name: "action",
            label: "",
            width: "10%"
        },

    ];


    return (
        <div className={"mt-4"}>
            <Table columns={tableStructurePharma} data={list} templates={templates}/>
        </div>
    );
};

export default ListPatient
