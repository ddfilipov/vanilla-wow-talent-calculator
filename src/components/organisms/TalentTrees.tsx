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
    const funcion = (specId: SpecIdType) => {
        let numerito = 0;
        if (specId === "firstSpec") {
            numerito = specTalentPoints.firstSpecPoints;
        } else if (specId === "secondSpec") {
            numerito = specTalentPoints.secondSpecPoints;
        } else if (specId === "thirdSpec") {
            numerito = specTalentPoints.thirdSpecPoints;
        }
        return numerito;
    };

    return (
        <Container>
            {specData.map((spec) => (
                <TalentTree
                    specId={spec.specId}
                    backgroundImage={spec.specBackground}
                    specImage={spec.specIcon}
                    specName={spec.specName}
                    specTalentPoints={funcion(spec.specId)}
                    handleClickNode={handleClickNode}
                />
            ))}
        </Container>
    );
};
