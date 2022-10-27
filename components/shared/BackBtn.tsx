import React from 'react';
import {IconSVG} from "../../shared/ui/icon/IconSVG";
import {colorTheme} from "../../shared/colorUtils";

const BackBtn = ({goBackHandler}: { goBackHandler: () => void }) => {
    return (
        <span className={"back-text me-5"} onClick={goBackHandler}>
                        <IconSVG icon={'arrow-left'} size={"18px"}
                                 className={'me-2'}
                                 tintColor={colorTheme.secondary}/>{'Indietro'}</span>
    );
};

export default BackBtn;
