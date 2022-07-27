import React from 'react'

function ButtonModal({ setModal }) {
  return (
    <button onClick={() => setModal(true)}>Abrir modal</button>
  )
}

export default ButtonModal