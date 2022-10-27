import React from 'react';
import Card from "../../../shared/ui/card/Card";
import ListPharmacists from "../../pharmacists/ListPharmacists";

const EmployeeListCard = ({list}: { list: any[] }) => {
    return (
        <Card>
            <h3>Lista dipendenti</h3>
            <ListPharmacists list={list} noAction={true}/>
        </Card>
    );
};

export default EmployeeListCard;
