import React, {useState} from 'react';
import ModalCustomVH from "../../shared/bootstrap/modal/ModalCustomVH";
import AddPharmacy from "./AddPharmacy";
import BtnSecondary from "../../shared/bootstrap/button/secondary/BtnSecondary";
import BtnPrimary from "../../shared/bootstrap/button/primary/BtnPrimary";
import {UseFormSubmitModel} from "../../shared/utils/forms/models/UseFormModel";
import {usePharmacieStructure} from "./usePharmacieStructure";
import {useForm} from "../../shared/utils/forms/useForm";

const ModalAddPharmacie = ({
                               closeHandler,
                               submitHandler
                           }: { closeHandler: () => void, submitHandler: UseFormSubmitModel }) => {


    const {
        structurePharmacieData,
        validationPharmacieData
    } = usePharmacieStructure()
    const {dataForm, changeValue, errors, isSubmit, submitAction} = useForm(submitHandler, validationPharmacieData)


    const footerTemplate = <>
        <BtnSecondary variant={"secondary-outline"} onClick={closeHandler}>Chiudi</BtnSecondary>
        <BtnPrimary onClick={submitAction}>Aggiungi Farmacia</BtnPrimary>
    </>
    return (
        <ModalCustomVH
            className={""}
            title={"Nuova Farmacia"}
            footerTemplate={footerTemplate}
            closeModal={closeHandler}
        >
            <AddPharmacy
                structurePharmacieData={structurePharmacieData}
                dataForm={dataForm}
                errors={errors}
                changeValue={changeValue}
                isSubmit={isSubmit}
                submitActionHandler={submitAction}
            ></AddPharmacy>

        </ModalCustomVH>
    );
};

export default ModalAddPharmacie;
