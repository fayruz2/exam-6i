import React, {useEffect} from 'react';
import { Link, Route } from "react-router-dom"
import AnimeData from "./AnimeForm"
import Teatr from "../components/Teatr"

const Anime = () => {
    useEffect(()=>{
        document.body.style.backgroundImage="url(https://play-lh.googleusercontent.com/B-54D4I4gRPKKAUpSPKRGhO1kF_ds5VB3uvu1wyY0bJ6xHdMOWKWOrcbtYUve9cDbQ)"
    })
    return (
        <div>
            <h1 className="text-center">Cinema</h1>
            <div className="row mt-3 mb-4 mt-5">
                {AnimeData.map(item => (
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

export default Anime;