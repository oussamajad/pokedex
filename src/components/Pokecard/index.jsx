import { left } from '@popperjs/core'
import React from 'react'

export default function Pokecard({key,label,picture,pokename,description}) {
  return (
                <div key={key} className="card" style={{width:300,marginBottom:10,marginRight:10,float:left}}>
                    <img className="card-img-top" src={picture} alt={label}/>
                    <div className="card-body">
                        <h5 className="card-title">{pokename}</h5>
                        <h6 className="card-title">{label}</h6>
                        <p className="card-text">{description}</p>
                    </div>
                </div>
  )
}
