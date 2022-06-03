import ReactDOM from "react-dom";

const modalRoot = document.getElementById('modal-root');

interface PickedModalProps {
    isOpen: boolean;
    onClose: () => void;
    removeItem: () => void;
}

// if the app had other kinds of modals, 
// it would need a separate Modal root component that would handle adding a specific modal (modal child) to DOM
export function PickedModal({ isOpen, onClose, removeItem }: PickedModalProps) {
    if (!modalRoot || !isOpen)
        return null;
    
    return ReactDOM.createPortal(
        <>
            <div id="overlay" className="fixed top-0 left-0 right-0 bottom-0 bg-black/70"></div>
            <div id="modal" className="fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] p-6 z-50 bg-zinc-800 text-zinc-100 rounded">
                <button onClick={onClose}>X</button>
                <div className="title">

                </div>
                <div className="body">
                    <p>
                        Do you wish to remove the picked item from the bucket?
                    </p>
                </div>
                <div className="footer">
                    <button className="button" onClick={onClose}>No</button>
                    <button className="button" onClick={removeItem}>Yes</button>
                </div>
            </div>
        </>
    , modalRoot);
}