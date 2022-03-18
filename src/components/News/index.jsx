import React from 'react'

export default function News({Key,baseAsset,lastPrice,prevClosePrice}) {
  return (
      (lastPrice < prevClosePrice ? 
      <li Key={Key}>{baseAsset} : <span style={{color:"#ff7b7b"}}> ⬇️ {lastPrice}</span></li> :
      <li Key={Key}>{baseAsset} : <span style={{color:"#42e342"}}> ⬆️ {lastPrice}</span></li>)
    
  )
}
