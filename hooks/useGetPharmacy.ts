import {useEffect, useState} from "react";
import {PharmacyModel} from "../models/Pharmacy.model";

export default function (idDocument?: string) {
    const [pharmacy, setPharmacy] = useState<PharmacyModel | undefined>(undefined);
    const [loadData, setLoadData] = useState<boolean | undefined>(undefined);

    return {
        loadData,
        pharmacy
    }
}
