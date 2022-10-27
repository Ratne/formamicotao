import {TableData} from "../../shared/bootstrap/table/models/TableProps";

export const usePharmacistsList = (noAction?: boolean) => {

    const tableStructurePharmacist: TableData[] = [
        {
            name: "name",
            label: "Nome e Cognome",
        },
        {
            name: "email",
            label: "Email",
        },
        {
            name: "phone",
            label: "Telefono",
        },
        {
            name: "pharmacies",
            label: "Farmacia",
        },
        ...(!noAction ? [{
            name: "action",
            label: "",
        }] : [])
    ];

    return {
        tableStructurePharmacist
    }
}