export interface ClassData {
    classId: number;
    className: string;
    classIcon: string;
    classNameColor: string;
    specs: SpecData[];
}

export interface SpecData {
    specName: string;
    specIcon: string;
    specBackground: string;
    specTalents: SpecTalent[];
}

export interface ICoords {
    row: number;
    column: number;
}

export interface SpecTalent {
    talentName: string;
    talentId: number;
    ranksNumber: number;
    ranksDescription: string[];
    talentcolumn: number;
    talentRow: number;
    talentIcon: string;
    unlocks?: ICoords[] | ICoords[][];
    unlocksId?: number | number[]; // a node can unlock several nodes
    unlockedById?: number;
    pointsNeededToUnlock: number;
}
