import { FC } from "react";
import styled from "styled-components";
import { ITalentTreeBackground } from "../../interfaces";
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
}

export const TalentTrees: FC<TalentTreesProps> = ({ className, talentBackgroundImages }) => {
    return (
        <Container>
            <TalentTree className={className} backgroundImage={talentBackgroundImages.firstTalentTreeKey} />
            <TalentTree className={className} backgroundImage={talentBackgroundImages.secondTalentTreeKey} />
            <TalentTree className={className} backgroundImage={talentBackgroundImages.thirdTalentTreeKey} />
        </Container>
    );
};
