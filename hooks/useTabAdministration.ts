import {ItemListTabPillsModel} from "../shared/bootstrap/tabs/TabsModel";
import {NextRouter} from "next/router";

export const useTabAdministration = (router: NextRouter) => {

    const tabList: ItemListTabPillsModel[] = [
        {
            title: "Farmacie",
            link: "/pharmacies"
        },
        {
            title: "Farmacisti",
            link: "/pharmacists"
        },
        {
            title: "Dipendenti",
            link: "/workers"
        }
    ]

    const changeTab = (link: string) => {
        router.push(link);
    }
    return {
        tabList, changeTab
    }
}
