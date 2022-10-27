import {PharmacyModel} from "../../models/Pharmacy.model";
import React from "react";
import PharmacyInfo from "./PharmacyInfo";
import EmptyCardNoData from "./EmptyCardNoData";
import {TreatmentModel} from "../../models/Treatment.model";
import {UserLoggedModel} from "../../models/UserLogged.model";

const PharmacyDetails: React.FC<any> = ({
                                            treatments,
                                            pharmacy,
                                            loadData,
                                            user
                                        }: { treatments: TreatmentModel[], pharmacy: PharmacyModel, loadData?: boolean, user: UserLoggedModel }) => {
    return (
        <>
            {loadData === undefined &&
                <EmptyCardNoData/>}
            {loadData === false && <div>Caricamento dati farmacia fallito, contattare amministratore</div>}
            {pharmacy && <PharmacyInfo treatments={treatments} pharmacy={pharmacy} user={user}/>}
        </>
    )
}

export default PharmacyDetails;
