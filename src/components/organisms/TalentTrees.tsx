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
    talents?: ITalents;
}

export const TalentTrees: FC<TalentTreesProps> = ({
    specData,
    handleClickNode,
    specTalentPoints,
    remainingTalentPoints,
    classId,
    talents,
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
        const talentTree = talents?.talentSpecs.find((specToFind) => specToFind.specId === specId);
        return talentTree && talentTree.talents;
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
                    specRanks={getSpecTalents(spec.specId)}
                />
            ))}
        </Container>
    );
};
