import React, {useEffect, useState} from 'react';
import {createStructureForm} from "../../../../shared/utils/forms/useStructureForm";
import {FormElements} from "../../../../shared/bootstrap/form/FormElements";
import {useForm} from "../../../../shared/utils/forms/useForm";
import SelectVisit from "./SelectVisit";
import {downloadImage} from "../../../../firebase/client";
import BtnDefault from "../../../../shared/bootstrap/button/default/BtnDefault";
import ImageVisit from "./ImageVisit";

const ComparisonVisitImages = ({
                                   visit1, visit2,
                               }: { visit1?: string, visit2?: string }) => {
    const [imagesVisit1, setImagesVisit1] = useState<any[]>([])
    const [imagesVisit2, setImagesVisit2] = useState<any[]>([])
    const [selectedImage1, setSelectedImage1] = useState<any>()
    const [selectedImage2, setSelectedImage2] = useState<any>()

    const downloadImageVisit1 = () => {
        downloadImage(`images/${visit1}/images`).then((res: any) => setImagesVisit1(res))
    }
    const downloadImageVisit2 = () => {
        downloadImage(`images/${visit2}/images`).then((res: any) => setImagesVisit2(res))
    }
    useEffect(() => {
        visit1 && downloadImageVisit1()
    }, [visit1])
    useEffect(() => {
        visit2 && downloadImageVisit2()
    }, [visit2])

    const [isFullScreen, setFullScreen] = useState(false);

    const fullScreenToggle = () => {
        setFullScreen(!isFullScreen)
    }
    return (
        <div className={"row"}>
            <div className={"col-md-4"}>
                <ImageVisit title={'Immagini visita 1'} imagesVisit={imagesVisit1} selectedImage={selectedImage1}
                            setSelectedImage={setSelectedImage1}/>
                <ImageVisit title={'Immagini visita 2'} imagesVisit={imagesVisit2} selectedImage={selectedImage2}
                            setSelectedImage={setSelectedImage2}/>

            </div>
            <div className={"col-md-8"}>
                <div className={`compare-imgs ${isFullScreen ? 'fullScreen' : ''} `}>
                    <div className={'d-flex align-items-center'}>
                        <h4>Confronto</h4>
                        <BtnDefault className={'ms-auto mb-2'} disabled={!selectedImage1 && !selectedImage2}
                                    onClick={fullScreenToggle}>{isFullScreen ? 'Dimensione normale' : 'Schermo intero'}</BtnDefault>
                    </div>
                    <div className={'content-image'}>
                        <img className={'img-left'} src={selectedImage1?.path}/>

                        <img className={'img-right'} src={selectedImage2?.path}/>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default ComparisonVisitImages;
