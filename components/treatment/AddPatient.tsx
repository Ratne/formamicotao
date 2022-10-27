import React from "react";
import {FormElements} from "../../shared/bootstrap/form/FormElements";

const AddPatient: React.FC<any> = ({
                                       structurePatientData,
                                       dataForm,
                                       errors,
                                       changeValue,
                                       isSubmit,
                                       submitActionHandler
                                   }: any) => {

    return <form>
        <FormElements
            structure={structurePatientData}
            dataForm={dataForm}
            errors={errors}
            changeValue={changeValue}
            isSubmit={isSubmit}
        />
    </form>
}

export default AddPatient;
