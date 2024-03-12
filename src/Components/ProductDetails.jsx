import React, {Component} from "react";
import { ProductConsumer} from "./Context";
import { Link } from "react-router-dom";
import { data } from "../WomenData";

export default function ProductDetails(props) {
        const product = data.products.find((x)=> x.id === props.match.params.id)
        return(
                
                <div className="row">
                    <div className="col-2">
                       <img src={product.image} alt="" /> 
                    </div>

                    <div className="col-1">

                    </div>

                    <div className="col-1">

                    </div>
                </div>
        )
    }