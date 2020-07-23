import React from 'react';
import img from '../../assets/picture.JPG';

class Aluno extends React.Component {
  render() {
    return (
      <div class="card">
        <div class="card-body">
          Meu nome é {this.props.name}, sou do curso de {this.props.curso} e minha cidade natal é {this.props.cidade}
        </div>
      </div>
    )
  }           
}

export default Aluno;