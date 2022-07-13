import { FC } from "react";
import styled from "styled-components";
import { classes } from "../consts";
import warr from "../../images/class_warrior.jpg";

const Container = styled.div`
    border: 1px solid white;
    margin-top: 10px;
`;

export const ClassChooser: FC = () => {
    return (
        <Container>
            <div>
                {/* {classes.map((clase, index) => ( */}
                <img src={warr}></img>
                {/* ))} */}
            </div>
        </Container>
    );
};
