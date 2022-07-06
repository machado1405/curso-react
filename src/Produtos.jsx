import React from 'react'
import Produto from './Produto';
import Titulo from './Titulo';

const Produtos = () => {
  const produtos = [
    { nome: 'Notebook', propriedades: ['16gb ram', '512gb']},
    { nome: 'Smartphone', propriedades: ['2gb ram', '128gb']},
  ];
  return (
    <div style={{ border: '1px solid', margin: '1rem 0', padding: '1rem' }}>
      <Titulo texto="Produtos" />
      {produtos.map((produto) => (
        <Produto key={produto.nome} {...produto} />
      ))}
    </div>
  )
}

export default Produtos