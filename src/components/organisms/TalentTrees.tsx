import { FC } from "react";
import styled from "styled-components";
import { ISpecImages, ISpecNames, ISpecBackgrounds } from "../../interfaces";
import { TalentTree } from "../molecules/TalentTree";

const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-items: center;
    height: 100%;
`;

interface TalentTreesProps {
    talentBackgroundImages: ISpecBackgrounds;
    talentSpecImages: ISpecImages;
    talentSpecNames: ISpecNames;
    handleClickNode: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export const TalentTrees: FC<TalentTreesProps> = ({
    talentBackgroundImages,
    talentSpecImages,
    talentSpecNames,
    handleClickNode,
}) => {
    return (
        <Container>
            <TalentTree
                backgroundImage={talentBackgroundImages.firstTalentTreeKey}
                specImage={talentSpecImages.firstSpecSrc}
                specName={talentSpecNames.firstSpecName}
                handleClickNode={handleClickNode}
            />
            <TalentTree
                backgroundImage={talentBackgroundImages.secondTalentTreeKey}
                specImage={talentSpecImages.secondSpecSrc}
                specName={talentSpecNames.secondSpecName}
                handleClickNode={handleClickNode}
            />
            <TalentTree
                backgroundImage={talentBackgroundImages.thirdTalentTreeKey}
                specImage={talentSpecImages.thirdSpecSrc}
                specName={talentSpecNames.thirdSpecName}
                handleClickNode={handleClickNode}
            />
        </Container>
    );
};
