import React from 'react'

class Hero extends React.Component {
  render() {
    return (
      <div className="card" style={{width: "18rem"}}>
        <img className="card-img-top" src={require(this.props.img+"")} alt="" />
        <div className="card-body">
          <h3 className="card-title">{this.props.name}</h3>
        </div>
      </div>

    )
  }           
}

export default Hero;
