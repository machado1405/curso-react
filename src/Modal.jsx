import React from 'react'

function Modal({modal, setModal}) {

  if(modal === true) 
  return (
    <div>
      <p>Esse é um modal</p>
      <button onClick={() => setModal(false)}>Fechar</button>
    </div>
  );
  return null;
};

export default Modal;