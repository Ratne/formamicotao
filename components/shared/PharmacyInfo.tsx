import InfoPharma from "../pharmacies/detail/InfoPharma";
import DetailPharma from "../pharmacies/detail/DetailPharma";
import ParmacistsListCard from "../pharmacies/detail/ParmacistsListCard";
import EmployeeListCard from "../pharmacies/detail/EmployeeListCard";
import {PharmacyModel} from "../../models/Pharmacy.model";
import React from "react";
import {TreatmentModel} from "../../models/Treatment.model";
import PharmaTreatments from "../pharmacies/detail/PharmaTreatments";
import {UseFormSubmitModel} from "../../shared/utils/forms/models/UseFormModel";
import {UserLoggedModel} from "../../models/UserLogged.model";
import {usePermissions} from "../../hooks/usePermissions";

const PharmacyInfo: React.FC<any> = ({
                                         pharmacy,
                                         treatments,
                                         user
                                     }: {
    treatments: TreatmentModel[], pharmacy: PharmacyModel,
    user: UserLoggedModel
}) => {
    const employees = pharmacy?.employees || [];
    const pharmacistsList = employees.filter(ele => ele.data.owner)
    const employeesList = employees.filter(ele => !ele.data.owner)
    const {isAdmin} = usePermissions(user)


    return (
        <div className={"content-page"}>
            <div className={"row"}>
                <div className={"col-md-12 col-lg-4"} style={{minHeight: '200px'}}>
                    <InfoPharma info={pharmacy}/>
                </div>
                <div className={"col-md-12 col-lg-8"} style={{minHeight: '200px'}}>
                    <DetailPharma info={pharmacy}/>
                </div>
            </div>
            <div className={"row mt-3"}>
                <div className={"col-md-12 col-lg-6"} style={{height: '100%'}}>
                    <ParmacistsListCard list={pharmacistsList}/>
                </div>
                <div className={"col-md-12 col-lg-6"} style={{minHeight: '200px'}}>
                    <EmployeeListCard list={employeesList}/>
                </div>
            </div>
            {isAdmin && <div className={"row mt-3"}>
            </div>}
        </div>
    )
}

export default PharmacyInfo;
