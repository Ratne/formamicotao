import React, {useEffect} from 'react';
import ModalCustomVH from "../../shared/bootstrap/modal/ModalCustomVH";
import BtnSecondary from "../../shared/bootstrap/button/secondary/BtnSecondary";
import BtnPrimary from "../../shared/bootstrap/button/primary/BtnPrimary";
import {UseFormSubmitModel} from "../../shared/utils/forms/models/UseFormModel";
import {usePharmacistsStructure} from "./usePharmacistsStructure";
import {useForm} from "../../shared/utils/forms/useForm";
import {PharmacyModel} from "../../models/Pharmacy.model";
import AddPharmacists from "./AddPharmacists";
import {copyObject, isFull} from "../../shared/utils/objUtils";

const ModalAddPharmacists = ({
                                 auth,
                                 closeHandler,
                                 pharmaciesList,
                                 isWorker,
                                 formData,
                                 submitHandler
                             }: { auth: any, isWorker?: boolean, closeHandler: () => void, pharmaciesList: PharmacyModel[], formData: any, submitHandler: UseFormSubmitModel }) => {


    const {
        structurePharmacistsData,
        validationPharmacistsData,
    } = usePharmacistsStructure(pharmaciesList, !!formData.id)
    const {
        changeValue,
        errors,
        isSubmit,
        submitAction,
        setData,
        dataForm
    } = useForm(submitHandler, validationPharmacistsData)

  /*  const submitHandler: UseFormSubmitModel = (event, data, dataNotFormatted) => {
        const copyData = copyObject(data)
        delete copyData.data

        isWorker ?
            workersCall(data).then(res => {
                sendPasswordResetEmail(auth, data.email).then(res => console.log(res));
                closeModalAdd()
            }) :
            pharmacistCall(data).then(res => {
                sendPasswordResetEmail(auth, data.email).then(res => console.log(res));
                closeModalAdd()
            });
    }*/
    const createTitle = () => {
        const pre = isFull(formData) ? 'Modifica' : 'Nuovo';
        const next = isWorker ? "Dipendente" : "Farmacista";
        return `${pre} ${next}`
    }
    const footerTemplate = <>
        <BtnSecondary variant={"secondary-outline"} onClick={closeHandler}>Chiudi</BtnSecondary>
        <BtnPrimary onClick={submitAction}>{createTitle()}</BtnPrimary>
    </>

    useEffect(() => {
        formData && setData({...formData})
    }, [formData]);

    return (
        <ModalCustomVH
            className={""}
            title={createTitle()}
            footerTemplate={footerTemplate}
            closeModal={closeHandler}
        >
            <AddPharmacists
                structurePharmacieData={structurePharmacistsData}
                dataForm={dataForm}
                errors={errors}
                changeValue={changeValue}
                isSubmit={isSubmit}
                submitActionHandler={submitAction}
            ></AddPharmacists>

        </ModalCustomVH>
    );
};

export default ModalAddPharmacists;
