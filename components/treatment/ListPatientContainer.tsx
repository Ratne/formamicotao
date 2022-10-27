import React from "react";
import BtnPrimary from "../../shared/bootstrap/button/primary/BtnPrimary";
import FilterRow from "../core/filterRow/FilterRow";
import ListPatient from "./ListPatient";
import Card from "../../shared/ui/card/Card";
import {useFilters} from "../core/useFilters";

const ListPatientContainer: React.FC<any> = ({
                                                 idTreatment,
                                                 list,
                                                 newPatientHandler
                                             }: { list?: any[], idTreatment: string; newPatientHandler: () => void }) => {

    const {filterData, search, orderBy, setOrderBy, setSearch} = useFilters(list || [])
    return <>
        <Card>
            <FilterRow setOrderBy={setOrderBy} orderBy={orderBy} search={search} filterSearchHandler={setSearch}
                       resultsNumber={filterData.length+'/'+list?.length}
                       orderList={[{label: 'Nome', value: 'name'}, {label: 'Cognome', value: 'surname'}]}
                       rightTemplate={<BtnPrimary onClick={newPatientHandler}>Nuovo Cliente</BtnPrimary>}/>

            {list && <ListPatient idTreatment={idTreatment} list={filterData}/>}
        </Card>

    </>
}

export default ListPatientContainer;
