export interface IClass {
    class: {
        name: string;
        src: string;
    };
}
export interface IClassWrapper {
    ayuda: IClass[]; // TODO: change ayuda into something more creative...
}

export interface ITalentTreeBackground {
    firstTalentTreeKey: string;
    secondTalentTreeKey: string;
    thirdTalentTreeKey: string;
}

export interface ISpecImage {
    firstSpecSrc: string;
    secondSpecSrc: string;
    thirdSpecSrc: string;
}

export interface IClassIconStuff {
    className: string;
    specIcons: ISpecImage;
    talentTreesBackgrounds: ITalentTreeBackground;
}
