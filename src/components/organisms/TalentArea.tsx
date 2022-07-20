// TODO: zero creativitiy with this component's name. Give it a better name later
import { FC, useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import { ITalentTreeData } from "../../interfaces";
import { TalentTrees } from "./TalentTrees";
import { TopTalentArea } from "./TopTalentArea";

const Container = styled.div`
    display: grid;
    grid-template-rows: 15% auto;
    height: inherit;
    gap: 1rem;
    padding: 2rem;
`;

interface TalentAreaProps {
    data: ITalentTreeData;
}

export const TalentArea: FC<TalentAreaProps> = ({ data }) => {
    const MAX_TALENT_POINTS = 51;
    const MIN_TALENT_POINTS = 0;
    const STARTING_LEVEL = 9;

    const [remainingTalentPoints, setRemainingTalentPoints] = useState<number>(MAX_TALENT_POINTS);
    const [oldRemainingTalentPoints, setOldRemainingTalentPoints] = useState<number>(remainingTalentPoints);
    const [requiredLevel, setRequiredLevel] = useState<number>(STARTING_LEVEL);

    useEffect(() => {
        setOldRemainingTalentPoints(remainingTalentPoints);
        if (oldRemainingTalentPoints !== undefined) {
            if (oldRemainingTalentPoints > remainingTalentPoints) {
                setRequiredLevel(requiredLevel + 1);
            } else if (oldRemainingTalentPoints < remainingTalentPoints) {
                setRequiredLevel(requiredLevel - 1);
            }
        }
    }, [remainingTalentPoints]);

    const subirPuntos = useCallback(() => {
        if (remainingTalentPoints > MIN_TALENT_POINTS) {
            setRemainingTalentPoints(remainingTalentPoints - 1);
        }
    }, [remainingTalentPoints]);

    const bajarPuntos = useCallback(() => {
        if (remainingTalentPoints < MAX_TALENT_POINTS) {
            setRemainingTalentPoints(remainingTalentPoints + 1);
        }
    }, [remainingTalentPoints]);

    return (
        <Container>
            <TopTalentArea
                className={data.className}
                remainingTalentPoints={remainingTalentPoints}
                requiredLevel={requiredLevel}
            ></TopTalentArea>
            <TalentTrees
                className={data.className}
                talentBackgroundImages={data.talentTreesBackgrounds}
                talentSpecImages={data.specIcons}
                talentSpecNames={data.specNames}
            />
            {/* <button type="button" onClick={subirPuntos}>
                Subir talento
            </button>
            <button type="button" onClick={bajarPuntos}>
                Bajar talento
            </button> */}
        </Container>
    );
};
