import styled from "styled-components";

const defaultProps = {
    theme: {
        mainColor: '#8B5CF6',
        white: '#FFF',
    }
}

export const SubmitRequestButton = styled.a`
    padding: 10px 28px;
    background-color: ${props => props.theme.mainColor};
    border: 2px solid ${props => props.theme.mainColor};
    border-radius: 4px;

    font-size: 16px;
    font-weight: 700;
    line-height: 24px;
    color: ${props => props.theme.white};
    transition: 0.3s;

    &:hover {
        background-color: ${props => props.theme.white};
        color: ${props => props.theme.mainColor};
    }
`
SubmitRequestButton.defaultProps = defaultProps;

export const CalculationRequest = styled.button`
    margin-top: 4px;
    padding: 10px 0;
    grid-column: 1 / -1;
    background-color: ${props => props.theme.mainColor};
    border: 2px solid ${props => props.theme.mainColor};
    border-radius: 4px;

    font-size: 16px;
    font-weight: 700;
    line-height: 24px;
    color: ${props => props.theme.white};
    transition: 0.3s;
    cursor: pointer;

    &:hover {
        background-color: ${props => props.theme.white};
        color: ${props => props.theme.mainColor};
    }
`

export const GalleryGetMoreButton = styled.button`
    display: block;
    margin: 0 auto;
    padding: 16px 28px;
    background-color: ${props => props.theme.mainColor};
    border: 2px solid ${props => props.theme.mainColor};
    border-radius: 12px;

    font-size: 16px;
    font-weight: 900;
    line-height: 24px;
    color: ${props => props.theme.white};
    cursor: pointer;
    transition: 0.3s;

    &:hover {
        background-color: ${props => props.theme.white};
        color: ${props => props.theme.mainColor};
    }
`