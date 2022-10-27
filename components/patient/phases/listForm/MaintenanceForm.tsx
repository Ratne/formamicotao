import React, {useEffect} from "react";
import {FormElements} from "../../../../shared/bootstrap/form/FormElements";
import {useForm} from "../../../../shared/utils/forms/useForm";
import {UseFormSubmitModel} from "../../../../shared/utils/forms/models/UseFormModel";
import {usePhasesStructureForm} from "../usePhasesStructureForm";

const MaintenanceForm: React.FC<any> = ({
                                            data,
                                            structure,
                                            dataFormatted,
                                            errors,
                                            changeValue,
                                            isSubmit,
                                            setData
                                        }: any) => {


    useEffect(() => {
        data && setData(data)
    }, [data]);


    return <form>
        <FormElements
            structure={structure}
            dataForm={dataFormatted}
            errors={errors}
            changeValue={changeValue}
            isSubmit={isSubmit}
        />
    </form>
}

export default MaintenanceForm;
