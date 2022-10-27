import {PharmacyModel} from "../../models/Pharmacy.model";
import {createStructureForm, createValidationsForm} from "../../shared/utils/forms/useStructureForm";
import {email, required} from "../../shared/utils/forms/utils/validationType";

export const usePatientStructure = (edit: boolean = false, provinces: any[] = []) => {

    const structurePatientData = createStructureForm([
        {
            data: [{
                name: 'name',
                type: 'input',
                label: `Nome`,
                dataElement: {
                    type: 'text',
                    placeholder: 'Nome',
                },
                col: {xs: "12", sm: "12", lg: "6", xl: "6"}
            },
                {
                    name: 'surname',
                    type: 'input',
                    label: `Cognome`,
                    dataElement: {
                        type: 'text',
                        placeholder: 'Cognome',
                    },
                    col: {xs: "12", sm: "12", lg: "6", xl: "6"}
                }]
        },
        {
            name: 'email',
            type: 'input',
            label: `Email`,
            dataElement: {
                type: 'text',
                placeholder: 'Email',
                disabled: edit
            },
            col: {xs: "6", sm: "6", lg: "4", xl: "4"}
        },
        {
            data: [
                {
                    name: 'phone',
                    type: 'input',
                    label: `Telefono`,
                    dataElement: {
                        type: 'text',
                        placeholder: 'Telefono',
                    },
                    col: {xs: "6", sm: "6", lg: "4", xl: "4"}
                },
                {
                    name: 'cf',
                    type: 'input',
                    label: `Codice Fiscale`,
                    dataElement: {
                        type: 'text',
                        placeholder: 'Codice Fiscale',
                    },
                    col: {xs: "6", sm: "6", lg: "4", xl: "4"}
                },
                {
                    name: 'birthplace',
                    type: 'input',
                    label: `Nato a`,
                    dataElement: {
                        type: 'text',
                        placeholder: 'Nato a',
                    },
                    col: {xs: "9", sm: "9", lg: "8", xl: "8"}
                }, {
                    name: 'birthday',
                    type: 'input',
                    label: `il`,
                    dataElement: {
                        type: 'date',
                        placeholder: 'il',
                    },
                    col: {xs: "9", sm: "9", lg: "4", xl: "4"}
                },
                {
                    name: 'address',
                    type: 'input',
                    label: `Indirizzo`,
                    dataElement: {
                        type: 'text',
                        placeholder: 'Indirizzo',
                    },
                    col: {xs: "9", sm: "9", lg: "8", xl: "8"}
                },
                {
                    name: 'house_number',
                    type: 'input',
                    label: `Numero`,
                    dataElement: {
                        type: 'text',
                        placeholder: 'Numero',
                    },
                    col: {xs: "3", sm: "3", lg: "2", xl: "2"}
                },
                {
                    name: 'province',
                    type: 'select',
                    label: `Provincia`,
                    dataElement: {
                        type: 'text',
                        placeholder: 'Provincia',
                    },
                    defaultValue: {
                        label: 'Seleziona',
                        isDefault: true,
                        disabled: true
                    },
                    options: provinces,
                    col: {xs: "12", sm: "12", lg: "2", xl: "2"}
                },
                {
                    name: 'city',
                    type: 'input',
                    label: `Città`,
                    dataElement: {
                        type: 'text',
                        placeholder: 'Città',
                    },
                    col: {xs: "9", sm: "9", lg: "6", xl: "6"}
                },
                {
                    name: 'cap',
                    type: 'input',
                    label: `Cap`,
                    dataElement: {
                        type: 'text',
                        placeholder: 'Cap',
                    },
                    col: {xs: "3", sm: "3", lg: "2", xl: "2"}
                },
                {
                    name: 'note',
                    type: 'textarea',
                    label: `Note`,
                    dataElement: {
                        type: 'text',
                        placeholder: 'Note',
                    },
                    col: {xs: "3", sm: "3", lg: "12", xl: "12"}
                },
            ]
        },
    ])

    const validationPatientData = createValidationsForm([
        {
            name: "email",
            validations: [
                {
                    name: required,
                    params: {name: "Email"},
                },
                {
                    name: email,
                    params: {name: "Email"},
                },
            ],
        },
        {
            data: [
                {
                    name: "name",
                    validations: [
                        {
                            name: required,
                            params: {name: "Nome"},
                        },
                    ],
                }, {
                    name: "surname",
                    validations: [
                        {
                            name: required,
                            params: {name: "Cognome"},
                        },
                    ],
                },

            ]
        }
    ])

    return {
        structurePatientData, validationPatientData
    }
}
