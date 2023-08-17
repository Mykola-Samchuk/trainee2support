import React from "react";
import "./modal.scss";

export default function Modal({children, modalActive, setModalActive}) {
    return(
        <div className={`modal ${modalActive ? "active" : ""}`}>
            <div className="modal-content" onClick={(e)=>{e.stopPropagation()}}>
                <div className="btn-close" onClick={(e)=>{setModalActive(false)}}></div>
                {children}
            </div>
        </div>
    )
}
