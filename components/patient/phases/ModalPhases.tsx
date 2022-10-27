import React, {useState} from 'react';
import ModalCustomVH from "../../../shared/bootstrap/modal/ModalCustomVH";
import BtnSecondary from "../../../shared/bootstrap/button/secondary/BtnSecondary";
import BtnPrimary from "../../../shared/bootstrap/button/primary/BtnPrimary";
import CheckupForm from "./listForm/CheckupForm";
import Phase1Form from "./listForm/Phase1Form";
import Phase2Form from "./listForm/Phase2Form";
import Phase3Form from "./listForm/Phase3Form";
import MaintenanceForm from "./listForm/MaintenanceForm";
import {useForm} from "../../../shared/utils/forms/useForm";
import {usePhasesStructureForm} from "./usePhasesStructureForm";
import Dropzone from "../../shared/Dropzone";
import Label from "../../../shared/bootstrap/form/label/Label";
import {usePhasesValidation} from "./usePhasesValidation";

const ModalPhases = ({
                         closeHandler,
                         selectedPhase,
                         selectedVisit,
                         treatmentInfo,
                         submitPhaseHandler
                     }: {
    closeHandler: () => void,
    selectedVisit?: any,
    selectedPhase?: any,
    treatmentInfo: any,
    submitPhaseHandler: (data: any, filesImage: { file: File, selected: boolean }[], filesDocument: { file: File }[]) => void
}) => {

    const [filesImage, setFilesImage] = useState<{ file: File, selected: boolean }[]>([]);
    const onDropImage = (files: File[]) => {
        setFilesImage([...filesImage, ...files.map(ele => ({file: ele, selected: false}))])
    }
    const [filesDocument, setFilesDocument] = useState<{ file: File }[]>([]);
    const onDropDocument = (files: File[]) => {
        setFilesDocument([...filesDocument, ...files.map(ele => ({file: ele}))])
    }

    const submitHandler = () => {
        submitPhaseHandler(dataFormatted, filesImage, filesDocument)
    }

    const {
        validationCheckUpData
    } = usePhasesValidation();

    const validationName: any = {
        checkup: validationCheckUpData,
        phase1: validationCheckUpData,
        phase2: validationCheckUpData,
        phase3: validationCheckUpData,
        maintenance: validationCheckUpData,
    }
    const checkValidation = (name: string) => {
        return validationName[name]
    }

    const {
        structureCheckUpData,
        structurePhase1Data,
        structurePhase2Data,
        structurePhase3Data,
        structureMaintenanceData,
    } = usePhasesStructureForm();

    const {
        dataFormatted,
        changeValue,
        errors,
        isSubmit,
        submitAction,
        setData
    } = useForm(submitHandler, checkValidation(selectedPhase?.name))


    const phases: any = {
        checkup: <CheckupForm data={selectedVisit?.data}
                              structure={structureCheckUpData}
                              dataFormatted={dataFormatted}
                              errors={errors}
                              changeValue={changeValue}
                              isSubmit={isSubmit}
                              setData={setData}
        />,
        phase1: <Phase1Form data={selectedVisit?.data}
                            structure={structurePhase1Data}
                            dataFormatted={dataFormatted}
                            errors={errors}
                            changeValue={changeValue}
                            isSubmit={isSubmit}
                            setData={setData}
        />,
        phase2: <Phase2Form data={selectedVisit?.data}
                            structure={structurePhase2Data}
                            dataFormatted={dataFormatted}
                            errors={errors}
                            changeValue={changeValue}
                            isSubmit={isSubmit}
                            setData={setData}
        />,
        phase3: <Phase3Form data={selectedVisit?.data}
                            structure={structurePhase3Data}
                            dataFormatted={dataFormatted}
                            errors={errors}
                            changeValue={changeValue}
                            isSubmit={isSubmit}
                            setData={setData}
        />,
        maintenance: <MaintenanceForm data={selectedVisit?.data}
                                      structure={structureMaintenanceData}
                                      dataFormatted={dataFormatted}
                                      errors={errors}
                                      changeValue={changeValue}
                                      isSubmit={isSubmit}
                                      setData={setData}
        />,
    }


    const footerTemplate = <>
        <BtnSecondary variant={"secondary-outline"} onClick={closeHandler}>Annulla</BtnSecondary>
        <BtnPrimary onClick={submitAction}>Salva</BtnPrimary>
    </>


    const onDelete = (file: any) => {
        console.log(file)
    }
    return (
        <ModalCustomVH
            className={""}
            title={<div>{treatmentInfo.name} - {selectedPhase?.label}</div>}
            footerTemplate={footerTemplate}
            closeModal={closeHandler}
        >
            {phases[selectedPhase?.name]}
            <div className="row justify-content-between">
                <div className="col-6">
                    <Label>Immagini</Label>
                    <Dropzone selected={[]} files={filesImage} isImages={true} onDrop={onDropImage}
                              onDeleteHandler={onDelete}/>
                </div>
                <div className="col-6">
                    <Label>Documenti</Label>
                    <Dropzone files={filesDocument} onDrop={onDropDocument} onDeleteHandler={onDelete}/>
                </div>
            </div>

        </ModalCustomVH>
    );
};

export default ModalPhases;
