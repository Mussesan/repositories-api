import React from "react"; 

import {ItemList, ListLang, ClearButton} from "./styles";

export default function Filter(){

    const ProgramLang = [
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
    <section>
        <ListLang>
            {ProgramLang.map((item)=>
                 <ItemList color={item.color} key={item.name}
                    > {item.name} 
                        <span>{item.count}</span>
                </ItemList> )}
        </ListLang>
        <ClearButton>Limpar</ClearButton>

    </section>
    )
}