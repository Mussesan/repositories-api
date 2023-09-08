import styled from "styled-components";

export const Container = styled.div`

`;

export const Header = styled.div`
    display: flex;
    flex-direction: column;
    padding: 1rem;

    @media screen and (max-width: ${(props)=> props.theme.breakpoints.md}){
        flex-direction: row;
        align-items: center;
    }
`;

export const Avatar = styled.img`
    align-self: center;
    border-radius: 50%;
    width: 70%;
    margin-bottom: 1rem;

    @media screen and (max-width: ${(props)=> props.theme.breakpoints.md}){
        width: 70px;
        height: 70px;
        margin-right: 1rem;
        margin-bottom: 0;
    }    
`;

export const Login = styled.h1`
    font-size: ${(props)=> props.theme.fontSize.xxl};
    margin: 0px;
    
`;

export const Name = styled.h2`
    font-size: ${(props)=> props.theme.fontSize.lg};
    font-weight: normal;
    margin: 0px;

    @media screen and (max-width: ${(props)=> props.theme.breakpoints.md}){
        display: none;
    }
`;

export const Inner = styled.div`
    padding: 0.5rem;

    @media screen and (max-width: ${(props)=> props.theme.breakpoints.md}){
        display: none;
        flex-direction: row;
    } 
`;

export const Data = styled.p`
    display: flex;
    align-items: center;
    font-size: .8rem;

    svg{
        margin-right: 2rem;
    }
`

