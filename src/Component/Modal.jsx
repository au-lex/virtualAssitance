import React from 'react';

const Modal = ({ isOpen, closeModal }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50">
            <div className="bg-white p-8 rounded shadow-lg w-96">
                <h2 className="text-2xl mb-4">Assistant Information</h2>
                <p>This is a piece of catchy information that the assistant wants to convey.</p>
                <button onClick={closeModal} className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Close
                </button>
            </div>
        </div>
    );
}

export default Modal;
