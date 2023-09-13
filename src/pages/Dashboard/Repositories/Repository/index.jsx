import React from "react";

import { RepoSquare } from "./styles";

export default function Repository(){

    const repos = [
        {
            title: "projeto-nome",
            detail: "detalhes do projeto aqui ...",
            lang: "JavaScript",
            projUrl: "url de teste aqui"
        },
        {
            title: "projeto-nome",
            detail: "detalhes do projeto aqui ...",
            lang: "JavaScript",
            projUrl: "url de teste aqui"
        },
        {
            title: "projeto-nome",
            detail: "detalhes do projeto aqui ...",
            lang: "JavaScript",
            projUrl: "url de teste aqui"
        },
        {
            title: "projeto-nome",
            detail: "detalhes do projeto aqui ...",
            lang: "JavaScript",
            projUrl: "url de teste aqui"
        },
        {
            title: "projeto-nome",
            detail: "detalhes do projeto aqui ...",
            lang: "JavaScript",
            projUrl: "url de teste aqui"
        },
        {
            title: "projeto-nome",
            detail: "detalhes do projeto aqui ...",
            lang: "JavaScript",
            projUrl: "url de teste aqui"
        },]

    return (
        <>{repos.map(()=> <RepoSquare>
                {}
                </RepoSquare>
            )}
        </>
    )
}
