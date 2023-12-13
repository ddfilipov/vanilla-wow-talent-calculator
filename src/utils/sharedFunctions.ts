import { IUnlockableNodes } from "@/atomic/organisms/TalentTree";

export function nodeCantLvlDown(
    talentTreePointDistribution: IUnlockableNodes[],
    pointsNeededToUnlock: number,
    highestMilestone: number
): boolean {
    const sum = getSumOfSameTierNodes(talentTreePointDistribution, pointsNeededToUnlock);
    if (sum <= highestMilestone) {
        return true;
    }
    return false;
}

export function getSumOfSameTierNodes(talentTreePointDistribution: IUnlockableNodes[], pointsNeededToUnlock: number) {
    const result = talentTreePointDistribution
        .filter((node) => node.pointsNeededToUnlock <= pointsNeededToUnlock)
        .reduce((sum, node) => sum + node.pointsSpent, 0);

    return result;
}
