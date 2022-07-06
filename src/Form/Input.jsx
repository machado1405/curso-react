import React from 'react'

const Input = ({ label, id, type, placeHolder }) => {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input type={type} id={id} placeHolder={placeHolder} />
    </>
  )
}

export default Input;