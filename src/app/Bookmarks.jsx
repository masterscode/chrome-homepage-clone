import React from "react";
import Bookmark from "./Bookmark";
import solid from "../svg/sprites/regular.svg";

const Bookmarks = ()=>{
    return <section className="bookmarks">
        <Bookmark/>
        <div className="bookmark">
            <div className="bookmark__icon">
                <svg style={{height: '2rem', width:'2rem', fill:'var(--primary-color)'}}>
                    <use xlinkHref={`${solid}#plus`}> </use>
                </svg>
            </div>
            <div className="bookmark__title"> add shortcut</div>
        </div>
    </section>
}

export default  Bookmarks;