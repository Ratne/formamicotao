import React from "react";
import BtnPrimary from "../../shared/bootstrap/button/primary/BtnPrimary";
import ListPharmacists from "./ListPharmacists";
import FilterRow from "../core/filterRow/FilterRow";
import {UserLoggedModel} from "../../models/UserLogged.model";
import {useFilters} from "../core/useFilters";

const ListPharmacistsContainer: React.FC<any> = ({
                                                     list,
                                                     isWorker,
                                                     newPharmacistHandler,
                                                     newWorkerHandler,
                                                     editPharmacistHandler,
                                                     deletePharmacistHandler
                                                 }: {
    list?: UserLoggedModel[], isWorker?: boolean,
    newPharmacistHandler?: () => void
    newWorkerHandler?: () => void
    editPharmacistHandler: (idPharma: string) => void
    deletePharmacistHandler: (idPharma: string) => void
}) => {
    const {filterData, search, orderBy, setOrderBy, setSearch} = useFilters(list || [])

    return <>
        <FilterRow setOrderBy={setOrderBy} orderBy={orderBy} search={search} filterSearchHandler={setSearch}
                   resultsNumber={filterData.length + '/' + list?.length}
                   orderList={[{label: 'Nome', value: 'name'}, {label: 'Email', value: 'email'}]}
                   rightTemplate={<BtnPrimary
                       onClick={isWorker ? newWorkerHandler : newPharmacistHandler}>{isWorker ? 'Nuovo dipendente' : 'Nuovo Farmacista'} </BtnPrimary>}/>

        {list &&
            <div className={"mt-4"}><ListPharmacists list={filterData} editPharmacistHandler={editPharmacistHandler}
                                                     deletePharmacistHandler={deletePharmacistHandler}/></div>}

    </>
}

export default ListPharmacistsContainer;
