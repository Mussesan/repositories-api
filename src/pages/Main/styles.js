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
`

export const Title = styled.h1`
  font-size: 2.2rem;
  color: ${(props) => props.theme.colors.text}
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
`

export const spanIconsSocial = styled.span`
  background-color: red;
`