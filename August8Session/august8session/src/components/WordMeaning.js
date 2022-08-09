
/*import React, { useEffect, useState } from "react";
import axios from 'axios'

const WordMeaning=()=>{
    const[word,setWord]=useState('')
    const[data,setData]=useState([]);

    
        useEffect(()=>{

            const fn=async()=>{
            const axios_data=await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
                console.log(axios_data)
                .then(axios_data=>{
                    setData(axios_data)
                })    
                }
                fn();
            },[])
    

    const onChangeWord=(e)=>{
        setWord(e.targrt.value);
        
    }
    

    return<div>
        <div>
            <input type='text' placeholder="Search" onChange={onChangeWord}/>
            <button/>
            <div>
                {data.map((el,idx)=>{
                    return<li key={idx}>{el.data.id}</li>
                })}
            </div>
        </div>
    </div>


}
export default WordMeaning;*/