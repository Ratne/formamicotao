export const useRecoverPasswordStructure = () => {

    const structureRecoverPasswordData = [
        {
            type: 'input',
            name: "email",
            label: "Email",
            dataElement: {
                placeholder: "Inserisci la mail",
                type: 'text',
            },
            col: {xs: "12"},
        },
    ]

    const validationRecoverPasswordData = {
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

    }

    return {
        structureRecoverPasswordData, validationRecoverPasswordData
    }
}