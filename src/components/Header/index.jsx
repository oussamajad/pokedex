import React,{useEffect,useState} from 'react'
import News from '../../components/News'
import axios from 'axios'
import {Link,Outlet} from 'react-router-dom'

export default function Header() {
    const [loading,setLoading] = useState(true)
    const [data,setData] = useState([])
    
    useEffect(() => {
      const fetchData = async () =>{
        setLoading(true);
        try {
          const {data: response} = await axios.get('https://api.wazirx.com/sapi/v1/tickers/24hr');
          setData(response);
        } catch (error) {
          console.error(error.message);
        }
        setLoading(false);
      }
    
      fetchData();
    }, [data]);

    
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark" >
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">TEST</Link>
            
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item active">
                            <Link className="nav-link" to="freelances">Freelances</Link>
                        </li>

                        <li className="nav-item active">
                            <Link className="nav-link" to="pokedex">Pokedex</Link>
                        </li>


                        <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Dashboard
                        </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <li><Link className="dropdown-item" to="dashboard/welcome">Welcome</Link></li>
                                <li><Link className="dropdown-item" to="dashboard/survey">Survey</Link></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        {loading && <div>Loading...</div>}
          {!loading && (
            <div class="ticker-wrapper-h">
                <div class="heading">Crypto</div>
                <ul class="news-ticker-h">
                {data.map((crypto,index)=>(
                  <News
                  key = {`${crypto.symbol}-${index}`}
                  baseAsset = {crypto.baseAsset}
                  lastPrice = {crypto.lastPrice}
                  prevClosePrice = {crypto.highPrice}
                  />
                ))}
                </ul>
            </div>
          )}
        <Outlet />
    </div>
  )
}
