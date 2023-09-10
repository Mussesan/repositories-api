import React from "react"; 

import {ItemList, ListLang} from "./styles";

export default function Filter(){

    const ProgramLang = [
        {name: 'TypeScript', count: 4, color: '#4169E1'},
        {name: 'React', count: 2, color: '#00BFFF'},
        {name: 'Vue', count: 7, color: '#41B883'},
        {name: 'Python', count: 1, color: '#52A6B0'},
        {name: 'JavaScript', count: 3, color: '#f1c40f'},
        {name: 'Angular', count: 6, color: '#dd0031'},
        {name: 'Ruby', count: 9, color: '#950C10'},
        {name: 'C', count: 8, color: '#085E9F'},
        {name: 'C++', count: 1, color: '#005697'},
        {name: 'C#', count: 4, color: '#853688'},
        {name: 'PHP', count: 3, color: '#7B7FB5'},
        
    ]

    return(
    <section>
        <ListLang>
            {ProgramLang.map((item)=>
                 <ItemList 
                    color={item.color}
                    key={item.name}> {item.name}
                    <span>{item.count}</span>
                </ItemList> )}
        </ListLang>

    </section>
    )
}