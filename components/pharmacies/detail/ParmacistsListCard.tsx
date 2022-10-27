import React from 'react';
import Card from "../../../shared/ui/card/Card";
import ListPharmacists from "../../pharmacists/ListPharmacists";
import {UserLoggedModel} from "../../../models/UserLogged.model";

const ParmacistsListCard = ({list}: { list: UserLoggedModel[] }) => {
    return (
        <Card>
            <h3>Lista farmacisti</h3>
            <ListPharmacists list={list} noAction={true}/>
        </Card>
    );
};

export default ParmacistsListCard;
