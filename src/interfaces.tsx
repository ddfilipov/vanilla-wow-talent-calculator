type ClassesType = "druid" | "hunter" | "mage" | "paladin" | "priest" | "rogue" | "shaman" | "warlock" | "warrior";

export interface IClass {
    class: {
        name: ClassesType;
        src: string;
    };
}
export interface IClassWrapper {
    ayuda: IClass[]; // TODO: change ayuda into something more creative...
}

// TODO: should I make this into a Map<number, string> or something?
export type SpecIdType = "firstSpec" | "secondSpec" | "thirdSpec";

export interface ISpecData {
    specId: SpecIdType;
    specName: string;
    specIcon: string;
    specBackground: string;
}

export interface IClassData {
    classId: number;
    className: string;
    specData: ISpecData[];
}

export interface ISpecTalentPoints {
    firstSpecPoints: number;
    secondSpecPoints: number;
    thirdSpecPoints: number;
}

export interface ITalentRanks {
    rankDescription: string;
}

export interface ITalentNode {
    talentNodeName: string;
    talentNodeId: number;
    treePointsRequiredToLvl: number;
    row: number;
    column: number;
    talentIcon: string;
    numberOfRanks: number;
    ranks: ITalentRanks[];
}

export interface ITalentRankSpecs {
    specId: SpecIdType;
    talents: ITalentNode[];
}

export interface ITalents {
    classId: number;
    className: ClassesType;
    talentSpecs: ITalentRankSpecs[];
}

export interface BackgroundImage {
    backgroundImage: string;
}