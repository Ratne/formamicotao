export const usePharmacieStructure = () => {

    const structurePharmacieData = [
        {
            name: 'name',
            type: 'input',
            label: `Nome`,
            dataElement: {
                type: 'text',
                placeholder: 'Nome',
            },
            col: {xs: "12", sm: "12", lg: "8", xl: "8"}
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
            type: 'input',
            label: `Provincia`,
            dataElement: {
                type: 'text',
                placeholder: 'Provincia',
            },
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
            name: 'email',
            type: 'input',
            label: `E-mail`,
            dataElement: {
                type: 'text',
                placeholder: 'E-mail',
            },
            col: {xs: "6", sm: "6", lg: "6", xl: "6"}
        },

    ]

    const validationPharmacieData = {
        email: {
            required: {
                params: {
                    name: "Email",
                },
            },
            email: {
                params: {
                    name: "Email",
                },
            },
        },
        name: {
            required: {
                params: {
                    name: "Nome",
                },
            },
        }
    }

    return {
        structurePharmacieData, validationPharmacieData
    }
}