import React from 'react';
import { CSSTransition } from 'react-transition-group';

function OfferModal(props) {
  return (
    <CSSTransition
      in={props.show}
      classNames="modal"
      timeout={300}
      unmountOnExit
    >
      <div className="fixed z-10 inset-0 overflow-y-auto flex items-center justify-center">
        <div className="bg-white rounded-lg shadow-lg p-6 relative z-10">
          <h2 className="text-lg font-medium mb-4">{props.title}</h2>
          <p className="mb-4">{props.content}</p>
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
            onClick={props.onClose}
          >
            Close
          </button>
        </div>
        <div className="fixed inset-0 bg-gray-700 bg-opacity-50 blur-md z-0"></div>
      </div>
    </CSSTransition>
  );
}

export default OfferModal;
