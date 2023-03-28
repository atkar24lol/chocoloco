import React, { useState } from 'react';

function Modal() {
    const [isOpen, setIsOpen] = useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    return (
        <div>
            <button onClick={openModal}>Открыть модальное окно</button>
            {isOpen && (
                <div className="modal">
                    <div className="modal-content">
                        <span className="close" onClick={closeModal}>
                            &times;
                        </span>
                        <p>Это модальное окно!</p>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Modal;
