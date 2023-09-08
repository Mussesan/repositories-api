import React from "react";

import { Container, Sidebar, Main} from './styles'

import Profile from "./Profile";

export default function Repositories(){
    return(

        <Container>
            <Sidebar>
                <Profile />
            </Sidebar>

            <Main>Main</Main>
        </Container>

    )
}


