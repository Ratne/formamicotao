import React from 'react';
import {FormElements} from "../../shared/bootstrap/form/FormElements";
import {useForm} from "../../shared/utils/forms/useForm";
import BtnPrimary from "../../shared/bootstrap/button/primary/BtnPrimary";
import {useLoginStructure} from "./useLoginStructure";
import {useRecoverPasswordStructure} from "./useRecoverPasswordStructure";
import {UseFormSubmitModel} from "../../shared/utils/forms/models/UseFormModel";

const RecoverPasswordContainer = ({

                                      recoverHandler,
                                      backHandler
                                  }: {
                                      recoverHandler: (dataForm: any) => void
                                      backHandler: () => void
                                  }
) => {

    const submitHandler: UseFormSubmitModel = () => {
        recoverHandler(dataForm)
    };


    const {structureRecoverPasswordData, validationRecoverPasswordData} = useRecoverPasswordStructure();
    const {
        isSubmit,
        errors,
        submitAction,
        changeValue,
        dataForm,
        setData
    } = useForm(submitHandler, validationRecoverPasswordData);

    return (
        <div className={"login-container mt-xl-5 mt-sm-0"}>
            <div className="fs-4 p-4 bg-light text-center ">LOGO</div>
            <div><h2 className={"text-center"}>Recupera password</h2></div>
            <form className={"mt-4"} onSubmit={submitAction}>
                <FormElements
                    structure={structureRecoverPasswordData}
                    dataForm={dataForm}
                    errors={errors}
                    isSubmit={isSubmit}
                    changeValue={changeValue}
                />
                <a className={"text-secondary pointer"} onClick={backHandler}>Torna al login</a>
                <BtnPrimary className="w-100 justify-content-center mt-5" type="submit">Invia email</BtnPrimary>
            </form>
        </div>
    );
};

export default RecoverPasswordContainer;
