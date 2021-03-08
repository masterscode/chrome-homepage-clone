import React from "react";


const Modal = props=>{
    return <>
        <section className="modal-container">
            <div className="modal">
                <div className="modal-header"> modal title here </div>
                <div className="modal-body">
                    <form action="">
                        <input type="text" name="title" id="title" placeholder='input bookmark title here'/>
                        <input type="url" name="address" id="address" placeholder='input bookmark address'/>
                        <button className='btn'>cancel</button>
                        <button className='btn'>done</button>
                    </form>

                </div>
            </div>
        </section>
    </>
}