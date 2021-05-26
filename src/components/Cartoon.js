import React, { useEffect } from 'react';
import { Link, Route } from "react-router-dom"
import CartoonData from "./CartoonForm";
import Teatr from "../components/Teatr"


const Cartoon = () => {
    useEffect(()=>{
        document.body.style.backgroundImage="url(https://100velikih.com/uploads/images/e/2/7/e27f5be834299adeacb55409199cdc17.jpg)"
    })
    return (
        <div>
            <h1 className="text-center">Cartoon</h1>
            <div className="row mt-3 mb-4 mt-5">
                {CartoonData.map(item => (
                    <div className="col-3 mt-4">
                        <div className="card books-item">
                            <img className="tell card-img-top" src={item.img} alt="" />
                            <div className="card-body">
                                <h2 className="text1 card-title">{item.title}</h2>
                                <Link to={"/look/"+item.id}>
                                        <button className="let btn btn-danger rounded">Look</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <Route path="/look/:id">
                <Teatr/>
            </Route>
        </div>
    );
};

export default Cartoon;