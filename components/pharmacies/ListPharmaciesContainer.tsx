import React from "react";
import BtnPrimary from "../../shared/bootstrap/button/primary/BtnPrimary";
import ListParmacies from "./ListParmacies";
import {PharmacyModel} from "../../models/Pharmacy.model";
import FilterRow from "../core/filterRow/FilterRow";
import {useFilters} from "../core/useFilters";
import {UserLoggedModel} from "../../models/UserLogged.model";

const ListPharmaciesContainer: React.FC<any> = ({
                                                    list,
                                                    newPharmaHandler, user
                                                }: { list?: PharmacyModel[], newPharmaHandler: () => void, user: UserLoggedModel }) => {
    const {filterData, search, orderBy, setOrderBy, setSearch} = useFilters(list || [])
    return <>
        <FilterRow setOrderBy={setOrderBy} orderBy={orderBy} search={search} filterSearchHandler={setSearch}
                   resultsNumber={filterData.length + '/' + list?.length}
                   orderList={[{label: 'Nome', value: 'name'}, {label: 'Indirizzo', value: 'address'}]}
                   rightTemplate={user?.role === 'admin' &&
                       <BtnPrimary onClick={newPharmaHandler}>Nuova Farmacia</BtnPrimary>}/>

        {list && <ListParmacies list={filterData}/>}

    </>
}

export default ListPharmaciesContainer;
