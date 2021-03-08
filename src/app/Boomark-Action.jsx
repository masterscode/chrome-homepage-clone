import React from "react";

const BookmarkAction = ({handleDelete, bookmark})=>{
    return (
        <div className="bookmark-action">
            <div className="action">edit bookmark</div>
            <div className="action" onClick={()=>handleDelete(bookmark)}>remove</div>
        </div>
    )
}

export default BookmarkAction;