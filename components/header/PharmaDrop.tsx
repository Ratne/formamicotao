import React from 'react';
import UserAvatar from "../../shared/ui/userAvatar/UserAvatar";
import {IconSVG} from "../../shared/ui/icon/IconSVG";
import {PharmacyModel} from "../../models/Pharmacy.model";
import {findPharmaById} from "../utils/pharmaUtils";
import Dropdown from "../../shared/bootstrap/dropdown/Dropdown";

const PharmaDrop = ({
                        pharmacies,
                        idSelectedPharma,
                        selectPharmaHandler
                    }: {
    pharmacies: PharmacyModel[],
    idSelectedPharma?: string,
    selectPharmaHandler: (pharma: string) => void
}) => {


    const selectedPharma: PharmacyModel = findPharmaById(pharmacies, idSelectedPharma)

    const templateTitle = <>
        <IconSVG icon={'pharma'} className={"me-2"}/>
        <span className={"text-wrap "} style={{minWidth: "149px"}}>{selectedPharma?.name}</span>
    </>

    const listDrop = pharmacies.map(ele => {
        return {
            id: ele.idDocument,
            title: ele.name,
            action: "goToPharma"
        }
    })

    const onClickItemDrop = (action: string, id?: string) => {
        const actionList: any = {
            goToPharma: id && selectPharmaHandler(id),
        }
        return actionList[action] && actionList[action]()
    }
    return (
        <div className={"m-3 mb-0"}>
            <Dropdown itemTitle={templateTitle} list={listDrop} onClickHandler={onClickItemDrop}/>;
        </div>
    )
};

export default PharmaDrop;
