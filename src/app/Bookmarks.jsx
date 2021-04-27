import React from "react";
import Bookmark from "./Bookmark";
import {BookmarksContext} from "../contexts/contexts";
import {bookmarksDB, uuid} from './bookmarks-store';
import solid from "../svg/sprites/regular.svg";
import Modal from './Modal';


const Bookmarks = () => {
    const [bookmarks, setBookmark] = React.useState(bookmarksDB);
    const [modal, setModal] = React.useState(false);
    const {Provider} = BookmarksContext;

    const handleAction = ({id}) => {
        const bookmark = bookmarks.map((book) => {
            book.id === id ? (book.action = !book.action) : (book.action = false);
            return book;
        });
        setBookmark(bookmark);
    };

    const removeBookmark = (BookMark) => {
        const bookmark = bookmarks.filter((bkmark) => bkmark !== BookMark);
        setBookmark(bookmark);
    };

    const editBookmark = (bookmark) => {
        const allBookmarks = {...bookmarks};

    }

    const handleModal = () => {
        setModal(true);

    };

    const context = {bookmarksDB,};

    return (
        <>
            <Provider value={context}>
                <section className="bookmarks">
                    {bookmarks.map((bookmark) => (
                        <Bookmark
                            key={bookmark.id}
                            {...bookmark}
                            bookmark={bookmark}
                            clickHandler={handleAction}
                            index={bookmark.id}
                            handleRemove={removeBookmark}
                        />
                    ))}

                    <div className="bookmark" onClick={handleModal}>
                        <div className="bookmark__icon">
                            <svg
                                style={{
                                    height: "2rem",
                                    width: "2rem",
                                    fill: "var(--primary-color)",
                                }}
                            >
                                <use xlinkHref={`${solid}#plus`}></use>
                            </svg>
                        </div>
                        <div className="bookmark__title"> add shortcut</div>
                    </div>
                </section>
            </Provider>
            {modal && <Modal> </Modal>}
        </>
    );
};

export default Bookmarks;
