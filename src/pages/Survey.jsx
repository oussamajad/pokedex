import React from 'react'
import { useParams,Link,Outlet } from 'react-router-dom'

export default function Survey() {
  const { qstnbr } = useParams()
  const qstnbrInt = parseInt(qstnbr)

  const prec = qstnbrInt === 1 ? 1 : qstnbr-1
  const next = qstnbrInt + 1


  return (
    <div className="countainer">
    <h1>Questionnaire 🧮 num : { qstnbrInt }</h1>
    {
      qstnbrInt === 1 ? (<Link className="btn btn-secondary disabled-link " to={`/survey/${prec}`}>Previous</Link>) : (<Link className="btn btn-primary" to={`/survey/${prec}`}>Previous</Link>)
    } 
       {" "}
       {
       qstnbrInt===10 ? 
       ( <Link className="btn btn-success" to="/results">Results</Link>) : 
       (<Link className="btn btn-primary" to={`/survey/${next}`}>Next</Link>)
        }
      
     
      <Outlet />
    </div>
  )
}
