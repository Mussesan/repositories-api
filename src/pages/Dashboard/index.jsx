import React from "react";
import Profile from "./Profile";
import Filter from './Filter'
import Repositories2 from "./Repositories2";
import { getLangsFrom } from "../../services/api";

import { Container, Sidebar, Main} from './styles'

  
export default function Dashboard(){
    
    const user = {
        login: "Mussesan",
        name: "Gustavo Musse",
        avatar_url: "https://avatars.githubusercontent.com/u/8 7155946?v=4", //apagar espaço
        followers: 23,
        following: 42,
        company: 'GM Tech Service',
        blog: 'https://mussesan.github.io/mussesan-web/',
        location: 'Uberlândia - MG',
    };

    // eslint-disable-next-line no-unused-vars
    const reposList = [
        {
            name: 'Repo teste 1',
            description: 'Descrição do projetos aqui...',
            url_repo: 'https://github.com/mussesan/api-github',
            langs: ['React','Next','TailwindCSS']
        },
        {
            name: 'Repo teste 2',
            description: 'Descrição do projetos aqui...',
            url_repo: 'https://github.com/mussesan/api-github',
            langs: 'Vue'
        },
        {
            name: 'Repo teste 3',
            description: 'Descrição do projetos aqui...',
            url_repo: 'https://github.com/mussesan/api-github',
            langs: 'React'
        },
        {
            name: 'Repo teste 4',
            description: 'Descrição do projetos aqui...',
            url_repo: 'https://github.com/mussesan/api-github',
            langs: 'PHP'
        },
        {
            name: 'Repo teste 4',
            description: 'Descrição do projetos aqui...',
            url_repo: 'https://github.com/mussesan/api-github',
            langs: 'Vue'
        },
        {
            name: 'Repo teste 4',
            description: 'Descrição do projetos aqui...',
            url_repo: 'https://github.com/mussesan/api-github',
            langs: 'Ruby'
        },
        {
            name: 'Repo teste 4',
            description: 'Descrição do projetos aqui...',
            url_repo: 'https://github.com/mussesan/api-github',
            langs: 'C#'
        },
    ];

    const langsOfRepos = getLangsFrom(reposList)

    return(
        <Container>
            <Sidebar>
                <Profile user={user} />
                <Filter langsOfRepos={langsOfRepos} />
            </Sidebar>

            <Main>
                <Repositories2 />
            </Main>
        </Container>
    )
}


