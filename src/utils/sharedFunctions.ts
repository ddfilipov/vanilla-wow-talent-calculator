import { IUnlockableNodes } from "@/atomic/organisms/TalentTree";

export function nodeCantLvlDown(
    talentTreePointDistribution: IUnlockableNodes[],
    pointsNeededToUnlock: number,
    highestMilestone: number
): boolean {
    const sum = getSumOfSameTierNodes(talentTreePointDistribution, pointsNeededToUnlock, highestMilestone);
    console.log("pointsNeededToUnlock:", pointsNeededToUnlock);
    console.log("highestMilestone:", highestMilestone);
    console.log("sum:", sum);
    if (sum <= pointsNeededToUnlock + 5) {
        console.log("TRUE, we can't lvl down");
        
        return true;
    }
    if (""){
        
    }
    console.log("FALSE, we can lvl down");
    return false;
}

export function getSumOfSameTierNodes(
    talentTreePointDistribution: IUnlockableNodes[],
    pointsNeededToUnlock: number,
    highestMilestone: number
) {
    const result = talentTreePointDistribution
        .filter((node) => node.pointsNeededToUnlock <= pointsNeededToUnlock)
        .reduce((sum, node) => sum + node.pointsSpent, 0);

    return result;
}
