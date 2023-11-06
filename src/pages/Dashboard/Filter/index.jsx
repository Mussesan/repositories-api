import React from "react"; 
import PropTypes from 'prop-types'

import {ItemList, ListLang, ClearButton} from "./styles";

export default function Filter({ langsOfRepos }){

    const seletores =  langsOfRepos.map(({name, count, color}) =>(
        
        <ItemList key={name} color={color}> 
            <span>{name}</span>
            <span>{count}</span>
        </ItemList> 
    ));

    return(
    <section>
        <ListLang>
           {seletores}
        </ListLang>
        <ClearButton>Limpar</ClearButton>

    </section>
    )
}

Filter.propTypes = {
    langsOfRepos: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            count: PropTypes.number.isRequired,
            color: PropTypes.string
        }).isRequired
    ).isRequired
}