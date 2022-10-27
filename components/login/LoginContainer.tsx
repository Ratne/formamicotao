import React from 'react';
import {FormElements} from "../../shared/bootstrap/form/FormElements";
import {useForm} from "../../shared/utils/forms/useForm";
import BtnPrimary from "../../shared/bootstrap/button/primary/BtnPrimary";
import {useLoginStructure} from "./useLoginStructure";
import {UseFormSubmitModel} from "../../shared/utils/forms/models/UseFormModel";

const LoginContainer = ({

                            loginHandler,
                            goToRecoverPswHandler
                        }: {
                            loginHandler: (dataForm: any) => void,
                            goToRecoverPswHandler: (dataForm: any) => void
                        },
    ) => {

        const submitHandler: UseFormSubmitModel = () => {
            loginHandler(dataForm)
        };


        const {structureLoginData, validationLoginData} = useLoginStructure();
        const {
            isSubmit,
            errors,
            submitAction,
            changeValue,
            dataForm,
            setData
        } = useForm(submitHandler, validationLoginData);

        return (
            <div className={"login-container mt-xl-5 mt-sm-0"}>
                <div className="fs-4 p-4 bg-light text-center ">LOGO</div>
                <div><h2 className={"text-center"}>Login</h2></div>
                <form className={"mt-4"} onSubmit={submitAction}>
                    <FormElements
                        structure={structureLoginData}
                        dataForm={dataForm}
                        errors={errors}
                        isSubmit={isSubmit}
                        changeValue={changeValue}
                    />
                    <a className={"text-secondary pointer"} onClick={goToRecoverPswHandler}>Hai dimenticato la
                        password?</a>
                    <BtnPrimary className="w-100 justify-content-center mt-5" type="submit">Login</BtnPrimary>
                </form>
            </div>
        );
    }
;

export default LoginContainer;
