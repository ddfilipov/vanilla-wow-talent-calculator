import React, { FC } from "react";
import styled from "styled-components";

const Container = styled.div`
    border: 1px solid white;
    margin-top: 10px;
`;

export const ClassChooser: FC = () => {
    return (
        <Container>
            <ul>
                <li>warrior</li>
            </ul>
        </Container>
    );
};
