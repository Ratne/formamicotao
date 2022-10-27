import {TableData} from "../../shared/bootstrap/table/models/TableProps";

export const useEmployeeList = () => {

    const tableStructureEmployee: TableData[] = [
        {
            name: "name",
            label: "Nome",

        },

        {
            name: "action",
            label: "",
            width: "10%"
        },

    ];

    return {
        tableStructureEmployee
    }
}