import styled from "styled-components";

export const ListLang = styled.ul`
    padding: 0;
    display: grid;
    grid-template-columns: auto;

    @media screen and (max-width: ${(props) => props.theme.breakpoints.md}) {
        grid-template-columns: auto auto;
    }    
`

export const ItemList = styled.button`
    width: 16rem;
    padding: 4px 8px 4px 16px;
    margin-left: 0px;
    margin-bottom: 0.14rem;
    border: none;
    background-color: ${(props)=> props.theme.colors.container};
    color: ${(props) => props.color};
    font-size: ${(props)=> props.theme.fontSize.sm};

    position: static;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    list-style: none;
    display: flex;
    justify-content: space-between;
    transition: ease-out all 300ms, transform 0.3s;
    
    &:hover, &.selected {
        cursor: pointer;
        box-shadow: ${(props) => props.color} 0px 0px 18px -1px;
        transition: ease-out all 400ms ;
        padding-left: 40px;
        width: 17.5rem;
        /* Novo */
        background-color: ${(props)=> props.color};    
        color: black;
        font-weight: bold;
        /* Novo */
    }    

    @media screen and (max-width: ${(props) => props.theme.breakpoints.md}) {
        border-radius: 20px;
        width: 12rem;
        text-align: center;
        &:hover{
            width: 12rem;
            padding-left: 52px;
            transition: ease-out all 400ms ;            
        }
    }
`
export const ClearButton = styled.button`
    background: transparent;
    border: none;
    position: absolute;
    color: ${(props)=> props.theme.colors.white };
    background-color: rgba(255,255,255,0.05);

    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    margin-left: 16px;
    margin-top: -16px;
    font-weight: bold;
    
    text-align: center;
    align-items: center;

    :hover {
        cursor: pointer;
        background-color: rgba(255,255,255,0.7);
        color: ${(props)=> props.theme.colors.black };
        box-shadow:  rgba(255,255,255,0.2) 0px 5px 10px 1px;
    }
`

