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

interface ITalentNodeRanks {
    rankDescription: string;
}

export interface ITalentNode {
    // TODO: delete???
    talentNodeId: number;
    classTalent: ClassesType; // this talent is for the class... TODO: should be pointing towards an actual class id, not a type. Fix later
    talentNodeSpec: SpecIdType;
    talentNodeName: string;
    row: number;
    column: number;
    ranks: ITalentNodeRanks[];
    unlockedBy: number; // this talent depends on another one to be unlocked (arrow thing)
}
export interface ITalentRanks {
    rankDescription: string;
}

//TODO: rename as ITalentNode
export interface ISpecTalents {
    talentNodeName: string;
    talentNodeId: number;
    row: number;
    column: number;
    talentIcon: string;
    numberOfRanks: number;
    ranks: ITalentRanks[];
}

export interface ITalentRankSpecs {
    specId: SpecIdType;
    talents: ISpecTalents[];
}

export interface ITalents {
    classId: number;
    className: ClassesType;
    talentSpecs: ITalentRankSpecs[];
}
