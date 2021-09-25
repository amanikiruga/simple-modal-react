type ModalProps = {
    isOpen: boolean;
    children: React.ReactNode;
    onCloseModalBtn: () => void;
};

const Modal = (props: ModalProps) => {
    if (!props.isOpen) return null;
    return (
        <div>
            <div className="non-modal-overlay" />
            <div className="modal">
                <button onClick={props.onCloseModalBtn}>Close Button</button>
                {props.children}
            </div>
        </div>
    );
};

export default Modal;
