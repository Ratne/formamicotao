import {PharmacyModel} from "../../models/Pharmacy.model";

export const findPharmaById = (pharmacies: PharmacyModel[], idPharma?: string,) => {
    return pharmacies.find(ele => ele.idDocument === idPharma) || pharmacies[0]
}
