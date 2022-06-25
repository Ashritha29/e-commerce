import React, { useState, useEffect } from 'react';
import './Products.css';
//import {useCart} from 'react-use-cart';
import Card from './card';
import data from '../data';
const Products = () => {
    return (
        <div>
           <h1 className='text-center mt-3'>All items</h1>
           <section className='py-4 container'>
               <div className='row justify-content-center'>
                   {
                       data.productdata.map((item,index)=>{
                           return(
                               <Card img={item.img} title={item.title} desc={item.desc} price={item.price} key={index}/>
                           )
                       })
                   }
               </div>
           </section>
        </div>
    )
}
export default Products;