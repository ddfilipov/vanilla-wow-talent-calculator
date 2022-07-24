import { FC } from "react";
import styled from "styled-components";
import { ISpecImage, ISpecNames, ITalentTreeBackground } from "../../interfaces";
import { TalentTree } from "../molecules/TalentTree";

const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-items: center;
    height: 100%;
`;

interface TalentTreesProps {
    className: string;
    talentBackgroundImages: ITalentTreeBackground;
    talentSpecImages: ISpecImage;
    talentSpecNames: ISpecNames;
    subirPuntos: () => void;
    bajarPuntos: () => void;
}

export const TalentTrees: FC<TalentTreesProps> = ({
    className,
    talentBackgroundImages,
    talentSpecImages,
    talentSpecNames,
    subirPuntos,
    bajarPuntos,
}) => {
    return (
        <Container>
            <TalentTree
                className={className}
                backgroundImage={talentBackgroundImages.firstTalentTreeKey}
                specImage={talentSpecImages.firstSpecSrc}
                specName={talentSpecNames.firstSpecName}
                subirPuntos={subirPuntos}
                bajarPuntos={bajarPuntos}
            />
            <TalentTree
                className={className}
                backgroundImage={talentBackgroundImages.secondTalentTreeKey}
                specImage={talentSpecImages.secondSpecSrc}
                specName={talentSpecNames.secondSpecName}
                subirPuntos={subirPuntos}
                bajarPuntos={bajarPuntos}
            />
            <TalentTree
                className={className}
                backgroundImage={talentBackgroundImages.thirdTalentTreeKey}
                specImage={talentSpecImages.thirdSpecSrc}
                specName={talentSpecNames.thirdSpecName}
                subirPuntos={subirPuntos}
                bajarPuntos={bajarPuntos}
            />
        </Container>
    );
};
