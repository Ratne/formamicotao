import React from 'react';
import ServiceCard from "../../shared/ui/serviceCard/ServiceCard";
import {TreatmentModel} from "../../models/Treatment.model";
import {PharmacyModel} from "../../models/Pharmacy.model";
import {serviceMap} from "../data/ServicesData";
import {useRouter} from "next/router";

const ServicesList = ({
                          listTreatment,
                          selectedPharma
                      }: { listTreatment: TreatmentModel[], selectedPharma: PharmacyModel }) => {

    const router = useRouter();

    const isTreatmentActive = (idTreatment: string) => {
        return !!selectedPharma?.treatments?.find(ele => ele.id === idTreatment) || false
    }
    const goToTreatment = (id: string) => {
        router.push(`/treatment/${id}`)
    }

    return (
        <div className={"d-flex flex-wrap gap-4 mt-4"}>
            {listTreatment?.map((item, i) => (
                <ServiceCard key={i} image={serviceMap[item.name.toLowerCase()].img}
                             service={{title: serviceMap[item.name.toLowerCase()].title, ...item}}
                             disabled={!isTreatmentActive(item.idDocument)}
                             clickHandler={() => isTreatmentActive(item.idDocument) && goToTreatment(item.idDocument)}
                />
            ))}
        </div>
    );
};

export default ServicesList;
