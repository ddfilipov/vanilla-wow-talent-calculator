export interface IClass {
    class: {
        name: string;
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