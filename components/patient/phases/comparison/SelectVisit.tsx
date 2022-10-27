import React, {useState} from 'react';
import {createStructureForm} from "../../../../shared/utils/forms/useStructureForm";
import {FormElements} from "../../../../shared/bootstrap/form/FormElements";
import {useForm} from "../../../../shared/utils/forms/useForm";

const SelectVisit = ({
                         visitsInfo,
                         setVisit,
                         label
                     }: { visitsInfo: any[], setVisit: (data: string) => void, label: string }) => {

    const structureComparison1 = createStructureForm([
        {
            name: 'visit',
            type: 'select',
            label: `${label}`,
            defaultValue: {
                isDefault: true,
                label: 'Seleziona visita',
                disabled: true,
            },
            options: visitsInfo.map(ele => ({
                label: `${ele.phase.name} - ${ele.visit.created_at}`,
                value: ele.visit.idDocument
            })),
            col: {xs: "12"}
        },

    ])
    const {dataForm} = useForm(() => {
    })
    const changeValueHandler = (data: any) => {
        setVisit(data.value)
    }
    return (
        <FormElements structure={structureComparison1} errors={{}} changeValue={changeValueHandler}
                      dataForm={dataForm}></FormElements>
    );
};

export default SelectVisit;
