import React from "react";
import { Link } from "react-router-dom";
import './about.css';

export default function () {
    return (
        <div className="about-container">
            <div className="about-card">
                <div className="abt-title">
                    About this app.
                </div>
                <div className="abt-info">
                    This app uses the <Link to={{ pathname: 'https://acnhapi.com/' }}>ACNH API</Link> to render information,
                     utilizing Redux Toolkit to store the villager ids for redirects and api routes, as well as the icon for further customization.
                     This app was made with React to allow for seamless transitions between pages.
                </div>
            </div>
            <img src='https://gifdb.com/images/high/animal-crossing-isabelle-happy-clap-8jmkwb7zuznlgyyq.gif' alt='abt' />
        </div>
    )
}