import {useDropzone} from "react-dropzone";
import React from "react";
import {IconSVG} from "../../shared/ui/icon/IconSVG";
import {colorTheme} from "../../shared/colorUtils";

interface ListFilesProps {
    files: { file: any, selected?: boolean, path?: string, name?: string }[],
    isImages?: boolean
    notInDropzone?: boolean
    onDeleteHandler?: (file: any) => void
}


const ListFiles: React.FC<ListFilesProps> = ({
                                                 files,
                                                 isImages,
                                                 notInDropzone,
                                                 onDeleteHandler
                                             }) => {
    return <>

        <div className={'list-files'}>
            {files.map((ele, key) =>
                <div key={key} className={'item'}>
                    {isImages && <img src={notInDropzone ? ele.path : URL.createObjectURL(ele.file)}/>}
                    {notInDropzone ? ele.name : ele.file && ele.file.name}
                    <IconSVG className={'ms-auto pointer'} icon={'trash'} tintColor={colorTheme.error} size={'16px'}
                             onClick={() => onDeleteHandler && onDeleteHandler(ele)}/>
                </div>
            )}
        </div>
    </>
}

export default ListFiles;
