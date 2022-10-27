import React, {useEffect, useState} from 'react';
import Card from "../../../shared/ui/card/Card";
import Tag from "../../../shared/ui/tag/Tag";
import IconBtn from "../../../shared/ui/icon/IconBtn";
import TemplateReadPhase from "./TemplateReadPhase";
import {colorTheme} from "../../../shared/colorUtils";
import NoVisitSelected from "../../shared/NoVisitSelected";
import MaintenanceContainer from "./maintenance/MaintenanceContainer";
import BackBtn from "../../shared/BackBtn";

const PhaseContainer = ({
                            phase,
                            visit,
                            goBackHandler,
                            setSelectedVisit,
                            setSelectedPhaseHandler,
                            maintenanceVisit, addVisitMaintenanceHandler
                        }: { visit: any, setSelectedVisit: (data: any) => void, phase: any, setSelectedPhaseHandler: (phase: any) => void, goBackHandler: () => void, maintenanceVisit: any[], addVisitMaintenanceHandler: (index: number) => void }) => {

    return (
        <Card>
            {phase ?
                <>
                    <div className={'d-flex justify-content-between'}>
                        <div className={'d-flex'}>
                            <h3>
                                {goBackHandler && phase.name === 'maintenance' && visit  &&
                                <BackBtn goBackHandler={goBackHandler}/>}
                                <span className={'me-3'}>{phase.label} </span>
                                {(!phase.template && phase.date && phase.name !== 'maintenance') ?
                                    <Tag label={'Completato'} bgColor={colorTheme.primary}/> : phase.template}
                            </h3>
                            {phase.name !== 'maintenance' && <span className={'ms-3'}>il {phase?.date}</span>}
                        </div>
                        {visit &&
                            <IconBtn clickHandler={() => setSelectedPhaseHandler(phase)} icon={'edit'} size={'18px'}
                                     tintColor={"#fff"}/>}
                    </div>
                    <hr/>

                    {phase.name === 'maintenance' && !visit ? <MaintenanceContainer setVisit={setSelectedVisit}  maintenanceVisit={maintenanceVisit}
                                                                         addVisitMaintenanceHandler={addVisitMaintenanceHandler}/> :
                        (visit && <TemplateReadPhase visit={visit} />)}


                </>
                :
                <NoVisitSelected/>}
        </Card>
    );
};

export default PhaseContainer;
