import React from 'react';
import {IconSVG} from "../../shared/ui/icon/IconSVG";
import {colorTheme} from "../../shared/colorUtils";
import ModalCustom from "../../shared/bootstrap/modal/ModalCustom";
import BtnSecondary from "../../shared/bootstrap/button/secondary/BtnSecondary";
import BtnPrimary from "../../shared/bootstrap/button/primary/BtnPrimary";

const DeleteConfirmModal = ({
                                data,
                                closeModalDelete,
                                onConfirm
                            }: { data: any, closeModalDelete: () => void, onConfirm: () => void }) => {
    const footerTemplate = <>
        <BtnSecondary variant={"secondary-outline"} onClick={closeModalDelete}>Annulla</BtnSecondary>
        <BtnPrimary onClick={onConfirm}>Elimina</BtnPrimary>
    </>

    return (
        <ModalCustom title={'Conferma eliminazione'} closeModal={closeModalDelete}
                     footerTemplate={footerTemplate}>
            Sei sicuro di voler eliminare il file {data.name}
        </ModalCustom>
    );
};

export default DeleteConfirmModal;
