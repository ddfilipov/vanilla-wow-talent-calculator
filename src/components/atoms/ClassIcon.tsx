import { FC } from "react";
import styled from "styled-components";

export interface ClassIconProps {
    href: string;
    src: string;
    alt: string;
}

const Container = styled.a``;

export const ClassIcon: FC<ClassIconProps> = ({ href, src, alt }) => {
    return (
        <Container href={href}>
            <img src={src} alt={alt}></img>
        </Container>
    );
};
