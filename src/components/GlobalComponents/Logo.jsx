import styled from "styled-components"
import logoIcon from "./images/logo.svg"

export default function Logo() {
    console.log(LogoLink);
    return (
        <LogoLink href="/">
            <LogoIcon src={logoIcon}/>
            <LogoBrand>FromBoard Delivery</LogoBrand>
        </LogoLink>
    )
}

const LogoLink = styled.a`
    display: flex;
    align-items: center;
    gap: 4px;
    width: 305px;
    height: 74px;
`

const LogoIcon = styled.img`
    margin-right: 4px;
`

const LogoBrand = styled.h2`
    flex-shrink: 0;
    font-size: 24px;
    font-weight: 900;
    line-height: 32px;
`