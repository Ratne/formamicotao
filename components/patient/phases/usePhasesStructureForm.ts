import {createStructureForm} from "../../../shared/utils/forms/useStructureForm";
import {getArrayByNumber} from "../../../shared/utils/arrayUtils";

export const usePhasesStructureForm = () => {

    const structureCheckUpData = createStructureForm([
        {
            name: 'note',
            type: 'textarea',
            label: `Note dell'appuntamento e del trattamento, compresi i prodotti acquistati`,
            dataElement: {
                type: 'text',
                placeholder: 'Inserisci Note',
            },
            col: {xs: "12", sm: "12", lg: "12", xl: "12"}
        },
        {
            name: 'date',
            type: 'input',
            label: `Data del primo controllo`,
            dataElement: {
                type: 'date',
                placeholder: 'Inserisci Data',
            },
            col: {xs: "8", sm: "8", lg: "8", xl: "8"}
        },
        {
            name: 'hours',
            type: 'select',
            label: `Ora`,
            defaultValue: {
                isDefault: true,
                label: 'Seleziona ora',
                disabled: true,
            },
            multiple: false,
            options: getArrayByNumber(24).map(ele => ({label: ele, value: ele})),
            col: {xs: "2", sm: "2", lg: "2", xl: "2"}
        },{
            name: 'minutes',
            type: 'select',
            label: 'Minuti',
            defaultValue: {
                isDefault: true,
                label: 'Seleziona minuti',
                disabled: true,
            },
            multiple: false,
            options: [
                {label: '0', value: '0'},
                {label: '15', value: '15'},
                {label: '30', value: '30'},
                {label: '45', value: '45'},
            ],
            col: {xs: "2", sm: "2", lg: "2", xl: "2"}
        },
        {
            name: 'purchased',
            type: 'radio',
            label: `Ha acquistato?`,
            dataElement: {
                type: 'text',
                format: 'boolean',
            },
            options: [
                {label: 'Si', value: true},
                {label: 'No (farà solo analisi di secondo livello)', value: false}
            ],
            col: {xs: "12", sm: "12", lg: "4", xl: "4"}
        },

    ])
    const structurePhase1Data = createStructureForm([
        {
            name: 'date',
            type: 'input',
            label: `Data del Secondo controllo`,
            dataElement: {
                type: 'date',
                placeholder: 'Inserisci Data',
            },
            col: {xs: "8", sm: "8", lg: "8", xl: "8"}
        },
        {
            name: 'hours',
            type: 'select',
            label: `Ora`,
            defaultValue: {
                isDefault: true,
                label: 'Seleziona ora',
                disabled: true,
            },
            multiple: false,
            options: getArrayByNumber(24).map(ele => ({label: ele, value: ele})),
            col: {xs: "2", sm: "2", lg: "2", xl: "2"}
        },
        {
            name: 'minutes',
            type: 'select',
            label: 'Minuti',
            defaultValue: {
                isDefault: true,
                label: 'Seleziona minuti',
                disabled: true,
            },
            multiple: false,
            options: [
                {label: '0', value: '0'},
                {label: '15', value: '15'},
                {label: '30', value: '30'},
                {label: '45', value: '45'},
            ],
            col: {xs: "2", sm: "2", lg: "2", xl: "2"}
        },
        {
            name: 'note',
            type: 'textarea',
            label: `Note dell'appuntamento e del trattamento, compresi i prodotti acquistati`,
            dataElement: {
                type: 'text',
                placeholder: 'Inserisci Note',
            },
            col: {xs: "12", sm: "12", lg: "12", xl: "12"}
        },
        {
            name: 'purchased',
            type: 'radio',
            label: `Ha acquistato?`,
            dataElement: {
                type: 'text',
                format: 'boolean',

            },
            options: [
                {label: 'Si', value: true},
                {label: 'No', value: false}
            ],
            col: {xs: "12", sm: "12", lg: 4, xl: "4"}
        }
    ])
    const structurePhase2Data = createStructureForm([
        {
            name: 'date',
            type: 'input',
            label: `Data del Terzo Controllo`,
            dataElement: {
                type: 'date',
                placeholder: 'Inserisci Data',
            },
            col: {xs: "8", sm: "8", lg: "8", xl: "8"}
        },
        ,
        {
            name: 'hours',
            type: 'select',
            label: `Ora`,
            defaultValue: {
                isDefault: true,
                label: 'Seleziona ora',
                disabled: true,
            },
            multiple: false,
            options: getArrayByNumber(24).map(ele => ({label: ele, value: ele})),
            col: {xs: "2", sm: "2", lg: "2", xl: "2"}
        },
        {
            name: 'minutes',
            type: 'select',
            label: 'Minuti',
            defaultValue: {
                isDefault: true,
                label: 'Seleziona minuti',
                disabled: true,
            },
            multiple: false,
            options: [
                {label: '0', value: '0'},
                {label: '15', value: '15'},
                {label: '30', value: '30'},
                {label: '45', value: '45'},
            ],
            col: {xs: "2", sm: "2", lg: "2", xl: "2"}
        },
        {
            name: 'note',
            type: 'textarea',
            label: `Note dell'appuntamento e del trattamento, compresi i prodotti acquistati`,
            dataElement: {
                type: 'text',
                placeholder: 'Inserisci Note',
            },
            col: {xs: "12", sm: "12", lg: "12", xl: "12"}
        },
        {
            name: 'purchased',
            type: 'radio',
            label: `Ha acquistato?`,
            dataElement: {
                type: 'text',
                format: 'boolean',

            },
            options: [
                {label: 'Si', value: true},
                {label: 'No', value: false}
            ],
            col: {xs: "12", sm: "12", lg: "4", xl: "4"}
        }
    ])
    const structurePhase3Data = createStructureForm([
        {
            name: 'date',
            type: 'input',
            label: `Data del Mantenimento Capelli`,
            dataElement: {
                type: 'date',
                placeholder: 'Inserisci Data',
            },
            col: {xs: "8", sm: "8", lg: "8", xl: "8"}
        },
        {
            name: 'hours',
            type: 'select',
            label: `Ora`,
            defaultValue: {
                isDefault: true,
                label: 'Seleziona ora',
                disabled: true,
            },
            multiple: false,
            options: getArrayByNumber(24).map(ele => ({label: ele, value: ele})),
            col: {xs: "2", sm: "2", lg: "2", xl: "2"}
        },
        {
            name: 'minutes',
            type: 'select',
            label: 'Minuti',
            defaultValue: {
                isDefault: true,
                label: 'Seleziona minuti',
                disabled: true,
            },
            multiple: false,
            options: [
                {label: '0', value: '0'},
                {label: '15', value: '15'},
                {label: '30', value: '30'},
                {label: '45', value: '45'},
            ],
            col: {xs: "2", sm: "2", lg: "2", xl: "2"}
        },
        {
            name: 'note',
            type: 'textarea',
            label: `Note dell'appuntamento e del trattamento, compresi i prodotti acquistati`,
            dataElement: {
                type: 'text',
                placeholder: 'Inserisci Note',
            },
            col: {xs: "12", sm: "12", lg: "12", xl: "12"}
        },
        {
            name: 'purchased',
            type: 'radio',
            label: `Ha acquistato?`,
            dataElement: {
                type: 'text',
                format: 'boolean',
            },
            options: [
                {label: 'Si', value: true},
                {label: 'No', value: false}
            ],
            col: {xs: "12", sm: "12", lg: "4", xl: "4"}
        },
        {
            name: 'coupon',
            type: 'radio',
            label: `Se il cliente è nel METODO, hai preso Appuntamento Telefonico per offerta tra circa 20 giorni?`,
            dataElement: {
                type: 'text',
                format: 'boolean',

            },
            options: [
                {label: 'Si', value: true},
                {label: 'No', value: false}
            ],
            col: {xs: "12", sm: "12", lg: "8", xl: "8"}
        },
        {
            name: 'offer',
            type: 'select',
            label: `Offerta da proporre`,
            dataElement: {
                type: 'text',
                placeholder: 'Inserisci Offerta',
            },
            defaultValue: {
                isDefault: true,
                label: 'Seleziona offerta da proporre',
                disabled: true,
            },
            multiple: false,
            options: [
                {label: 'Demo1', value: '1'},
                {label: 'Demo2', value: '2'},
                {label: 'Demo3', value: '3'},
            ],
            /*todo inserire array offerte*/
            col: {xs: "12", sm: "12", lg: "4", xl: "4"}
        },

    ])
    const structureMaintenanceData = createStructureForm([
        {
            name: 'date',
            type: 'input',
            label: `Data del Mantenimento Capelli`,
            dataElement: {
                type: 'date',
                placeholder: 'Data del Mantenimento Capelli',
            },
            col: {xs: "8", sm: "8", lg: "8", xl: "8"}
        },
        {
            name: 'hours',
            type: 'select',
            label: `Ora`,
            defaultValue: {
                isDefault: true,
                label: 'Seleziona ora',
                disabled: true,
            },
            multiple: false,
            options: getArrayByNumber(24).map(ele => ({label: ele, value: ele})),
            col: {xs: "2", sm: "2", lg: "2", xl: "2"}
        },
        {
            name: 'minutes',
            type: 'select',
            label: 'Minuti',
            defaultValue: {
                isDefault: true,
                label: 'Seleziona minuti',
                disabled: true,
            },
            multiple: false,
            options: [
                {label: '0', value: '0'},
                {label: '15', value: '15'},
                {label: '30', value: '30'},
                {label: '45', value: '45'},
            ],
            col: {xs: "2", sm: "2", lg: "2", xl: "2"}
        },
        {
            name: 'note',
            type: 'textarea',
            label: `Note dell'appuntamento e del trattamento, compresi i prodotti acquistati`,
            dataElement: {
                type: 'text',
                placeholder: 'Note dell\'appuntamento e del trattamento, compresi i prodotti acquistati',
            },
            col: {xs: "12", sm: "12", lg: "12", xl: "12"}
        },
        {
            name: 'purchased',
            type: 'radio',
            label: `Ha acquistato?`,
            dataElement: {
                type: 'text',
                placeholder: 'Ha acquistato?',
                format: 'boolean',

            },
            options: [
                {label: 'Si (barrare anche quando è abbonato)', value: true},
                {label: 'No (solo analisi secondo livello)', value: false}
            ],
            col: {xs: "12", sm: "12", lg: "4", xl: "4"}
        },
        {
            name: 'coupon',
            type: 'radio',
            label: `Se il cliente è nel METODO, hai preso Appuntamento Telefonico per offerta tra circa 20 giorni?`,
            dataElement: {
                type: 'text',
                placeholder: 'Se il cliente è nel METODO, hai preso Appuntamento Telefonico per offerta tra circa 20 giorni?',
                format: 'boolean',

            },
            options: [
                {label: 'Si', value: true},
                {label: 'No', value: false}
            ],
            col: {xs: "12", sm: "12", lg: "8", xl: "8"}
        },
        {
            name: 'offer',
            type: 'select',
            label: `Offerta da proporre`,
            dataElement: {
                type: 'text',
                placeholder: 'Offerta da proporre',
            },
            defaultValue: {
                isDefault: true,
                label: 'Seleziona offerta da proporre',
                disabled: true,
            },
            multiple: true,
            options: [],/*todo inserire array offerte*/
            col: {xs: "12", sm: "12", lg: "4", xl: "4"}
        },

    ])


    return {
        structureCheckUpData,
        structurePhase1Data,
        structurePhase2Data,
        structurePhase3Data,
        structureMaintenanceData,
    }
}
