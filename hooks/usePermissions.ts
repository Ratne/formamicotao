import {UserLoggedModel} from "../models/UserLogged.model";


export const usePermissions = (user: UserLoggedModel) => {
    const isAdmin = user.role === 'admin';
    const isPharmacist = user.role === 'employees' && user.data.owner;
    const isWorker = user.role === 'employees' && !user.data.owner;
    const isClient = user.role === 'clients';

    return {
        isAdmin,
        isPharmacist,
        isWorker,
        isClient,
        isOwner: isAdmin || isPharmacist
    }
}
