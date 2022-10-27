import React from 'react';

const ImageVisit = ({
                        title,
                        imagesVisit,
                        selectedImage,
                        setSelectedImage
                    }: { title: string, imagesVisit: any[], selectedImage: any, setSelectedImage: (img: any) => void }) => {
    return (
        <div className={'image-visit'}>
            <h4>{title}</h4>
            <div className={'image-thumb-list'}>
                {imagesVisit && imagesVisit.length > 0 ? imagesVisit.map((ele, i) => <img
                        className={`img-item ${selectedImage?.path === ele.path ? 'active' : 'pointer'}`} key={i}
                        src={ele.path}
                        onClick={() => setSelectedImage((ele.path === selectedImage?.path ? undefined : ele))}/>)
                    :
                    <div>Nessuna immagine per la visita selezionata</div>}
            </div>
        </div>
    );
};

export default ImageVisit;
