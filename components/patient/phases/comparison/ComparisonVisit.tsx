import React, {useState} from 'react';
import SelectVisit from "./SelectVisit";
import ComparisonVisitImages from "./ComparisonVisitImages";
import Card from "../../../../shared/ui/card/Card";

const ComparisonVisit = ({
                             phases, visits,
                         }: { phases: any[], visits: any[] }) => {
    const visitsInfo = visits.map((ele, index) => {
        return {
            visit: ele,
            phase: phases[index] || phases[phases.length - 1]
        }
    })
    const [visit1, setVisit1] = useState<string>();
    const [visit2, setVisit2] = useState<string>();
    return (
        <Card>
            <h3>Confronta visite per il trattamento </h3>
            <div className={'row'}>
                <div className={'col-md-6'}>
                    <SelectVisit label={'Prima visita da comparare'} visitsInfo={visitsInfo} setVisit={setVisit1}/>
                </div>
                <div className={'col-md-6'}>
                    <SelectVisit label={'Seconda visita da comparare'} visitsInfo={visitsInfo} setVisit={setVisit2}/>
                </div>
            </div>
            <ComparisonVisitImages visit1={visit1} visit2={visit2}/>
        </Card>
    );
};

export default ComparisonVisit;
