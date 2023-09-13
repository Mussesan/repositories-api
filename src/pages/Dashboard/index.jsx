import React from "react";
import Profile from "./Profile";
import Filter from './Filter'
import Repositories2 from "./Repositories2";

import { Container, Sidebar, Main} from './styles'

export default function Dashboard(){

    const user = {
        login: "Mussesan",
        name: "Gustavo Musse",
        avatar_url: "https://avatars.githubusercontent.com/u/87155946?v=4",
        followers: 0,
        following: 0,
        company: 'Leaf Systems',
        blog: 'https://mussesan.github.io/mussesan-web/',
        location: 'Uberlândia - MG',
    };

    return(
        <Container>
            <Sidebar>
                <Profile user={user} />
                <Filter />
            </Sidebar>

            <Main>
                <Repositories2 />
            </Main>
        </Container>
    )
}


