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

    const reposList = [
        {
            name: 'Repo teste 1',
            description: 'Descrição do projetos aqui...',
            url_repo: 'https://github.com/mussesan/api-github',
            langs: 'React'
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
            langs: null
        },
    ];

    const LangsOfRepos = reposList
        .map((item) => item.langs)
        .reduce((accumulator, langs)=> {
            accumulator[langs] = accumulator[langs] + 1 || 1
            return accumulator
         }, {})

    delete LangsOfRepos.null
    
    const langColors = [
        {name: 'React', count: 9, color: '#00BFFF'},
        {name: 'Vue', count: 7, color: '#41B883'},
        {name: 'Angular', count: 6, color: '#dd0031'},
        {name: 'JavaScript', count: 8, color: '#f1c40f'},
        {name: 'TypeScript', count: 5, color: '#4169E1'},
        {name: 'Python', count: 1, color: '#52A6B0'},
        {name: 'Ruby', count: 2, color: '#950C10'},
        {name: 'C#', count: 4, color: '#853688'},
        {name: 'PHP', count: 3, color: '#7B7FB5'},
    ]

    return(
        <Container>
            <Sidebar>
                <Profile user={user} />
                <Filter langColors={langColors} />
            </Sidebar>

            <Main>
                <Repositories2 />
            </Main>
        </Container>
    )
}


