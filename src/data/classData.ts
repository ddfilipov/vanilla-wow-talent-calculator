export interface ClassData {
    classId: number;
    className: string;
    specs: SpecData[];
}

export interface SpecData {
    specName: string;
    specId: number;
}

export const classData: ClassData[] = [
    {
        classId: 1,
        className: "druid",
        specs: [
            {
                specName: "balance",
                specId: 1,
            },
            {
                specName: "feral",
                specId: 2,
            },
            {
                specName: "restoration",
                specId: 3,
            },
        ],
    },
    {
        classId: 2,
        className: "hunter",
        specs: [
            {
                specName: "beast mastery",
                specId: 4,
            },
            {
                specName: "marksmanship",
                specId: 5,
            },
            {
                specName: "survival",
                specId: 6,
            },
        ],
    },
    {
        classId: 3,
        className: "mage",
        specs: [
            {
                specName: "arcane",
                specId: 7,
            },
            {
                specName: "fire",
                specId: 8,
            },
            {
                specName: "frost",
                specId: 9,
            },
        ],
    },
    {
        classId: 4,
        className: "paladin",
        specs: [
            {
                specName: "holy",
                specId: 10,
            },
            {
                specName: "protection",
                specId: 11,
            },
            {
                specName: "retribution",
                specId: 12,
            },
        ],
    },
    {
        classId: 5,
        className: "priest",
        specs: [
            {
                specName: "discipline",
                specId: 13,
            },
            {
                specName: "holy",
                specId: 14,
            },
            {
                specName: "shadow",
                specId: 15,
            },
        ],
    },
    {
        classId: 6,
        className: "rogue",
        specs: [
            {
                specName: "assassination",
                specId: 16,
            },
            {
                specName: "combat",
                specId: 17,
            },
            {
                specName: "subtely",
                specId: 18,
            },
        ],
    },
    {
        classId: 7,
        className: "shaman",
        specs: [
            {
                specName: "elemental",
                specId: 19,
            },
            {
                specName: "enhancement",
                specId: 20,
            },
            {
                specName: "restoration",
                specId: 21,
            },
        ],
    },
    {
        classId: 8,
        className: "warlock",
        specs: [
            {
                specName: "affliction",
                specId: 22,
            },
            {
                specName: "demonology",
                specId: 23,
            },
            {
                specName: "destruction",
                specId: 24,
            },
        ],
    },
    {
        classId: 9,
        className: "warrior",
        specs: [
            {
                specName: "arms",
                specId: 25,
            },
            {
                specName: "fury",
                specId: 26,
            },
            {
                specName: "protection",
                specId: 27,
            },
        ],
    },
];
