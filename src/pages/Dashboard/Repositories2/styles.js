import styled from "styled-components";

export const ContainerRepos = styled.div`
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 2rem;
    margin-top: 2rem;

    @media screen and (max-width: ${(props)=> props.theme.breakpoints.sm}) {
        justify-content: center;
        grid-template-columns: 20rem;
    }
`
