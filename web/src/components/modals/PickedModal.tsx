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
        <div>
            <button onClick={onClose}>X</button>
            <div className="title">

            </div>
            <div className="body">
                <p>
                    Do you wish to remove the picked item from the bucket?
                </p>
            </div>
            <div className="footer">
                <button onClick={onClose}>No</button>
                <button onClick={removeItem}>Yes</button>
            </div>
        </div>
    , modalRoot);
}