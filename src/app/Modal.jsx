import React from "react";


const Modal = props=>{
    return <>
        <section className="modal-container">
            <div className="modal">
                <div className="modal-header">modal title here </div>
                <div className="modal-body">
                    {props.children}

                </div>
            </div>
        </section>
    </>
}

export default Modal;