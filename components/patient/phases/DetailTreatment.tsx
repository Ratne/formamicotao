import React from 'react';
import TreatmentContainer from "./TreatmentContainer";
import PhaseContainer from "./PhaseContainer";

const DetailTreatment = ({
                             selectedPhase,
                             selectedVisit,
                             setSelectedPhase,
                             setSelectedVisit,
                             visits,
                             phases,
                             setSelectedPhaseToEdit,
                             treatmentInfo,
                             setIsComparisonVisit
                         }: {selectedVisit: any; setSelectedVisit: (data: any) => void, selectedPhase: any, setIsComparisonVisit: () => void, setSelectedPhase: (treatment: any) => void, visits: any[], phases: any[], setSelectedPhaseToEdit: (phase: any) => void, treatmentInfo: any }) => {
    const maintenanceVisit = visits.filter(ele => ele.type === 'maintenance');
    const selectedPhaseHandler = (index: number) => {
        const p = phases[index]
        setSelectedPhase(p)
        setSelectedVisit(p.visit && p.name !== 'maintenance'? p.visit : undefined)
        !p.visit && p.name !== 'maintenance' && setSelectedPhaseToEdit(true)
    }
    return (
        <div className={"row mt-3 detail-treatment"}>

            <>
                <div className={"col-md-12 col-lg-4 col-xl-4 left"} style={{height: '100%'}}>
                    <TreatmentContainer setIsComparisonVisit={setIsComparisonVisit}
                                        isActiveCompare={visits.length > 1}
                                        phases={phases}
                                        selectedPhase={selectedPhase}
                                        clickHandler={selectedPhaseHandler}
                                        treatmentInfo={treatmentInfo}/>
                </div>
                <div className={"col-md-12 col-lg-8 col-xl-8 right"} style={{minHeight: '200px'}}>
                    <PhaseContainer phase={selectedPhase}
                                    setSelectedVisit={setSelectedVisit}
                                    visit={selectedVisit}
                                    goBackHandler={() => setSelectedVisit(undefined)}
                                    setSelectedPhaseHandler={(phase: any) => setSelectedPhaseToEdit(phase)}
                                    maintenanceVisit={maintenanceVisit}
                                    addVisitMaintenanceHandler={() => setSelectedPhaseToEdit(true)}
                    />

                </div>
            </>

        </div>
    );
};

export default DetailTreatment;
