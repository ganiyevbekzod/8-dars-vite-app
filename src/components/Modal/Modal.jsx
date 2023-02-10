import { children, useRef } from "react"
import "./Modal.css"
export const Modal=({modal,setmodal,children,title})=>{
    const overlayRef=useRef()
    const handleOverlay=(evt)=>{
        if(evt.target === overlayRef.current){
            setmodal(false)
        }
    }
    return(
        <div ref={overlayRef} onClick={(evt)=>handleOverlay(evt)} className={`overlay ${modal ? "open":""}`}>
            <div className="modal-wrapper w-50">
                <button  onClick={()=>setmodal(false)} className="btn btn-dark rounded-0 modal-button">&times;</button>
                <div className="modal-header">
                <h3 className="modal-title d-block mb-3">{title}</h3>
                <div className="modal-content">
                    {children}
                </div>
                </div>
            </div>   
        </div>
    )
}