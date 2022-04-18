import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        font-family: "Roboto", sans-serif;
        margin: 0;
        padding: 0;
        box-sizing: border-box
}
`
export const Heading = styled.h1`
    text-align: center;
    font-size: clamp(1.3rem, 5vw, 2rem);
    font-weight: 600;
`