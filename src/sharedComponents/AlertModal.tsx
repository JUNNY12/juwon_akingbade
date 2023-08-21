import { useState } from "react";

type ModalProps = {
    message: string;
};

export default function AlertModal({ message }: ModalProps) {
    const [showModal, setShowModal] = useState(false);

    const openModal = () => {
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };

    return (
        <>
            <button onClick={openModal}>Open Modal</button>

            {showModal && (
                <div className="modal">
                    <div className="modal-content">
                        <span className="close" onClick={closeModal}>
                            &times;
                        </span>
                        <p>{message}</p>
                    </div>
                </div>
            )}
        </>
    );
}
