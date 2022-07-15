import { FC } from "react";

// const MainContainer = styled.div`
//     display: flex;
//     align-items: center;
//     justify-content: center;
// `;

// const Container = styled.div`
//     border: 1px solid white;
//     width: 1000px;
//     height: 700px;
//     margin-top: 100px;
//     display: flex;
//     justify-content: center;
//     flex-direction: column;
//     gap: 10px;
// `;

interface TalentTreesProps {
    className: string;
}

export const TalentTrees: FC<TalentTreesProps> = ({ className }) => {
    return <>Talent tree of {className}</>;
};
