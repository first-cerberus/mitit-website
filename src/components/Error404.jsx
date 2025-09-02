import React from "react";
import './Error404.css';

export default function Error404(){
    return (
        <div className="app">
            <div className="error">
                404
            </div>
            <div className="img">
                <img src="./img/cat.png" alt="cat" />
                <h1 className="okak">ОН ЯК</h1>
            </div>  
        </div>
    );
}