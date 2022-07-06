import React from 'react'
import Button from './Button';
import Input from './Input';

const Form = () => {
  return (
    <form>
      <p>
        <Input label="E-mail" id="email" type="text" htmlFor="email" placeHolder="E-mail" />
      </p>
      <p>
        <Input label="Senha" type="password" htmlFor="password" placeHolder="senha" />
      </p>
      <p>
        <Button />
      </p>
    </form>
  )
}

export default Form;