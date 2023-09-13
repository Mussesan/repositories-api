import React from "react"
import PropTypes  from "prop-types"
import { MdGroup, MdWork, MdLocationOn, MdOutlineLink } from 'react-icons/md'

import { Container, Header, Avatar, Login, Name, Inner, Data } from "./styles"

function Profile({ user }){

    return(
        <Container>
            <Header>
                <Avatar src={user.avatar_url} />
                <Login>{user.login}</Login>
                <Name>{user.name}</Name>
            </Header>

            <Inner>
                <Data>
                    <p><MdGroup /></p>
                    {user.followers}&nbsp;<i>seguidores</i>&nbsp;&middot;&nbsp;{user.following}&nbsp;<i>seguindo</i>
                </Data>
                    { user.company && (
                        <Data>
                            <p><MdWork /></p>
                            {user.company}
                        </Data>
                    ) }
                <Data>
                    <p><MdLocationOn /></p>
                    {user.location}
                </Data>
                <Data>
                    <p><MdOutlineLink /></p>
                    <a href="https://mussesan.github.io/mussesan-web/"
                        target="_blank" rel="noreferrer"
                        >{user.blog}
                    </a>
                </Data>
            </Inner>
        </Container>
    )
};

Profile.propTypes= {
    user: PropTypes.shape({
        login: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        avatar_url: PropTypes.string.isRequired,
        followers: PropTypes.number.isRequired,
        following: PropTypes.number.isRequired,
        company: PropTypes.string,
        blog: PropTypes.string,
        location: PropTypes.string,
    }).isRequired,
}

export default Profile