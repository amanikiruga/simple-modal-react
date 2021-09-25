import { useState } from "react";
import Modal from "./Modal";
const App = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            <button onClick={() => setIsOpen(true)}> Open Popup</button>
            <Modal
                isOpen={isOpen}
                onCloseModalBtn={() => {
                    setIsOpen(false);
                }}
            >
                {" "}
                I think there is something here?{" "}
            </Modal>
        </div>
    );
};

export default App;
