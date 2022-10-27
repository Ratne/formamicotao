import React from 'react';
import SidebarMenu from "../../header/SidebarMenu";
import {UserLoggedModel} from "../../../models/UserLogged.model";

const AppLayout = ({
                       children,
                       user,
                       pharmacies,
                       logoutHandler,
                       isLogged,
                       idSelectedPharma,
                       setIdSelectedPharma
                   }: {
    children: React.ReactNode,
    user?: UserLoggedModel,
    pharmacies: any[],
    logoutHandler: () => void,
    isLogged?: boolean,
    idSelectedPharma?: string,
    setIdSelectedPharma: (idPharma: string) => void
}) => {
    return (
        <div className={"app-layout"}>
            {isLogged && user &&
                <SidebarMenu pharmacies={pharmacies} user={user} logout={logoutHandler} idSelectedPharma={idSelectedPharma}
                             setIdSelectedPharma={setIdSelectedPharma}/>}
            <div className={"container-fluid p-3 px-4"}>
                {children}
            </div>
        </div>
    );
};

export default AppLayout;
