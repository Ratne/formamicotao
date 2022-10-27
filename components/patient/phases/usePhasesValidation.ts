export const usePhasesValidation = () => {

    const validationCheckUpData = {
        purchased: {
            required: {
                params: {
                    name: "Ha acquistato",
                },
            },
        },
    }

    const validationPhase1Data = {
        purchased: {
            required: {
                params: {
                    name: "Ha acquistato",
                },
            },
        },
    }
    const validationPhase2Data = {
        purchased: {
            required: {
                params: {
                    name: "Ha acquistato",
                },
            },
        },
    }
    const validationPhase3Data = {
        purchased: {
            required: {
                params: {
                    name: "Ha acquistato",
                },
            },
        },
        coupon: {
            required: {
                params: {
                    name: "Hai preso Appuntamento Telefonico",
                },
            },
        },
    }
    const validationMaintenanceData = {
        purchased: {
            required: {
                params: {
                    name: "Ha acquistato",
                },
            },
        },
    }


    return {
        validationCheckUpData,
        validationPhase1Data,
        validationPhase2Data,
        validationPhase3Data,
        validationMaintenanceData,
    }
}
