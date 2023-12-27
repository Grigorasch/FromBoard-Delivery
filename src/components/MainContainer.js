import styled from "styled-components";

export const MainContainer = styled.div`
    margin: 0 auto;
    padding: 0 20px;
    max-width: 1576px;
    color: ${props => props.theme.black};
    ${props => props.cssStyles}
`

export const MainContainerWithPadding = styled(MainContainer)`
    padding: 0 0 72px;
`

export const MainTitile = styled.h2`
    margin-bottom: ${props => props.marginBottom || '0px'};
    font-size: 30px;
    font-weight: 900;
    line-height: 36px;
    text-align: center;
`

export const MainText = styled.p`
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    text-align: center;
`