import React, {useEffect} from 'react';
import Card from "../../../shared/ui/card/Card";
import {FormElements} from "../../../shared/bootstrap/form/FormElements";
import {useForm} from "../../../shared/utils/forms/useForm";
import {useTreatmentsStructure} from "./useTreatmentsStructure";
import {UseFormSubmitModel} from "../../../shared/utils/forms/models/UseFormModel";
import BtnPrimary from "../../../shared/bootstrap/button/primary/BtnPrimary";

const PharmaTreatments = ({
                              treatmentsList,
                              treatmentsActive,
                              submitHandler
                          }: { treatmentsList: any[], treatmentsActive: any[], submitHandler: UseFormSubmitModel }) => {


    const {structureTreatmentsData} = useTreatmentsStructure(treatmentsList);
    const {
        isSubmit,
        errors,
        submitAction,
        changeValue,
        dataForm,
        setData,
        dataFormatted
    } = useForm(submitHandler);

    useEffect(() => {
        setData({
            treatments: treatmentsActive.map(ele => (ele.idDocument))
        })
    }, []);

    return (
        <Card>
            <h3>Servizi Attivi</h3>
            <FormElements
                structure={structureTreatmentsData}
                dataForm={dataFormatted}
                errors={errors}
                isSubmit={isSubmit}
                changeValue={changeValue}
            />
            <div className="row justify-content-end">
                <div className="col-auto">
                    <BtnPrimary onClick={submitAction}>Salva</BtnPrimary>
                </div>
            </div>
        </Card>
    );
};

export default PharmaTreatments;
