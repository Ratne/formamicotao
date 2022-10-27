import {useState} from "react";
import {arrayObjSort} from "../../shared/utils/sortArray";

export const useFilters = (data: any[], properties: string[] = [], dafaultOrder: string = 'name') => {
    const [search, setSearch] = useState<any>('')
    const [orderBy, setOrderBy] = useState(dafaultOrder);
    const dataMap = data.map(ele => ({...ele, ...ele.data}))
    const filterData = dataMap.filter(ele => (properties.length ? properties : Object.keys(ele)).reduce((acc: boolean, property: string) => {
            return ele[property].toString().toLocaleLowerCase().trim().includes(search.toLocaleLowerCase().trim()) || acc
        }, false)
    )
    const orderData = arrayObjSort(filterData, orderBy)
    return {
        search,
        setSearch,
        orderBy,
        setOrderBy,
        filterData: orderData
    }
}
