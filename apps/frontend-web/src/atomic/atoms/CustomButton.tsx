import { FC } from "react";
import styled from "styled-components";

interface CustomButtonProps {
    buttonLabel: string;
    handleOnClick: () => void;
}

const StyledButton = styled.button`
    min-width: 24px;
    border-radius: 0.3rem;
    padding: 0.2rem 0.4rem;
    border-width: 1px;
    cursor: pointer;
    border-color: #121822; //TODO: should use a var
    &:hover {
        box-shadow: inset 0 0 5px #596e92;
    }
    font-weight: bold;
    background-color: var(--main-area-background);
`;

export const CustomButton: FC<CustomButtonProps> = ({ buttonLabel, handleOnClick }) => {
    return <StyledButton onClick={handleOnClick}>{buttonLabel}</StyledButton>;
};
