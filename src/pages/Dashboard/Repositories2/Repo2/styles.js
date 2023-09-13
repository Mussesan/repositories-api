import styled from "styled-components";

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background: rgba(0,0,0,0.25);
    border-left: 0.2rem solid 
        ${(props)=> props.color || props.theme.colors.champagneDark} ;
    border-top-left-radius: 9px;
    border-bottom-left-radius: 9px;
    box-shadow:  rgba(0,0,0,0.55) 5px 7px 10px ;
    padding: 1rem;

`

export const Name = styled.h3`
    font-size: ${(props)=> props.theme.fontSize.lg};
    font-weight: normal;
`
export const Description = styled.p`
    font-size: ${(props)=> props.theme.fontSize.sm};
    line-height: 1.25;
    margin: 1rem 0;
`

export const Footer = styled.footer`
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: ${(props)=> props.color || props.theme.colors.champagneDark};
    font-size: ${(props)=> props.theme.fontSize.sm};
`
export const Lang = styled.span`
    color: inherit;
`
export const Link = styled.a`
    color: inherit;
    font-weight: bold;
    text-transform: uppercase;
    text-decoration: none;

`