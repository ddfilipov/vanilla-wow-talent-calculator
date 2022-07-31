import { FC } from "react";
import styled from "styled-components";
import { ISpecData, ISpecTalentPoints, SpecIdType } from "../../interfaces";
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
}

export const TalentTrees: FC<TalentTreesProps> = ({ specData, handleClickNode, specTalentPoints }) => {
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
                />
            ))}
        </Container>
    );
};
