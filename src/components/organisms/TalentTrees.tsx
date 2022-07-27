import { FC } from "react";
import styled from "styled-components";
import { ISpecData } from "../../interfaces";
import { TalentTree } from "../molecules/TalentTree";

const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-items: center;
    height: 100%;
`;

interface TalentTreesProps {
    specData: ISpecData[];
    handleClickNode: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export const TalentTrees: FC<TalentTreesProps> = ({ specData, handleClickNode }) => {
    return (
        <Container>
            {specData.map((spec) => (
                <TalentTree
                    backgroundImage={spec.specBackground}
                    specImage={spec.specIcon}
                    specName={spec.specName}
                    handleClickNode={handleClickNode}
                />
            ))}
        </Container>
    );
};
