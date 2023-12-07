import { IUnlockableNodes } from "@/atomic/organisms/TalentTree";

export function getSumOfSameTierNodes(talentTreePointDistribution: IUnlockableNodes[], pointsNeededToUnlock: number) {
    const result = talentTreePointDistribution
        .filter((node) => node.pointsNeededToUnlock === 0)
        .reduce((sum, node) => sum + node.pointsSpent, 0);

    return result;
}

export function isThisNodeLvlDowneable(
    talentTreePointDistribution: IUnlockableNodes[],
    pointsNeededToUnlock: number
): boolean {
    const sum = getSumOfSameTierNodes(talentTreePointDistribution, pointsNeededToUnlock);
    if (sum <= pointsNeededToUnlock + 5) {
        return true;
    }
    return false;
}
