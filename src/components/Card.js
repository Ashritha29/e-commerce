import React, { useState, useEffect } from 'react';
import {Productinfo,Searchinfo} from './Productinfo';

const Card = (props) => {
    return(
        <div className="col-11 col-md-6 col-lg-3 mx-0 mb-4">
            <div className='card p-0 overflow-hidden h-100 shadow'>
               <img src={props.img} className="card-img-top img-fluid"/>
               <div className='card-body'>
                    <h5 className='card-title'>{props.title}</h5>
                    <p className='card-text'>{props.prics}</p>
                    <button className="btn btn-success">Add to Cart</button>
                    <Link>More</Link>
               </div>
            </div>

        </div>
    )
    
}
export default Card;