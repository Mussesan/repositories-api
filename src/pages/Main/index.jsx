import React, {useState} from "react";
import { MdSearch } from 'react-icons/md'

import githublogo from '../../assets/images/github-logo.svg'

import { Container, Logo, Title, TitleRepos, Form, Input, Button} from "./styles";

export default function MainPage() {

  const [login, setLogin] = useState('')

  return (
    <Container>
      <Logo src={githublogo} alt="GitHub Logo" />
      <Title>API GitHub</Title>
      <TitleRepos>Repositorios</TitleRepos>
      <Form >
        <Input placeholder="Nome do usuário" value={login} onChange={(event)=> setLogin(event.target.value)} />
        <Button to={`${login.toLowerCase()}/repositories`}>
          <MdSearch size={36}/>
        </Button>
      </Form>
    </Container>
  );
}
