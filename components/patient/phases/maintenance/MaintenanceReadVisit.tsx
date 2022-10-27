import React from 'react';
import TemplateReadPhase from "../TemplateReadPhase";
import BackBtn from "../../../shared/BackBtn";

const MaintenanceReadVisit = ({goBackHandler, visit}: { goBackHandler: () => void, visit: any }) => {
    return (
        <>
            <div className="row pb-3">
                <div className="col-12">
                    <BackBtn goBackHandler={goBackHandler}/>
                </div>
            </div>
            <TemplateReadPhase visit={visit}/>

        </>

    );
};

export default MaintenanceReadVisit;
