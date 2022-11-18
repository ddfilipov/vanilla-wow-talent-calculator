// TODO: zero creativitiy with this component's name. Give it a better name later
import { FC, useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import { IClassData, ISpecTalentPoints, ITalents, SpecIdType } from "../../interfaces";
import { MAX_TALENT_POINTS, MIN_TALENT_POINTS, STARTING_LEVEL } from "../consts";
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
    data: IClassData;
    talents?: ITalents;
}

export const TalentArea: FC<TalentAreaProps> = ({ data, talents }) => {

    const [remainingTalentPoints, setRemainingTalentPoints] = useState<number>(MAX_TALENT_POINTS);
    const [oldRemainingTalentPoints, setOldRemainingTalentPoints] = useState<number>(remainingTalentPoints);
    const [requiredLevel, setRequiredLevel] = useState<number>(STARTING_LEVEL);

    const [specTalentPoints, setSpecTalentPoints] = useState<ISpecTalentPoints>({
        firstSpecPoints: 0,
        secondSpecPoints: 0,
        thirdSpecPoints: 0,
    });

    useEffect(() => {
        setOldRemainingTalentPoints(remainingTalentPoints);
        if (oldRemainingTalentPoints !== undefined) {
            if (oldRemainingTalentPoints > remainingTalentPoints) {
                setRequiredLevel(requiredLevel + 1);
            } else if (oldRemainingTalentPoints < remainingTalentPoints) {
                setRequiredLevel(requiredLevel - 1);
            }
        }
    }, [remainingTalentPoints, oldRemainingTalentPoints, requiredLevel]);

    const handleClickNode = (e: React.MouseEvent<HTMLButtonElement>, spec: SpecIdType) => {
        if (e.type === "click") {
            subirPuntos();
            subirPuntosSpec(spec);
        } else if (e.type === "contextmenu") {
            bajarPuntos();
            bajarPuntosSpec(spec);
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

    const subirPuntosSpec = useCallback(
        (spec: SpecIdType) => {
            if (spec === "firstSpec") {
                setSpecTalentPoints({ ...specTalentPoints, firstSpecPoints: specTalentPoints.firstSpecPoints + 1 });
            } else if (spec === "secondSpec") {
                setSpecTalentPoints({ ...specTalentPoints, secondSpecPoints: specTalentPoints.secondSpecPoints + 1 });
            } else if (spec === "thirdSpec") {
                setSpecTalentPoints({ ...specTalentPoints, thirdSpecPoints: specTalentPoints.thirdSpecPoints + 1 });
            }
        },
        [specTalentPoints]
    );

    const bajarPuntosSpec = useCallback(
        (spec: SpecIdType) => {
            if (spec === "firstSpec") {
                specTalentPoints.firstSpecPoints > MIN_TALENT_POINTS &&
                    setSpecTalentPoints({ ...specTalentPoints, firstSpecPoints: specTalentPoints.firstSpecPoints - 1 });
            } else if (spec === "secondSpec") {
                specTalentPoints.secondSpecPoints > MIN_TALENT_POINTS &&
                    setSpecTalentPoints({
                        ...specTalentPoints,
                        secondSpecPoints: specTalentPoints.secondSpecPoints - 1,
                    });
            } else if (spec === "thirdSpec") {
                specTalentPoints.thirdSpecPoints > MIN_TALENT_POINTS &&
                    setSpecTalentPoints({ ...specTalentPoints, thirdSpecPoints: specTalentPoints.thirdSpecPoints - 1 });
            }
        },
        [specTalentPoints]
    );

    const resetTreeTalentPoints = (specId: SpecIdType, pointsSpentOnTree: number) => {
        setRequiredLevel((previousReqLvl) => previousReqLvl - pointsSpentOnTree);
        setRemainingTalentPoints((previousRemainingPoins) => previousRemainingPoins + pointsSpentOnTree);
        specId === "firstSpec" && setSpecTalentPoints({ ...specTalentPoints, firstSpecPoints: 0 });
        specId === "secondSpec" && setSpecTalentPoints({ ...specTalentPoints, secondSpecPoints: 0 });
        specId === "thirdSpec" && setSpecTalentPoints({ ...specTalentPoints, thirdSpecPoints: 0 });

    };

    return (
        <Container>
            <TopTalentArea
                className={data.className}
                remainingTalentPoints={remainingTalentPoints}
                requiredLevel={requiredLevel}
                specTalentPoints={specTalentPoints}
            ></TopTalentArea>
            <TalentTrees
                specData={data.specData}
                handleClickNode={handleClickNode}
                specTalentPoints={specTalentPoints}
                remainingTalentPoints={remainingTalentPoints}
                classId={data.classId}
                talents={talents}
                resetTreeTalentPoints={resetTreeTalentPoints}
            />
        </Container>
    );
};
