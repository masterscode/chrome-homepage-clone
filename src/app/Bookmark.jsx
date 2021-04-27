import React from "react";
import solid from "../svg/sprites/solid.svg";
import BookmarkAction from "./Boomark-Action";

const Bookmark = ({title, address, favicon, action, clickHandler, handleRemove, bookmark}) => {
    return <>
        <div className="bookmark" >
            <button className="bookmark__action-launcher" onClick={()=>clickHandler(bookmark)}>
                <svg>
                    <use xlinkHref={`${solid}#ellipsis-v`}> </use>
                </svg>
            </button>
            {action && <BookmarkAction handleDelete = {handleRemove} bookmark={bookmark}/>}
            <a href={address} className="bookmark__icon">
                <img src={favicon} alt={`${title} - ${address}` }/>
            </a>
            <div className="bookmark__title"> {title}</div>
        </div>
    </>
}

export default Bookmark;