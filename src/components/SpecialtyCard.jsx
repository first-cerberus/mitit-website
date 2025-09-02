import React from "react";
import { Link } from "react-router-dom";
import './SpecialtyCard.css'

export default function SpecialtyCard({ image, title, description, link }){


    return (
        <div className="specialty_card">
            <img src={image} alt="image" />
            <h2>{title}</h2>
            <p>{description}</p>
            <Link to={link} className="more-link">ДЕТАЛЬНІШЕ</Link>
        </div>
    );
}