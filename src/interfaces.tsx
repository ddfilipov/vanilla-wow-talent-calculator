export interface IClass {
    class: {
        name: string;
        src: string;
    };
}
export interface IClassWrapper {
    ayuda: IClass[]; // TODO: change ayuda into something more creative...
}

// export interface ITalentTreeBackground {
//     class: {
//         talentTreeKey: string;
//         src: string;
//     };
// }
export interface ITalentTreeBackground {
    firstTalentTreeKey: string;
    secondTalentTreeKey: string;
    thirdTalentTreeKey: string;
}
