import ReactDOM from "react-dom";

const modalRoot = document.getElementById('modal-root');

interface PickedModalProps {
    isOpen: boolean;
    item: string;
    onClose: () => void;
    removeItem: () => void;
}

// if the app had other kinds of modals, 
// it would need a separate Modal root component that would handle adding a specific modal (modal child) to DOM
export function PickedModal({ isOpen, item, onClose, removeItem }: PickedModalProps) {
    if (!modalRoot || !isOpen)
        return null;
    
    return ReactDOM.createPortal(
        <>
            <div id="overlay" className="fixed top-0 left-0 right-0 bottom-0 bg-black/70"></div>
            <div id="modal" className="fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] p-4 z-50 bg-zinc-800 text-zinc-100 rounded-md shadow-lg">
                <button className="top-4 right-4 absolute text-center hover:text-zinc-400 w-4 h-4" onClick={onClose}>
                    <b className="flex justify-center items-center">X</b>
                </button>
                <div className="flex flex-col items-center mt-5 gap-1">
                    <div className="title text-center w-full">
                        You picked <b>{item}</b>!
                    </div>
                    <div className="body">
                        <p>
                            Do you wish to remove the picked item from the bucket?
                        </p>
                    </div>
                    <footer className="flex mt-2 gap-6">
                        <button className="button" onClick={onClose}>No</button>
                        <button className="cancel-button" onClick={removeItem}>Yes</button>
                    </footer>
                </div>
            </div>
        </>
    , modalRoot);
}