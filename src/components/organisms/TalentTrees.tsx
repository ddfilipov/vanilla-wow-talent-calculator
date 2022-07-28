import { FC } from "react";
import styled from "styled-components";
import { ISpecData, SpecIdType } from "../../interfaces";
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
}

export const TalentTrees: FC<TalentTreesProps> = ({ specData, handleClickNode }) => {
    return (
        <Container>
            {specData.map((spec) => (
                <TalentTree
                    specId={spec.specId}
                    backgroundImage={spec.specBackground}
                    specImage={spec.specIcon}
                    specName={spec.specName}
                    handleClickNode={handleClickNode}
                />
            ))}
        </Container>
    );
};
