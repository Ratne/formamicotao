import {itemTimelinesModel} from "../../../shared/ui/verticalTimeline/ItemTimelineModel";
import Tag from "../../../shared/ui/tag/Tag";
import React from "react";
import {listTreatment} from "./listTreatmentName";
import {dateFormatGGmmmYYYY} from "../../../shared/utils/dateUtils";

export const usePhases = (visits: any[]) => {

    const treatments: itemTimelinesModel[] = listTreatment.map((visit, index) => ({
        ...visit,
        date: visits[index] ? dateFormatGGmmmYYYY(visits[index].created_at) : undefined,
        visit: visits[index],
        state: visits[index] ? 'complete' : (index === 0 || visits[index - 1] ? 'inProgress' : 'notComplete'),
        template: !visits[index] && (index === 0 || visits[index - 1]) ? <Tag label={'da completare'}/> : undefined
    }))


    return {
        treatments
    }
}
