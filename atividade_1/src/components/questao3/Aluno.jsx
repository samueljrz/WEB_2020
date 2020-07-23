import React from 'react'

export default props => {
    return  <div>
              <h2>Estudante {props.nome}, do Curso de {props.curso} e minha cidade de origem é {props.cidade}</h2>
            </div>
}