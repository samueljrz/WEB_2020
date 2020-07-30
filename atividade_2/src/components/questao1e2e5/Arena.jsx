import React from 'react'
import Hero from './Hero'
import Enemy from './Enemy'
import path from './path'

export default props => {
  return (
    <div>
      <h1>{props.arena}</h1>
      <Hero name="Baki" img={path.imgbaki} />
      <br />
      <h2>VS</h2>
      <br />
      <Enemy name="Yujiro" img={path.imgogre} />
    </div>
  )                                                                                                                                                                                                              
}