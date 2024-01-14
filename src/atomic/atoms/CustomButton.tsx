import { FC } from "react";

interface CustomButtonProps {
    buttonLabel: string;
    handleOnClick: () => void;
}

const CustomButton: FC<CustomButtonProps> = ({ buttonLabel, handleOnClick }) => {
    return <button onClick={handleOnClick}>{buttonLabel}</button>;
};
