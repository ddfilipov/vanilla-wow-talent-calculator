export interface IClass {
    class: {
        name: string;
        src: string;
    };
}
export interface IClassWrapper {
    ayuda: IClass[]; // TODO: change ayuda into something more creative...
}


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
