import React from "react"

import { Container, Header, Avatar, Login, Name, Inner, Data } from "./styles"

export default function Profile(){



    return(
        <Container>
            <Header>
                <Avatar src="https://avatars.githubusercontent.com/u/87155946?v=4" />
                <Login>Mussesan</Login>
                <Name>Gustavo Musse</Name>
            </Header>

            <Inner>
                <Data>30 seguidores 10 seguindo</Data>
                <Data>Musse Dev</Data>
                <Data>Uberlândia MG</Data>
                <Data>
                    <a href="https://mussesan.github.io/mussesan-web/"
                        target="_blank" rel="noreferrer"
                    >mussesan.github.io/mussesan-web/</a>
                </Data>
            </Inner>
        </Container>
    )
}