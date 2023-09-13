import React from "react"

import { Card, Name, Description, Footer,Lang, Link } from './styles'

export default function Repo2(){

    return (
    <Card>
        <Name>Repo Name</Name>
        <Description>Repo Descr</Description>
        <Footer >
            <Lang>Repo Lang</Lang>
            <Link href="https://github.com/Mussesan" target="_blank">Ver</Link>
        </Footer>
    </Card>
    )
}