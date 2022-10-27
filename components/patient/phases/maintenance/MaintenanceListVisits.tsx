import React from 'react';
import BtnPrimary from "../../../../shared/bootstrap/button/primary/BtnPrimary";
import {dateFormatGGmmmYYYY} from "../../../../shared/utils/dateUtils";
import {IconSVG} from "../../../../shared/ui/icon/IconSVG";
import IconBtn from "../../../../shared/ui/icon/IconBtn";

const MaintenanceListVisits = ({
                                   maintenanceVisit,
                                   addVisitMaintenanceHandler,
                                   clickVisitHandler
                               }: {
    maintenanceVisit: any[],
    addVisitMaintenanceHandler: (index: number) => void,
    clickVisitHandler: (visit: any) => void
}) => {

    return (
        <>
            <div className={'maintenance-container'}>
                {maintenanceVisit?.map((ele: any, i: number) =>
                    <div className={'maintenance-visit-item'} key={i} onClick={() => clickVisitHandler(ele)}>
                        <span>Visita di mantenimento<span
                            className={'ms-3'}>del {dateFormatGGmmmYYYY(ele?.created_at)} </span></span>
                        <div className={'ms-auto'}><IconBtn clickHandler={() => null}
                                                            icon={'arrow-right'} size={'18px'}
                                                            tintColor={"#fff"}/></div>
                    </div>
                )}

            </div>
            <div className="row justify-content-end mt-5">
                <div className="col-auto">
                    <BtnPrimary onClick={() => addVisitMaintenanceHandler(1)}>Nuova visita</BtnPrimary>
                </div>
            </div>

        </>
    );
};

export default MaintenanceListVisits;
