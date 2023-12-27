import styled from "styled-components";
import { mainColor, whiteColor } from "./GlobalThemeProvider";

export function withButtonStyles(originalComponent, cssStyles) {
    return styled(originalComponent)`${cssStyles}`
}

export const ClassicButton = styled.button`
    padding: 10px 28px;
    border: 2px solid ${mainColor};
    border-radius: 4px;
    background-color: ${mainColor};

    outline: 2px solid ${mainColor};
    outline-offset: -2px;

    font-size: 16px;
    font-weight: 700;
    line-height: 24px;
    color: ${whiteColor};
    cursor: pointer;
    transition: 0.3s;

    &:hover {
        background-color: ${whiteColor};
        color: ${mainColor};
    }

    &:focus, :focus-within {
        
        outline-offset: 2px;
    }

    &:active {
        transform: scale(0.95);
    }
`