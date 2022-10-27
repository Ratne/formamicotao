export const useTreatmentsStructure = (listCheckbox: any[]) => {
    const structureTreatmentsData = [
        {
            type: 'checkbox',
            name: "treatments",
            label: "Seleziona i servizi da attivare/disattivare",
            options: listCheckbox.map(ele => ({
                label: ele.name, value: ele.idDocument
            })),
            dataElement: {
                placeholder: "Inserisci la mail",
                type: 'text',
            },
            col: {xs: "12"},
        },
    ]


    return {
        structureTreatmentsData
    }
}