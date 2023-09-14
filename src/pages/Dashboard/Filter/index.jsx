import React from "react"; 
import PropTypes from 'prop-types'
import {ItemList, ListLang, ClearButton} from "./styles";

export default function Filter({ langColors }){

    return(
    <section>
        <ListLang>
            {langColors.map((item)=>
                 <ItemList color={item.color} key={item.name}
                    > {item.name} 
                        <span>{item.count}</span>
                </ItemList> )}
        </ListLang>
        <ClearButton>Limpar</ClearButton>

    </section>
    )
}

Filter.propTypes = {
    langColors: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            count: PropTypes.number.isRequired,
            color: PropTypes.string
        }).isRequired
    ).isRequired
}