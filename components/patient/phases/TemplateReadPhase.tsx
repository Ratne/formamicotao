import React, {useEffect, useState} from 'react';
import {usePhasesStructureForm} from "./usePhasesStructureForm";
import Label from "../../../shared/bootstrap/form/label/Label";
import {downloadImage} from "../../../firebase/client";
import {IconSVG} from "../../../shared/ui/icon/IconSVG";
import ListFiles from "../../shared/ListFiles";
import ModalCustom from "../../../shared/bootstrap/modal/ModalCustom";
import BtnSecondary from "../../../shared/bootstrap/button/secondary/BtnSecondary";
import BtnPrimary from "../../../shared/bootstrap/button/primary/BtnPrimary";
import DeleteConfirmModal from "../../shared/DeleteConfirmModal";
import {dateFormatGGmmmYYYY} from "../../../shared/utils/dateUtils";

const TemplateReadPhase = ({visit}: { visit: any }) => {
    const list = visit.data;
    const template = visit.type;
    const [images, setImages] = useState<any[]>([])
    const [documents, setDocuments] = useState<any[]>([])
    const [deleteFile, setDeleteFile] = useState<any | undefined>(undefined)
    const {
        structureCheckUpData: checkup,
        structurePhase1Data: phase1,
        structurePhase2Data: phase2,
        structurePhase3Data: phase3,
        structureMaintenanceData: maintenance,
    } = usePhasesStructureForm();
    const downloadImageTest = () => {
        downloadImage(`images/${visit?.idDocument}/images`).then((res: any) => setImages(res))
        downloadImage(`images/${visit?.idDocument}/document`).then((res: any) => setDocuments(res))
    }
    useEffect(() => {
        visit && visit.idDocument && downloadImageTest()
    }, [visit])

    const templateName: any = {
        checkup, phase1, phase2, phase3, maintenance,
    }

    const listCreate = templateName[template].map((item: any) => {
        const colSize = item?.col ? Object.keys(item?.col).map((ele) => `col-${ele}-${item.col[ele]}`).join(' ') : ''
        return list ? {
            label: item.label,
            value: item.name === 'date' ? dateFormatGGmmmYYYY(list[item.name]) : list[item.name],
            col: colSize
        } : []
    })
    const checkValue = (value: any) => {
        return typeof value === "boolean" ? (value ? 'Si' : 'No') : value
    }
    const onDeleteFile = () => {
        console.log(deleteFile)
        closeModalDelete()
    }
    const closeModalDelete = () => {
        setDeleteFile(undefined)
    }


    return (
        <div className={'row maintenance-read'}>
            {listCreate && listCreate.length > 0 && listCreate.map((ele: any, i: number) => (
                <div key={i} className={`mb-3 ${ele.col}`}>
                    <Label>
                        {ele.label}
                    </Label>
                    <div>
                        {checkValue(ele.value)}
                    </div>
                </div>
            ))}

            <div className={'row'}>
                <div className={'col-6'}>
                    <Label>Immagini Caricate</Label>
                    <ListFiles files={images} isImages={true} notInDropzone={true}
                               onDeleteHandler={(file) => setDeleteFile(file)}/>
                </div>
                <div className={'col-6'}>
                    <Label>Documenti Caricati</Label>
                    <ListFiles files={documents} notInDropzone={true} onDeleteHandler={(file) => setDeleteFile(file)}/>
                </div>
            </div>
            {deleteFile && <DeleteConfirmModal data={deleteFile}
                                               closeModalDelete={closeModalDelete}
                                               onConfirm={onDeleteFile}/>}
        </div>
    );
};

export default TemplateReadPhase;
