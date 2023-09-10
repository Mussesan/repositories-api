import styled from "styled-components";
import { Link } from 'react-router-dom'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  min-height: 100vh;
  padding-top: 0 1rem;
  
`

export const Logo = styled.img`
  width: 130px;
  border-radius: 100px;
  background: radial-gradient(ellipse at top, rgba(168, 52, 236, 0.83), transparent),
              radial-gradient(ellipse at bottom, rgba(64, 6, 255, 0.72), transparent);
  box-shadow: rgba(206, 143, 255, 0.52) 1px 0px 40px 8px;

  @media screen and (max-width: 1300px) {
    margin-top: -4rem;
  }
  
  
`

export const Title = styled.h1`
  font-size: 3.2rem;
  font-family: ${(props)=> props.theme.fontFamily.quantic};  
  color: ${(props) => props.theme.colors.text};

  @media screen and (max-width: 1300px) {
    font-size: 1.2rem;
    margin-top: 3rem;
  }
`

export const Form = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 583px;
`

export const Input = styled.input`
  background-color: rgba(0,0,0,0);
  max-width: 15rem;
  height: 2.5rem;
  font-size: 1.5rem;
  padding-inline: 1rem;
  color: ${(props)=> props.theme.colors.gray400};
  border-top-left-radius: 3rem;
  border-bottom-left-radius: 3rem;

  ::placeholder {
    color: ${(props) => props.theme.colors.gray700};
  }
`

export const Button = styled(Link)`

  display: flex;
  align-items: center;
  justify-content: center;

  border-top-right-radius: 3rem;
  border-bottom-right-radius: 3rem;
  border: 3px solid #252525;
  &:hover{
   background: radial-gradient(ellipse at top, rgba(97, 87, 103, 0.42), transparent),
              radial-gradient(ellipse at bottom, rgb(31, 50, 105), transparent);
  };

  background: transparent;
  width: 80px;
  height: 2.5rem;
  color: ${(props) => props.theme.colors.gray700};
  
  transition: background 0.3s;
  &:hover{
    color: white;
  }

`

export const TitleRepos = styled.h1`
  font-size: 1.3rem;
  color: ${(props) => props.theme.colors.text};
  margin-top: -1rem;
  font-weight: normal;  
  margin-bottom: 4rem;
`

export const spanIconsSocial = styled.span`
  background-color: red;
`