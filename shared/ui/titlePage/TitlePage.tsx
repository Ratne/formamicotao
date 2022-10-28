import React from 'react';
import Breadcrumb from "../../bootstrap/breadcrumb/BreadCrumb";
import {ListBreadcrumbModel} from "../../bootstrap/breadcrumb/BreadcrumbModel";
import Card from "../card/Card";

const TitlePage = ({
                       titlePage,
                       subtitlePage,
                       listPages,
                       currentPage,
                       goToHandler,
                       goBackHandler
                   }: {
    titlePage?: string,
    subtitlePage?: string,
    listPages: ListBreadcrumbModel[], currentPage: string,
    goToHandler: (name: string) => void
    goBackHandler?: () => void
}) => {
    return (
        <Card classCard={'h-auto'}>
            <div className={"title-page"}>

                {titlePage && <h2 className={`title-text ${subtitlePage ? '' : 'me-auto'}`}>{titlePage || ''}</h2>}
                {titlePage && subtitlePage &&
                    <h3 className={"subtitle-text me-auto"}><span className={'px-3'}>-</span>
                        {subtitlePage || ''}</h3>}
                <Breadcrumb list={listPages} currentPage={currentPage} goToHandler={goToHandler}/>
            </div>
        </Card>
    );
};

export default TitlePage;
