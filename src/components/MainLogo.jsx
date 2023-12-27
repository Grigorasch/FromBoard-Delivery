import styled from "styled-components";
import logoIcon from "../images/logo.svg";

const LogoIcon = styled.img`
    margin-right: 4px;
    width: 50px;
    height: 74px;
`

const LogoTitle = styled.h2`
    font-size: 24px;
    font-weight: 900;
    line-height: 32px;
    color: ${props => props.theme.black};
`
LogoTitle.defaultProps = {
    theme: {
        black: '#000',
    }
}

const LogoWrapper = styled.div`
    display: flex;
    align-items: center;
`

export default function MainLogo() {
    return (
        <LogoWrapper>
            <LogoIcon src={logoIcon} alt="" />
            <LogoTitle>FromBoard Delivery</LogoTitle>
        </LogoWrapper>
    )
}