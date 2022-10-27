import React from 'react';
import MaintenanceListVisits from "./MaintenanceListVisits";

const ManteinanceContainer = ({
                                 maintenanceVisit, addVisitMaintenanceHandler, setVisit
                             }: { maintenanceVisit: any[], setVisit: (data: any) => void, addVisitMaintenanceHandler: (index: number) => void }) => {

    return (
                        <MaintenanceListVisits maintenanceVisit={maintenanceVisit}
                                       addVisitMaintenanceHandler={addVisitMaintenanceHandler}
                                       clickVisitHandler={(visit) => setVisit(visit)}/>
    );
};

export default ManteinanceContainer;
