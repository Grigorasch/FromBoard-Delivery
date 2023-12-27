import styled from "styled-components";
import { whiteColor } from "../GlobalComponents/GlobalThemeProvider";
import { SectionContainer } from "../GlobalComponents/ContainersAndWrappers";
import Logo from "../GlobalComponents/Logo";
import AboutCompany from "./AboutCompany";
import Navigation from "./Navigation";
import { ClassicButton } from "../GlobalComponents/Buttons";

export default function Header() {
    return (
        <HeaderWrapper>
            <SectionContainer>
                <HeaderContainer>
                    <Logo />
                    <AboutCompany />
                </HeaderContainer>
                <HeaderContainer>
                    <Navigation />
                    <ClassicButton as="a" href="#request">Оставить заявку</ClassicButton>
                </HeaderContainer>
            </SectionContainer>
        </HeaderWrapper>
    )
}

const HeaderWrapper = styled.header`
    padding: 24px 0;
    height: 200px;
    background-color: ${whiteColor};
`

const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    &:not(:last-child) {
        margin-bottom: 24px;
    }
`