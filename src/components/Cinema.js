import React, { useEffect } from 'react';
import CinemaData from "./CinemaForm";
import Teatr from "../components/Teatr"
import { Link, Route } from "react-router-dom"



const Cinema = () => {
    useEffect(()=>{
        document.body.style.backgroundImage="url(https://wallpaperaccess.com/full/504616.jpg)"
    })
    return (

        <div className="container shadow-sm">
            <h1 className="text-center">Cinema</h1>
            <div className="row mt-3 mb-4 mt-5">
                {CinemaData.map(item => (
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

export default Cinema;