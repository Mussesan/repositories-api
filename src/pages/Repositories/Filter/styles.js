import styled from "styled-components";

export const ListLang = styled.ul`
    padding: 0;

    
    
`

export const ItemList = styled.li`
    width: 15rem;
    padding: 4px 8px 4px 16px;
    margin-left: 0px;
    margin-bottom: 0.14rem;
    background-color: ${(props)=> props.theme.colors.container};
    color: ${(props) => props.color};
    font-size: ${(props)=> props.theme.fontSize.sm};

    position: static;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    list-style: none;
    display: flex;
    justify-content: space-between;
    transition: ease-out all 300ms ;

    @media screen and (max-width: ${(props)=> props.theme.breakpoints.md}) {
        display: none
    }

    :hover{
        cursor: pointer;
        box-shadow: ${(props) => props.color} 0px 0px 18px -1px;
        transition: ease-out all 400ms ;
        width: 16rem;
        font-size: ${(props)=> props.theme.fontSize.md};
        background-color: ${(props)=> props.theme.colors.gray800};
    }
    
`

