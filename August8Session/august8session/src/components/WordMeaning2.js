import axios from "axios";
import { useState } from "react"

const WordMeaning2=()=>{
    const [word,setWord]=useState('')
    const [data, setData]=useState([]);

    const onChangeSearch=()=>{
        const axios_data=axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
        .then(axios_data=>{
            console.log(axios_data.data)
            setData(axios_data.data)
        })
    }
    const onChangeWord=(e)=>{
        setWord(e.target.value)
    }

    return <div className="container">
        <h1>Meaning Search....</h1>
      <input type='text' placeholder="Search" onChange={onChangeWord}/>
      <button onClick={onChangeSearch}>Search</button>

      <ul className="container1">
       {data.map((el,idx)=>{
        return el.meanings.map((elm,id)=>{
            return<>
           <li>PartsofSpeech-{elm.partOfSpeech}</li>
            <li>defination-{elm.definitions.map((e,i)=>{return e.definition})}</li>
            <li>Synonyms-{elm.synonyms.map((e,i)=>{return e})}</li>
            <li>Antonyms-{elm.antonyms.map((e,i)=>{return e})}</li>
            </>
        })

       })}
      </ul>
      <ul className="conatainer2">
        {data.map((el,idx)=>{
            return el.phonetics.map((elm,id)=>{
                return<>
                    
                    <audio controls source src={elm.audio}></audio>
                 </>
            })
        })}
      </ul>
</div>
}
export default WordMeaning2;