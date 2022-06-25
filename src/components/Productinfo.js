import React from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { AiFillGift } from "react-icons/ai";
import { GrDeliver } from "react-icons/Gr";
import axios from 'axios';
import { useState } from "react";

function Searchinfo(i,props){
    for(let j=0;j<20;j++)
    {
        if(props[j].id==i)
        {
            
        }
    }
}

function Productinfo() {
    let [num, setNum] = useState(0);
    let incNum = () => {
        if (num < 10) {
            setNum(Number(num) + 1);
        }
    };
    let decNum = () => {
        if (num > 0) {
            setNum(num - 1);
        }
    }
    let handleChange = (e) => {
        setNum(e.target.value);
    }
    return (
        <div className='row mt-3' >
            {/*first*/}
            <div className="row">
                <div className="col-sm-8">
                    <div className="card ms-3 mt-4" style={{ width: "100%", height: "100%" }}>
                        <div className="card-body">
                            <h3>Product Information</h3>
                            <hr />
                            <div class="row">
                                <div class="col-sm-4">
                                    <img className="h-30 w-100 mt-2" src={props.img} />
                                </div>
                                <div class="col-sm-8">
                                    <h1 class="text-left-right">
                                        <span class="left-text">{props.title}</span>
                                        <span class="byline ms-5">{props.prics}</span>
                                    </h1>
                                    <h6 className="text-success">In Stock</h6>
                                    <h6>Sold by Personalized World < AiFillGift /></h6>
                                    <h5><GrDeliver /> Shop Easy Delivered</h5>
                                    <div className="col-sm-4">
                                        <div class="input-group">
                                            <div class="input-group-prepend">
                                                <button class="btn btn-outline-primary" type="button" onClick={decNum}>-</button>
                                            </div>
                                            <input type="text" class="form-control" value={num} onChange={handleChange} />
                                            <div class="input-group-prepend">
                                                <button class="btn btn-outline-primary" type="button" onClick={incNum}>+</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        
                                    </div>
                                </div>
                            </div>
                            <hr />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default Productinfo