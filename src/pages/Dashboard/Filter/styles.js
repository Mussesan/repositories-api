import styled from "styled-components";

export const ListLang = styled.ul`
    padding: 0;

    
    
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
    transition: ease-out all 300ms, transform 0.3s ;
    

    @media screen and (max-width: ${(props)=> props.theme.breakpoints.md}) {
        display: none
    }

    &:hover, &.selected {
        cursor: pointer;
        box-shadow: ${(props) => props.color} 0px 0px 18px -1px;
        transition: ease-out all 400ms ;
        width: 16.5rem;
        padding-left: 32px;
        background-color: ${(props)=> props.theme.colors.gray800};
        
    }    
`
export const ClearButton = styled.button`
    background: transparent;
    border: none;
    color: ${(props)=> props.theme.colors.white };
    background-color: rgba(255,255,255,0.05);

    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    margin-left: 16px;
    margin-top: -16px;
    padding: 16px 16px 0px;
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

