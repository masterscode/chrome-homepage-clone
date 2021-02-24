import React from "react";
import solid from "../svg/sprites/solid.svg";


const SearchField = () =>{
    return <>
        <section className="search-field">
            <svg className="icon">
                <use xlinkHref ={`${solid}#search`}> </use>
            </svg>
            <input type="search" name="search" id="search" placeholder='Search Google or type a URL' />
            <svg className="icon">
                <use xlinkHref = {`${solid}#microphone`}> </use>
            </svg>

        </section>
    </>
}

export default SearchField;