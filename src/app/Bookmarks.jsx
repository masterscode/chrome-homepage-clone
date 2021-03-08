import React from "react";
import Bookmark from "./Bookmark";
import solid from "../svg/sprites/regular.svg";

const Bookmarks = () => {
    const [bookmarks, setBookmark] = React.useState([
        {title: 'localhost', address: 'localhost', favicon: 'logo192.png', action: false},
        {title: 'facebook', address: 'https://www.facebook.com', favicon: 'logo192.png', action: false},
        {title: 'twitter', address: 'https://www.twitter.com', favicon: 'logo192.png', action: false},
        {title: 'instagram', address: 'https://www.instagram.com', favicon: 'logo192.png', action: false},
        {title: 'youtube', address: 'https://www.youtube.com', favicon: 'logo192.png', action: false},
        {title: 'gmail', address: 'https://www.gmail.com', favicon: 'logo192.png', action: false},
    ]);
    const [modal, setModal] = React.useState(false);

    const handleAction = (index) => {
        const bookmark = bookmarks.map((book, i) => {
            i === index ? book.action = !book.action : book.action = false;
            return book;
        });
        setBookmark(bookmark);
    };

    const removeBookmark = (BookMark)=>{
        const bookmark = bookmarks.filter((bookmark, index)=>bookmark !== BookMark);
        setBookmark(bookmark)
    }

    const handleModal = ()=>{
        setModal(true);
        window.alert('modal is open')
    }

    return <section className="bookmarks" >
        {
            bookmarks.map((bookmark, index) => (
                <Bookmark key={index} {...bookmark} bookmark={bookmark} clickHandler={handleAction} index={index} handleRemove = {removeBookmark} />
            ))
        }

        <div className="bookmark" onClick={handleModal}>
            <div className="bookmark__icon">
                <svg style={{height: '2rem', width: '2rem', fill: 'var(--primary-color)'}}>
                    <use xlinkHref={`${solid}#plus`}> </use>
                </svg>
            </div>
            <div className="bookmark__title"> add shortcut</div>
        </div>
    </section>
}

export default Bookmarks;