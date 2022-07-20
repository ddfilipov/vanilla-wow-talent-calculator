import { FC } from "react";
import styled from "styled-components";
import { ISpecImage, ITalentTreeBackground } from "../../interfaces";
import { TalentTree } from "../molecules/TalentTree";

const Container = styled.div`
    display: grid;
    grid-template-columns: auto auto auto;
    justify-items: center;
    height: 100%;
`;

interface TalentTreesProps {
    className: string;
    talentBackgroundImages: ITalentTreeBackground;
    talentSpecImages: ISpecImage;
}

export const TalentTrees: FC<TalentTreesProps> = ({ className, talentBackgroundImages, talentSpecImages }) => {
    return (
        <Container>
            <TalentTree
                className={className}
                backgroundImage={talentBackgroundImages.firstTalentTreeKey}
                specImage={talentSpecImages.firstSpecSrc}
            />
            <TalentTree
                className={className}
                backgroundImage={talentBackgroundImages.secondTalentTreeKey}
                specImage={talentSpecImages.secondSpecSrc}
            />
            <TalentTree
                className={className}
                backgroundImage={talentBackgroundImages.thirdTalentTreeKey}
                specImage={talentSpecImages.thirdSpecSrc}
            />
        </Container>
    );
};
