import React from 'react'
import {Link,Outlet} from 'react-router-dom'

export default function Dashboard() {
  return (
    <div>
    <h1>Dashboard</h1>
      <nav>
        <Link to="welcome">Welcome</Link>{" "}
        <Link to="survey">Survey</Link>
      </nav>
      <hr />
      <Outlet />
    </div>
  )
}
