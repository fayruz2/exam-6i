import React, { useEffect, useState } from 'react';
import Navbar from "../components/Navbar"
import { Link, Route } from "react-router-dom"
import movies from "../data/movies"
import Cinema from "../components/Cinema"
import Anime from "../components/Anime"
import Cartoon from "../components/Cartoon"
import Teatr from "../components/Teatr"

const App = () => {
    const [books, setBooks] = useState(movies)
    const search = (q) => {
        const filterBooks = movies.filter((item) => item.title.includes(q))
        setBooks(filterBooks)
    }
    useEffect(()=>{
        document.body.style.backgroundImage="url(https://www.crushpixel.com/big-static7/preview4/color-explosion-61250.jpg)"
    })

    return (
        <div className="container border shadow-sm">
            <Navbar search={search} />
            <Route path="/" exact>
                <h1 className="text-center">Science</h1>
                <div>
                    <img className="image1" src="https://images.adsttc.com/media/images/5f7d/fef2/63c0/170a/9100/0273/newsletter/Jiangnan_Photography.jpg?1602092773" alt="" />
                </div>

                <div className="cinema row mt-5 mb-4 mt-5">

                    {books.map((item) => (
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
            </Route>
            <Route path="/cinema">
                <Cinema />
            </Route>
            <Route path="/anime">
                <Anime/>
            </Route>
            <Route path="/cartoon">
                <Cartoon/>
            </Route>
            <Route path="/look/:id">
                <Teatr/>
            </Route>
        </div>
    );
};

export default App;