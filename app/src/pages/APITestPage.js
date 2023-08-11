import { useEffect, useState } from "react";
import { add_record, get_all_from_location,add_record_gen } from "../api/queue";
import {gen_data} from "../data/data_gen";

export const APITestPage = ()=>{
    const [datalist, setDatalist] = useState([]); 

    useEffect(() => {
        get_all_from_location('MailCenter')
        .then((data) =>{
            console.log(data)
            setDatalist(data)

        }).catch(err => alert(err));
    }, []);

    const handle_gen = ()=>{
        const l = gen_data()

        // l.forEach(
        //     entry=>{
        //         add_record_gen(entry[0],entry[1],entry[2],entry[3])
        //     }
        // )
    }
    return (
        <div class="hero-body">
            <div class="container">
            <div class="columns is-multiline is-mobile is-centered">
    
                <div class = "column is-two-thirds is-flex is-flex-direction-column">
                    <span class = "title is-4">
                        API Test 
                    </span>
                    {datalist.map(item => (
                        <li key={item.NetID}>
                            <span>{item.NetID}</span>
                            <span>{item.QueueLength}</span> 
                            <span>{item.TimeStamp.getDate()}</span> 
                        </li>
                    ))}
                    <a class = "button" onClick={handle_gen}>Generate</a>
            
                </div>

            </div>
            </div>
        </div>

    )
}