import React from "react";
import {MenuRightProps} from "./models/MenuRightProps.model";
import UserDrop from "./UserDrop";
import PharmaDrop from "./PharmaDrop";
import Link from "next/link";
import {useRouter} from "next/router";
import {usePermissions} from "../../hooks/usePermissions";


const SidebarMenu: React.FC<MenuRightProps> = ({logout, pharmacies, user, idSelectedPharma, setIdSelectedPharma}) => {
    const router = useRouter();
    const {isOwner} = usePermissions(user)
    return (
        <div className="sidebar-menu d-flex flex-column flex-shrink-0 bg-dark">
            <a className="d-flex align-items-center m-3 mb-5 text-decoration-none">
                <span className="fs-4 p-4 bg-light">LOGO</span>
            </a>
            <hr/>
            <ul className="nav nav-pills flex-column mb-auto">
                <li className={`nav-link ${router.pathname === "/" ? "active" : ""}`}>
                    <Link href={'/'}> Tutti i servizi </Link>
                </li>
                {isOwner &&
                    <li className={`nav-link ${router.pathname === "/pharmacies" ? "active" : ""}`}>
                        <Link href={'/pharmacies'}> Amministratore </Link>
                    </li>}
            </ul>
            <PharmaDrop pharmacies={pharmacies}
                        idSelectedPharma={idSelectedPharma}
                        selectPharmaHandler={(idPharma: string) => setIdSelectedPharma(idPharma)}/>
            <hr className={"border-light m-3"}/>
            <UserDrop user={user} logoutHandler={logout}/>


        </div>
    )
}

export default SidebarMenu;
