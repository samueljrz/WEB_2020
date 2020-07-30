import React from 'react'

class Enemy extends React.Component {
  render() {
    return (
      <div className="card" style={{width: "18rem"}}>
        <img class="card-img-top" src={require(this.props.img+"")} alt="" />
        <div class="card-body">
          <h3 class="card-title">{this.props.name}</h3>
        </div>
      </div>

    )
  }           
}

export default Enemy;