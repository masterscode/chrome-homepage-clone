import React from "react";
import solid from "../svg/sprites/solid.svg";

const Bookmark = (props) => {
    return <>
        <div className="bookmark">
            <button className="bookmark__action-launcher">
                <svg>
                    <use xlinkHref={`${solid}#ellipsis-v`}> </use>
                </svg>
            </button>
            <div className="bookmark__icon">
                <img src="logo192.png" alt="bookmark title"/>
            </div>
            <div className="bookmark__title"> title here</div>
        </div>

    </>
}

export default Bookmark;