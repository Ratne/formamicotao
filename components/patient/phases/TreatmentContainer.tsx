import React from 'react';
import Card from "../../../shared/ui/card/Card";
import VerticalTimeline from "../../../shared/ui/verticalTimeline/VerticalTimeline";
import BtnDefault from "../../../shared/bootstrap/button/default/BtnDefault";

const TreatmentContainer = ({
                                selectedPhase,
                                phases,
                                clickHandler,
                                isActiveCompare,
                                treatmentInfo,
                                setIsComparisonVisit
                            }: { isActiveCompare: boolean; setIsComparisonVisit: () => void, selectedPhase?: any, phases: any[], clickHandler: (index: number) => void, treatmentInfo: any }) => {

    return (
        <Card>
            <h3>Trattamento {treatmentInfo?.name || ''}</h3>
            <hr/>
            <div className={'mb-5'}>
                <VerticalTimeline list={phases} clickHandler={clickHandler}
                                  selectedPhase={selectedPhase}/>
            </div>
            <div className={'mt-4'}>
                <BtnDefault icon={'confront'}
                            onClick={setIsComparisonVisit} disabled={!isActiveCompare}>
                                Confronta  visite
                </BtnDefault>
            </div>
        </Card>
    );
};

export default TreatmentContainer;
