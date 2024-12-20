import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';

function Mobilenewpage() {
    const [electronics, myproductlist] = useState([]);
    const apicall = () => {
        axios.get(' https://api.escuelajs.co/api/v1/products').then((d) => {
            console.log(d.data);
            myproductlist(d.data)
        })
    }
    useEffect(() => {
        apicall();
    }, []);


    return (
        <div className='container-fluid'>
            <div className='row'>
                {electronics.map((d) => {
                    return (
                        <div className='col-md-4 mt-3' key={d.id}>
                           <img src={d.image}alt="2"width="10%" height="100"/>
                           <h2>Price: {d.price}</h2>
                           <Link to={"/detailspage"} className='btn btn-success'>Details</Link>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Mobilenewpage