import styled from "styled-components";
import MainLogo from "../MainLogo";
import HeaderDescription from "../HeaderDescription";
import NavigationMenu from "../NavigationMenu";
import { SubmitRequestButton } from "../Button";
import { MainContainer } from "../MainContainer";

export default function Header() {
    return (
        <HeaderWrapper>
            <MainContainer>
                <HeaderDescriptionWrapper>
                    <MainLogo />
                    <HeaderDescription />
                </HeaderDescriptionWrapper>
                <HeaderNavigationWrapper>
                    <NavigationMenu />
                    <SubmitRequestButton href="">Оставить заявку</SubmitRequestButton>
                </HeaderNavigationWrapper>
            </MainContainer>
        </HeaderWrapper>
    )
}

const defaultProps = {
    theme: {
        headerBackground: '#FFF'
    }
}

const HeaderWrapper = styled.header`
    padding: 24px 0;
    background-color: ${props => props.theme.headerBackground};
`
HeaderWrapper.defaultProps = defaultProps;

const HeaderDescriptionWrapper = styled.div`
    margin-bottom: 24px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const HeaderNavigationWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`