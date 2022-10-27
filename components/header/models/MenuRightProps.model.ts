import {UserLoggedModel} from "../../../models/UserLogged.model";
import {PharmacyModel} from "../../../models/Pharmacy.model";

export interface MenuRightProps {
    logout: () => void;
    user: UserLoggedModel,
    pharmacies: PharmacyModel[],
    idSelectedPharma?: string
    setIdSelectedPharma: (idPharma: string) => void
}
