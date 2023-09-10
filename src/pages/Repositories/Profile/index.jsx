import React from "react"

import { MdGroup, MdWork, MdLocationOn, MdOutlineLink } from 'react-icons/md'

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
                <Data>
                    <p><MdGroup /></p>
                    30 seguidores 10 seguindo
                </Data>
                <Data>
                    <p><MdWork /></p>
                    Leaf Systems
                </Data>
                <Data>
                    <p><MdLocationOn /></p>
                    Uberlândia MG
                </Data>
                <Data>
                    <p><MdOutlineLink /></p>
                    <a href="https://mussesan.github.io/mussesan-web/"
                        target="_blank" rel="noreferrer"
                        >mussesan.github.io/mussesan-web/
                    </a>
                </Data>
            </Inner>
        </Container>
    )
}