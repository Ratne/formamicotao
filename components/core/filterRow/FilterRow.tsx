import React, {ReactNode, useState} from 'react';
import InputCustom from "../../../shared/bootstrap/form/input/InputCustom";
import SelectCustom, {OptionsModel} from "../../../shared/bootstrap/form/select/SelectCustom";
import {IconSVG} from "../../../shared/ui/icon/IconSVG";

const FilterRow = ({
                        orderBy,
                        search = '',
                       rightTemplate,
                       filterSearchHandler,
                        setOrderBy,
                       orderList,
                       resultsNumber
                   }: { orderBy: string, setOrderBy: (data: string) => void,search: string, rightTemplate: ReactNode, filterSearchHandler?: (key: string) => void, orderList?: OptionsModel[], resultsNumber: string }) => {
    const searchAction = (data: any) => {
        filterSearchHandler && filterSearchHandler(data)
    }
    return (
        <div className="row filter-row align-items-center">
            {filterSearchHandler && <div className="col-sm-12 col-md-4">
                <InputCustom placeholder="Cerca" name={"search"} value={search} type={"text"}
                             changeValue={searchAction} rightTemplate={<IconSVG icon={'search'} size={"16px"}/>}/>
            </div>}
            {orderList && <div className="col-sm-12 col-md-3">
                <SelectCustom value={orderBy} options={orderList} defaultValue={{label: 'Ordina per', isDefault: true}}
                              changeValue={(data) => setOrderBy(data)} rightTemplate={<IconSVG icon={'filter'} size={"16px"}/>}/>
            </div>}
            <div className="col-sm-12 col-md-auto">
                {resultsNumber}
            </div>
            {rightTemplate && <div className="col-auto ms-auto">
                {rightTemplate}
            </div>}
        </div>
    );
};

export default FilterRow;
