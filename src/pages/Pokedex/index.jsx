import axios from 'axios'
import React,{ useState } from 'react'
import Pokecard from '../../components/Pokecard'

export default function Pokedex() {
    const [data,setData] = useState([])
    const [namepoke,setNamepoke] = useState("")
    const [loading,setLoading] = useState(true)

function GetPokemon(){
const url="https://pokeapi.glitch.me/v1/pokemon/"

const getdata = async () => {
    setLoading(true)
    try {
        const {date:response} = await axios.get(url+namepoke)
        setData(response)
    } catch (error) {
        console.error(error.message)
    }
    setLoading(false)
}
    getdata()
}

  return (
    <div>
        <h1>Pokedex 😎</h1>

        <div class="input-group mb-3">
            <input onChange={evt => setNamepoke(evt.target.value)} type="text" class="form-control" placeholder="Pokemon name" aria-label="Pokemon name" aria-describedby="button-addon2"/>
            <button onClick={()=>GetPokemon()} class="btn btn-outline-success" type="button" id="button-addon2">Find !</button>
        </div>
        {loading && <div>No Pokemon selected !</div> }
        {!loading &&(
            data.map((pokemon)=>(
                <Pokecard
                key={pokemon.number}
                label={pokemon.species}
                picture={pokemon.sprite}
                pokename={pokemon.name}
                description={pokemon.description}
                />
            ))
                )}
    </div>
  )
}
