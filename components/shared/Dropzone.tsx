import {useDropzone} from "react-dropzone";
import React, {useState} from "react";
import {IconSVG} from "../../shared/ui/icon/IconSVG";
import {colorTheme} from "../../shared/colorUtils";
import ListFiles from "./ListFiles";

interface DropZoneProps {
    selected?: any[],
    files: { file: any, selected?: boolean }[],
    onDrop: (files: File[]) => void,
    isImages?: boolean,
    onDeleteHandler?: (file: any) => void
}


const Dropzone: React.FC<DropZoneProps> = ({
                                               files,
                                               selected,
                                               onDrop,
                                               isImages,
                                               onDeleteHandler
                                           }) => {
    const {getRootProps, getInputProps} = useDropzone({onDrop, accept: isImages ? {'image/*': []} : undefined , maxFiles: 1, multiple: false});
    return <>
        <div {...getRootProps()} className={'dropzone'}>
            <IconSVG icon={'upload'} tintColor={colorTheme.dark} className={'pb-1'} size={'24px'}/>
            <span>Clicca o trascina qui</span>
            <input {...getInputProps()}/>
        </div>
        <ListFiles files={files} isImages={isImages} onDeleteHandler={onDeleteHandler}/>
    </>
}

export default Dropzone;
