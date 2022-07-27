export interface IClass {
    class: {
        name: string;
        src: string;
    };
}
export interface IClassWrapper {
    ayuda: IClass[]; // TODO: change ayuda into something more creative...
}

// TODO: everything between this comment and the one after, delete
export interface ISpecNames {
    firstSpecName: string;
    secondSpecName: string;
    thirdSpecName: string;
}

export interface ISpecImages {
    firstSpecSrc: string;
    secondSpecSrc: string;
    thirdSpecSrc: string;
}

export interface ISpecBackgrounds {
    firstTalentTreeKey: string;
    secondTalentTreeKey: string;
    thirdTalentTreeKey: string;
}

export interface ITalentTreeData {
    classId: number;
    className: string;
    specIcons: ISpecImages;
    specNames: ISpecNames;
    talentTreesBackgrounds: ISpecBackgrounds;
}

export interface ITalentTrees {
    specNames: ISpecNames;
    specIcons: ISpecImages;
    specBackgrounds: ISpecBackgrounds;
}

export interface ISpecData2 {
    classId: number;
    className: string;
    talentTrees: ITalentTrees;
}
/////////////////////////////

export interface ISpecData {
    specId: number;
    specName: string;
    specIcon: string;
    specBackground: string;
}

export interface IClassData {
    classId: number;
    className: string;
    specData: ISpecData[];
}
