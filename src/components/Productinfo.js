import React from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { AiFillGift } from "react-icons/ai";
import { GrDeliver } from "react-icons/Gr";
import axios from 'axios';
import { useState } from "react";
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
                            <h3>Shopping Cart</h3>
                            <hr />
                            <div class="row">
                                <div class="col-sm-4">
                                    <img className="h-30 w-100 mt-2" src="https://cdn11.bigcommerce.com/s-x49po/images/stencil/1280x1280/products/52781/70616/1595501208426_DEVOTION__ACRYLIC_PAINTING__ORIGINAL__SIGNED_ARTWORK__85879.1595667676.jpg?c=2" />

                                </div>

                                <div class="col-sm-8">

                                    <h1 class="text-left-right">
                                        <span class="left-text">Painting</span>
                                        <span class="byline ms-5">₹1000</span>
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
                                        <h6>
                                          <ul></ul>
                                            What Make Us Different From Others :- This Painting Is Made On 6 MM Heavy Wooden Mdf Board Which Makes It Super Solid And More Durable Than Other Paintings . This is perfect wall decor for living room which is Uv Coated Which Makes It Dust Resistant And Is Very Easy To Clean, Waterproof, UV Resistant, Fading Resistant Indoor.
                                            MultiPurpose Use :- Product category is artwork/wall art/posters /oil painting/Wall Decor. Product can be use as mural paintings for living room large, kitchen, dining room, bedroom, bathroom, bars and any other place for home decor, office or hotel walls decoration.
                                            Uniqueness :- This Wall paintings for home decoration Will Totally Give A New Stylish Look To Your Wall As This Piece Includes Three Themes It Is Vastu And Also Have The Essence of Abstract And Modern Art Which Makes This Unique And Stylish From Others and also it has frame for wall decoration And You Get The Feel of Three Different Art Forms.
                                            Best Gift Option :- Nice gift choice for birthday, Weeding , Anniversary, Christmas, Thanksgiving Day, New Year and any other important occasions. Perfect wall decoration paintings for living room, bedroom, kitchen, office.
                                            Make Your Wall Stylish :- This type of Wall arts paintings for home decor give your wall a stylish look and make a different look, MADE IN INDIA PRODUCT #VOCAL FOR LOCAL#

                                        </h6>
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