import React from "react";
import Profile from "./Profile";
import Filter from './Filter'
import Repositories2 from "./Repositories2";

import { Container, Sidebar, Main} from './styles'



export default function Dashboard(){
    return(

        <Container>
            <Sidebar>
                <Profile />
                <Filter />
            </Sidebar>

            <Main>
                <Repositories2 />
            </Main>
        </Container>

    )
}


