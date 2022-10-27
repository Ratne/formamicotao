import React from 'react';
import Tag from "../../shared/ui/tag/Tag";
import {colorTheme} from "../../shared/colorUtils";

const StateTemplate = ({state, date}: { state: string, date?: string }) => {

    const color: any = {
        chekup: colorTheme.stateChekup,
        fase1: colorTheme.state1,
        fase2: colorTheme.state2,
        fase3: colorTheme.state3,
        mantenimento: colorTheme.stateLast,
    }
    return (
        <div>
            <Tag label={state} bgColor={color[state]}/> <span className={'ms-2'}>{date || ''}</span>
        </div>
    );
};

export default StateTemplate;
