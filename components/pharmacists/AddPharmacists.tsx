import React from "react";
import {FormElements} from "../../shared/bootstrap/form/FormElements";

const AddPharmacists: React.FC<any> = ({
                                           structurePharmacieData,
                                           dataForm,
                                           errors,
                                           changeValue,
                                           isSubmit,
                                           submitActionHandler
                                       }: any) => {

    return <form>
        <FormElements
            structure={structurePharmacieData}
            dataForm={dataForm}
            errors={errors}
            changeValue={changeValue}
            isSubmit={isSubmit}
        />
    </form>
}

export default AddPharmacists;
