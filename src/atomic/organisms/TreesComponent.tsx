"use client";
import { FC } from "react";
import styled from "styled-components";
import { ClassChooser } from "../molecules/ClassChooser";
import { PlayableClassesType } from "@/utils/consts";
import Link from "next/link";
import Image from "next/image";

const StyledHeader = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    align-items: center;
`;

const Title = styled.span`
    color: white;
    font-size: 2rem;
`;

const Container = styled.div`
    height: 800px;
    display: flex;
    flex-direction: column;
    gap: 30px;
`;

interface TreesComponentProps {
    className: PlayableClassesType;
}

export const TreesComponent: FC<TreesComponentProps> = ({ className }) => {
    return (
        <Container>
            <StyledHeader>
                <Link href="/">
                    <Image src="/images/wow-icon.png" width={38} height={38} alt="Picture of the author" />
                </Link>
                <Title>
                    <span style={{ textTransform: "capitalize" }}>{className}</span>
                    {` Vanilla talent calculator`}
                </Title>
            </StyledHeader>
            <ClassChooser />
        </Container>
    );
};
