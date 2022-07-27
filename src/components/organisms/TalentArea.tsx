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

interface IPrueba {
    remainingTalentPoints: number;
    treeTalentPoints: number[];
}

export const TalentArea: FC<TalentAreaProps> = ({ data }) => {
    const MAX_TALENT_POINTS = 51;
    const MIN_TALENT_POINTS = 0;
    const STARTING_LEVEL = 9;

    const [remainingTalentPoints, setRemainingTalentPoints] = useState<number>(MAX_TALENT_POINTS);
    const [oldRemainingTalentPoints, setOldRemainingTalentPoints] = useState<number>(remainingTalentPoints);
    const [requiredLevel, setRequiredLevel] = useState<number>(STARTING_LEVEL);
    const [treeTalentPoints, setTreeTalentPoints] = useState<number[]>([0, 0, 0]);

    const [remainingTalentPoints2, setRemainingTalentPoints2] = useState<IPrueba>({
        remainingTalentPoints: MAX_TALENT_POINTS,
        treeTalentPoints: [0, 0, 0],
    });

    useEffect(() => {
        // TODO: convertir esta parte en funcion manageRequiredRemainingPoints o algo así
        setOldRemainingTalentPoints(remainingTalentPoints);
        if (oldRemainingTalentPoints !== undefined) {
            if (oldRemainingTalentPoints > remainingTalentPoints) {
                setRequiredLevel(requiredLevel + 1);
            } else if (oldRemainingTalentPoints < remainingTalentPoints) {
                setRequiredLevel(requiredLevel - 1);
            }
        }
    }, [remainingTalentPoints]);

    const handleClickNode = (e: React.MouseEvent<HTMLButtonElement>) => {
        console.log("hola?!?!?!?");
        if (e.type === "click") {
            subirPuntos();
            subirPuntosSpec();
        } else if (e.type === "contextmenu") {
            bajarPuntos();
            bajarPuntosSpec();
        }
        e.preventDefault();
    };

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

    const subirPuntosSpec = useCallback(() => {}, []);

    const bajarPuntosSpec = useCallback(() => {}, []);

    return (
        <Container>
            <TopTalentArea
                className={data.className}
                remainingTalentPoints={remainingTalentPoints}
                requiredLevel={requiredLevel}
            ></TopTalentArea>
            <TalentTrees
                talentBackgroundImages={data.talentTreesBackgrounds}
                talentSpecImages={data.specIcons}
                talentSpecNames={data.specNames}
                handleClickNode={handleClickNode}
            />
        </Container>
    );
};
