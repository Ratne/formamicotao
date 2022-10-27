import React from 'react';
import UserAvatar from "../../shared/ui/userAvatar/UserAvatar";
import Dropdown from "../../shared/bootstrap/dropdown/Dropdown";


const UserDrop = ({user, logoutHandler, goToProfileHandler}: {
    user: any,
    logoutHandler: () => void
    goToProfileHandler?: () => void
}) => {
    const templateTitle = <>
        <UserAvatar user={`${user.name} ${user.surname}`}/>
        <span className={"text-wrap "}>{user.name} {user.surname}</span>
    </>

    const listDrop = [
        {
            name: "profile",
            title: "Profilo",
            action: "profile"
        },
        {
            name: "logout",
            title: "Logout",
            hasDivider: true,
            action: "logout"
        }
    ]

    const onClickItemDrop = (action: string) => {
        const actionList: any = {
            logout: logoutHandler(),
            profile: goToProfileHandler && goToProfileHandler()
        }
        return actionList[action] && actionList[action]()
    }
    return (
        <div className={"m-3 mb-5"}>
            <Dropdown itemTitle={templateTitle} list={listDrop} onClickHandler={onClickItemDrop}/>;
        </div>
    )
};

export default UserDrop;
