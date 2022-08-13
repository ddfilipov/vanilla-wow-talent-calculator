import { FC } from "react";
import styled from "styled-components";
import { ISpecData, ISpecTalentPoints, ITalents, SpecIdType } from "../../interfaces";
import { TalentTree } from "../molecules/TalentTree";

const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-items: center;
    height: 100%;
`;

interface TalentTreesProps {
    specData: ISpecData[];
    handleClickNode: (e: React.MouseEvent<HTMLButtonElement>, spec: SpecIdType) => void;
    specTalentPoints: ISpecTalentPoints;
    remainingTalentPoints: number;
    classId: number;
    talentRanks?: ITalents;
}

export const TalentTrees: FC<TalentTreesProps> = ({
    specData,
    handleClickNode,
    specTalentPoints,
    remainingTalentPoints,
    classId,
    talentRanks,
}) => {
    const getTreePoints = (specId: SpecIdType) => {
        let currentPoints = 0;
        if (specId === "firstSpec") {
            currentPoints = specTalentPoints.firstSpecPoints;
        } else if (specId === "secondSpec") {
            currentPoints = specTalentPoints.secondSpecPoints;
        } else if (specId === "thirdSpec") {
            currentPoints = specTalentPoints.thirdSpecPoints;
        }
        return currentPoints;
    };

    const getSpecTalents = (specId: SpecIdType) => {
        const test = talentRanks?.talentSpecs.find((spec)=>spec.specId === specId);
        return test?.talents;
    };

    return (
        <Container>
            {specData.map((spec) => (
                <TalentTree
                    specId={spec.specId}
                    backgroundImage={spec.specBackground}
                    specImage={spec.specIcon}
                    specName={spec.specName}
                    specTalentPoints={getTreePoints(spec.specId)}
                    handleClickNode={handleClickNode}
                    key={spec.specId}
                    remainingTalentPoints={remainingTalentPoints}
                    classId={classId}
                    specTalents={getSpecTalents(spec.specId)}
                />
            ))}
        </Container>
    );
};
