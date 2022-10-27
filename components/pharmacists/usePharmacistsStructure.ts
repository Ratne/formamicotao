import {PharmacyModel} from "../../models/Pharmacy.model";
import {createStructureForm, createValidationsForm} from "../../shared/utils/forms/useStructureForm";
import {email, required} from "../../shared/utils/forms/utils/validationType";

export const usePharmacistsStructure = (pharmaciesList: PharmacyModel[], edit: boolean = false) => {

    const structurePharmacistsData = createStructureForm([
        {
            data: [
                {
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
                },
                {
                    name: 'phone',
                    type: 'input',
                    label: `Telefono`,
                    dataElement: {
                        type: 'text',
                        placeholder: 'Telefono',
                    },
                    col: {xs: "6", sm: "6", lg: "4", xl: "4"}
                }
            ]
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
            data: [{
                name: 'pharmacies',
                type: 'select',
                label: `Farmacie`,
                dataElement: {
                    type: 'text',
                    placeholder: 'Farmacia',
                },
                defaultValue: {
                    isDefault: true,
                    label: 'Seleziona farmacia',
                    disabled: true,
                },
                multiple: true,
                options: pharmaciesList.map(pharma => (
                    {
                        label: pharma.name,
                        value: pharma.idDocument
                    }
                )),
                col: {xs: "12", sm: "12", lg: "4", xl: "4"}
            }]
        },
    ])

    const validationPharmacistsData = createValidationsForm([
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
                {
                    name: "pharmacies",
                    validations: [
                        {
                            name: required,
                            params: {name: "Farmacie"},
                        },
                    ]
                }
            ]
        }
    ]);
    return {
        structurePharmacistsData, validationPharmacistsData
    }
}
