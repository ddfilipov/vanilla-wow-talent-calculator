"use client";
import { FC } from "react";
import styled from "styled-components";
import { ClassChooser } from "../molecules/ClassChooser";
import { PlayableClassesType } from "@/utils/consts";
import Link from "next/link";
import Image from "next/image";
import { TalentTree } from "./TalentTree";

const StyledHeader = styled.div`
    display: grid;
    grid-template-columns: 2rem 1fr;
    gap: 1rem;
    align-items: center;
`;

const Title = styled.h2`
    color: white;
    text-transform: capitalize;
    font-size: 1.5rem;
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
                <Title>{`${className} Vanilla Talent Calculator`}</Title>
            </StyledHeader>
            <ClassChooser />
            <TalentTree />
            <TalentTree />
            <TalentTree />
        </Container>
    );
};
