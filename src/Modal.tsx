import ReactDOM from "react-dom";

type ModalProps = {
    isOpen: boolean;
    children: React.ReactNode;
    onCloseModalBtn: () => void;
};

const Modal = (props: ModalProps) => {
    if (!props.isOpen) return null;
    return ReactDOM.createPortal(
        <div>
            <div className="non-modal-overlay" />
            <div className="modal">
                <button onClick={props.onCloseModalBtn}>Close Button</button>
                {props.children}
            </div>
        </div>,
        document.getElementById("modal-root") as Element
    );
};

export default Modal;
