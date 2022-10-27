import React, {useEffect, useState} from 'react';
import ModalCustomVH from "../../shared/bootstrap/modal/ModalCustomVH";
import BtnSecondary from "../../shared/bootstrap/button/secondary/BtnSecondary";
import BtnPrimary from "../../shared/bootstrap/button/primary/BtnPrimary";
import {UseFormSubmitModel} from "../../shared/utils/forms/models/UseFormModel";
import {useForm} from "../../shared/utils/forms/useForm";
import {usePatientStructure} from "./usePatientStructure";
import AddPatient from "./AddPatient";
import useProvinces from "../../hooks/useProvinces";

const ModalAddPatient = ({
                             pharmacyId,
                             treatmentTypeId,
                             closeHandler,
                             formData,
                             submitHandler
                         }: {
    closeHandler: () => void, treatmentTypeId: string, pharmacyId: string, formData?: any,
    submitHandler: UseFormSubmitModel
}) => {
    const {provinces} = useProvinces();
    const {
        structurePatientData,
        validationPatientData,
    } = usePatientStructure(!!formData, provinces)
    const {
        dataForm,
        changeValue,
        errors,
        isSubmit,
        submitAction,
        setData
    } = useForm(submitHandler, validationPatientData)


    const footerTemplate = <>
        <BtnSecondary variant={"secondary-outline"} onClick={closeHandler}>Chiudi</BtnSecondary>
        <BtnPrimary onClick={submitAction}>{formData ? 'Modifica Cliente' : 'Aggiungi Paziente'}</BtnPrimary>
    </>

    useEffect(() => {
        formData && setData(formData)
    }, [formData]);

    return (
        <ModalCustomVH
            className={""}
            title={formData ? "Modifica Cliente" : "Nuovo Cliente"}
            footerTemplate={footerTemplate}
            closeModal={closeHandler}
        >
            <AddPatient
                structurePatientData={structurePatientData}
                dataForm={dataForm}
                errors={errors}
                changeValue={changeValue}
                isSubmit={isSubmit}
                submitActionHandler={submitAction}
            ></AddPatient>

        </ModalCustomVH>
    );
};

export default ModalAddPatient;
