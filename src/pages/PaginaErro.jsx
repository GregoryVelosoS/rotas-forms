import React from 'react'

import { useNavigate } from 'react-router-dom'

const PaginaErro = () => {
    const navigate = useNavigate()

    const VoltarHome = () => {
       navigate("/")
    }
  
    return (
    <div>
      <h1>Esta página não existe</h1>
      <button onClick={VoltarHome}> Início </button>
    </div>
  )
}

export default PaginaErro
