import {itemTimeLinesBaseModel} from "../../../shared/ui/verticalTimeline/ItemTimelineModel";

export const listTreatmentLabel: { [key: string]: string } = {
    checkup: 'Check Up',
    phase1: 'Fase 1',
    phase2: 'Fase 2',
    phase3: 'Fase 3',
    maintenance: 'Mantenimento',
}


export const listTreatment: itemTimeLinesBaseModel[] = [
    {
        name: 'checkup',
        label: listTreatmentLabel.checkup
    },
    {
        name: 'phase1',
        label: listTreatmentLabel.phase1
    },
    {
        name: 'phase2',
        label: listTreatmentLabel.phase2
    },
    {
        name: 'phase3',
        label: listTreatmentLabel.phase3
    },
    {
        name: 'maintenance',
        label: listTreatmentLabel.maintenance
    }
]